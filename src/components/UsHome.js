import React, { useEffect, useState } from 'react';
import '../App.css';


import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@mui/material";
import InfoBox from "../InfoBox";
import LineGraph from "../LineGraph";
import Table from "../Table";
import { sortData, prettyPrintStat } from "../util";
import numeral from "numeral";
import UsMap from "../UsMap";
import "leaflet/dist/leaflet.css";

const UsHome = () => {
  const [state, setInputState] = useState("country-wide");
  const [stateInfo, setStateInfo] = useState({});
  const [states, setStates] = useState([]);
  const [mapState, setMapState] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/states")
      .then((response) => response.json())
      .then((data) => {
        setStateInfo(data);
      });
  }, []);

  useEffect(() => {
    const getStatesData = async () => {
      fetch(`https://disease.sh/v3/covid-19/states/${state}`)
        .then((response) => response.json())
        .then((data) => {
          const states = data.map((state) => ({
            name: states.state,
            value: state.stateInfo.iso2,
          }));
          let sortedData = sortData(data);
          setStates(states);
          setMapState(data);
          setTableData(sortedData);
        });
    };

    getStatesData();
  }, []);

  console.log(casesType);

  const onStateChange = async (e) => {
    const stateCode = e.target.name;

    const url =
      stateCode === "countrywide"
        ? "https://disease.sh/v3/covid-19/states"
        : `https://disease.sh/v3/covid-19/states/${state}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputState(stateCode);
        setStateInfo(data);
        setMapCenter([37.09, 95.71]);
        setMapZoom(4);
      });
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 Tracker for USA</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={state}
              onChange={onStateChange}
            >
              <MenuItem value="countrywide">Country Wide</MenuItem>
              {states.map((state) => (
                <MenuItem value={state.value}>{state.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(stateInfo.todayCases)}
            total={numeral(stateInfo.cases).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={prettyPrintStat(stateInfo.todayRecovered)}
            total={numeral(stateInfo.recovered).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(stateInfo.todayDeaths)}
            total={numeral(stateInfo.deaths).format("0.0a")}
          />
        </div>
        {/* <UsMap
          state={mapState}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        /> */}
      </div>
      <Card className="app__right">
        <CardContent>
          <div className="app__information">
            <h3>Live Cases by State</h3>
            <Table countries={tableData} />
            <h3>Countrywide {casesType}</h3>
            <LineGraph casesType={casesType} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsHome;
