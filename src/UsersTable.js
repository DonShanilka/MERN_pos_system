import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const UsersTable = (props) => {
    return (
        <TableContainer component={Paper} sx={{ width: '600px' }}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.datarows.length > 0 ? props.datarows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component='th' scope="row">{row.id}</TableCell>
                                <TableCell component='th' scope="row">{row.name}</TableCell>
                                <TableCell>
                                    <Button sx={{
                                        margin: '0px 10px', backgroundColor: '#0073e6', color: '#ffffff', '&:hover': {
                                            opacity: '0.7', backgroundColor: '#0073e6'
                                        }
                                    }} onClick={() => { }}>Update</Button>
                                    <Button sx={{
                                        margin: '0px 10px', backgroundColor: '#ff3333', color: '#ffffff', '&:hover': {
                                            opacity: '0.7', backgroundColor: '#ff3333'
                                        }
                                    }} onClick={() => { }}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell component='th' scope="row">No Data</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UsersTable


// component eka Paper dhammahama tabale eka flote wenawa table ekak widhiyata. wiwidha size walin hasurawanna lesi
// Object instruction. Props wenuwata kelinma use karanna ona eka dhanawa object ekak athule ({})
// map() funtion eken karanne thiyena array eka thawath array ekakata transwer karana eka
// ( key  ) eka ganne ekama ui eka deferent data walata repeat karaganna use karanawa


