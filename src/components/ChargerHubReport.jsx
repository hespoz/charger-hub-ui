import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const ChargerHubReport = ({chargerList = []}) => {

    const getTotalAmperesConsumed = (chargerList) => {
        const mapEnumToNumber = (value) => {
            switch(value){
                case 'MAX_AMPERES_20':
                    return 20;
                case 'MIN_AMPERES_10':
                    return 10;
                default:
                    return 0;
            }
        }

        let total = 0;
        for (let i=0; i < chargerList.length; i++) {
            if(mapEnumToNumber(chargerList[i].amperes) !== 0){
                total += parseInt(mapEnumToNumber(chargerList[i].amperes));
            }
        }
        return total;
    }

    return <div style={{padding:25}}>
        <Typography>{`Total Amperes consumed: ${getTotalAmperesConsumed(chargerList)}`}</Typography>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Amperes</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>

                        {chargerList.map((chargerHub, index) => {
                            return <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {chargerHub.identifier}
                                </TableCell>
                                <TableCell>{chargerHub.amperes}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        
    </div>
}

export default ChargerHubReport;