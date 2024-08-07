import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const UsersTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
}

export default UsersTable


// component eka Paper dhammahama tabale eka flote wenawa table ekak widhiyata. wiwidha size walin hasurawanna lesi