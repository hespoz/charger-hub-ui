import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';
import axios from 'axios';

const StreetAdapters = ({chargerList, onUpdateChargerList}) => {

    const onToggle = ({identifier, amperes}) => {
        axios.put(`http://localhost:8080/${amperes === 'OFF' ? 'plug':'unplug'}/${identifier}`).then((response)=>{
            onUpdateChargerList(response.data);
        });
    }

    return <div style={{padding:25}}>
        <Typography>This happen in the street!</Typography>
        <List dense>
        {chargerList.map((chargerHub, index) => {
            return (
            <ListItem key={index} button>
                <ListItemText id={index} primary={chargerHub.identifier} />
                <ListItemSecondaryAction>
                <Checkbox
                    edge="end"
                    onChange={() => onToggle(chargerHub)}
                    checked={chargerHub.amperes !== 'OFF'}
                    inputProps={{ 'aria-labelledby': index }}
                />
                </ListItemSecondaryAction>
            </ListItem>
            );
        })}
        </List>
    </div>
}

export default StreetAdapters;