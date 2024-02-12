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
import { it } from "node:test";
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
            {([["adjective", adjectives], ["number", numbers], ["noun", nouns]] as [string, [string, string][]][]).map(item => <Box component="section" sx={{
                mb: 4
            }} key={item[0]}>
                <Typography variant="h4" sx={{
                    mb: 2
                }}>
                    {get(`syntaxpage.${item[0]}`)}
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
                            {item[1].map(word => (
                                <TableRow key={word[0]} sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0
                                    }
                                }}>
                                    <TableCell component="th" scope="row">
                                        {get(`syntaxpage.${word[0]}`)}
                                    </TableCell>
                                    <TableCell align="right">
                                        {word[1]}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>)}
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