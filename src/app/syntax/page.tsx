"use client";
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {
    get
} from "react-intl-universal";
import adjectives from "./adjective.json";
import numbers from "./number.json";
import nouns from "./noun.json";
import verbs from "./verb.json";
export default function Syntax() {
    return (
        <Box sx={{
            p: 2
        }}>
            <Typography variant="h3" sx={{
                mb: 2
            }}>
                {get("syntaxpage.suffix")}
            </Typography>
            <Box component="section" sx={{
                mb: 4
            }}>
                <Typography variant="h4" sx={{
                    mb: 2
                }}>
                    {get("syntaxpage.adjective")}
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="adjective">
                        <TableHead>
                            <TableRow>
                                <TableCell>{get("syntaxpage.role")}</TableCell>
                                <TableCell align="right">{get("syntaxpage.suffix")}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(adjectives as [string, string][]).map(adjective => (
                                <TableRow key={adjective[0]} sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0
                                    }
                                }}>
                                    <TableCell component="th" scope="row">
                                        {get(`syntaxpage.${adjective[0]}`)}
                                    </TableCell>
                                    <TableCell align="right">
                                        {adjective[1]}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box component="section" sx={{
                mb: 4
            }}>
                <Typography variant="h4" sx={{
                    mb: 2
                }}>
                    {get("syntaxpage.number")}
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="number">
                        <TableHead>
                            <TableRow>
                                <TableCell>{get("syntaxpage.role")}</TableCell>
                                <TableCell align="right">{get("syntaxpage.suffix")}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(numbers as [string, string][]).map(number => (
                                <TableRow key={number[0]} sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0
                                    }
                                }}>
                                    <TableCell component="th" scope="row">
                                        {get(`syntaxpage.${number[0]}`)}
                                    </TableCell>
                                    <TableCell align="right">
                                        {number[1]}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box component="section" sx={{
                mb: 4
            }}>
                <Typography variant="h4" sx={{
                    mb: 2
                }}>
                    {get("syntaxpage.noun")}
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="noun">
                        <TableHead>
                            <TableRow>
                                <TableCell>{get("syntaxpage.role")}</TableCell>
                                <TableCell align="right">{get("syntaxpage.suffix")}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(nouns as [string, string][]).map(noun => (
                                <TableRow key={noun[0]} sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0
                                    }
                                }}>
                                    <TableCell component="th" scope="row">
                                        {get(`syntaxpage.${noun[0]}`)}
                                    </TableCell>
                                    <TableCell align="right">
                                        {noun[1]}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box component="section" sx={{
                mb: 4
            }}>
                <Typography variant="h4" sx={{
                    mb: 2
                }}>
                    {get("syntaxpage.verb")}
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="verb">
                        <TableHead>
                            <TableRow>
                                <TableCell>{get("syntaxpage.role")}</TableCell>
                                <TableCell align="right">{get("syntaxpage.master")}</TableCell>
                                <TableCell align="right">{get("syntaxpage.slave")}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(verbs as [string, string, string][]).map(verb => (
                                <TableRow key={verb[0]} sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0
                                    }
                                }}>
                                    <TableCell component="th" scope="row">
                                        {get(`syntaxpage.${verb[0]}`)}
                                    </TableCell>
                                    <TableCell align="right">
                                        {verb[1]}
                                    </TableCell>
                                    <TableCell align="right">
                                        {verb[2]}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}