import React from 'react';
import { Card, CardContent, Typography } from "@mui/material";
import "../InfoBox.css";


const HealthProfile = (props, active, isRed) => {
    return(
        <Card raised="true">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    <h1>User</h1>
                </Typography>
            </CardContent>
            <CardContent>
                <Typography color="textSecondary">
                    <h1>Saved Locations</h1>
                </Typography>
            </CardContent>
            <CardContent>
                <Typography color="textSecondary">
                    <h1>Comments</h1>
                </Typography>
            </CardContent>
        </Card>
        
    )
}

export default HealthProfile;