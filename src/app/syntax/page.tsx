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
    get,
    getHTML
} from "react-intl-universal";
import adjectives from "./adjective.json";
import nouns from "./noun.json";
import numbers from "./number.json";
import verbs from "./verb.json";
export default function Syntax() {
    return (
        <Box sx={{
            p: 2
        }}>
            <Typography variant="h4" sx={{
                mb: 2
            }}>
                {get("syntaxpage.suffix")}
            </Typography>
            <Box sx={{
                p: 2
            }}>
                {([["number", numbers]] as [string, [string, string][]][]).map(item => (
                    <Box component="section" sx={{
                        mb: 4
                    }} key={item[0]}>
                        <Typography variant="h5" sx={{
                            mb: 2
                        }}>
                            {get(`syntaxpage.${item[0]}`)}
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table aria-label={get(`syntaxpage.${item[0]}`)}>
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
                                            <TableCell scope="row">
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
                    </Box>
                ))}
                <Box component="section" sx={{
                    mb: 4
                }}>
                    <Typography variant="h5" sx={{
                        mb: 2
                    }}>
                        {get("syntaxpage.verb")}
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label={get("syntaxpage.verb")}>
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
                                        <TableCell scope="row">
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
                <Box component="section" sx={{
                    mb: 4
                }}>
                    <Typography variant="h5" sx={{
                        mb: 2
                    }}>
                        {get("syntaxpage.adjective")}
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label={get("syntaxpage.adjective")}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>{get("syntaxpage.class")}</TableCell>
                                    <TableCell align="right">{get("syntaxpage.adjective")}</TableCell>
                                    <TableCell align="right">{get("syntaxpage.adverb")}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(adjectives as [string, string, string][]).map(adjective => (
                                    <TableRow key={adjective[0]} sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0
                                        }
                                    }}>
                                        <TableCell scope="row">
                                            {get(`syntaxpage.adjectives.${adjective[0]}`)}
                                        </TableCell>
                                        <TableCell align="right">
                                            {adjective[1]}
                                        </TableCell>
                                        <TableCell align="right">
                                            {adjective[2]}
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
                    <Typography variant="h5" sx={{
                        mb: 2
                    }}>
                        {get("syntaxpage.noun")}
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label={get("syntaxpage.noun")}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>{get("syntaxpage.case")}</TableCell>
                                    <TableCell align="right">{get("syntaxpage.a")}</TableCell>
                                    <TableCell align="right">{get("syntaxpage.s")}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(nouns as [string, string, string][]).map(noun => (
                                    <TableRow key={noun[0]} sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0
                                        }
                                    }}>
                                        <TableCell scope="row">
                                            {get(`syntaxpage.${noun[0]}`)}
                                        </TableCell>
                                        <TableCell align="right">
                                            {noun[1]}
                                        </TableCell>
                                        <TableCell align="right">
                                            {noun[2]}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
            <Box component="section" sx={{
                mb: 4
            }}>
                <Typography variant="h4" sx={{
                    mb: 2
                }}>
                    {get("syntaxpage.question.title")}
                </Typography>
                <Box sx={{
                    p: 2
                }}>
                    <Typography variant="h5" sx={{
                        mb: 2
                    }}>
                        {get("syntaxpage.question.standard.title")}
                    </Typography>
                    <Typography variant="body1" sx={{
                        mb: 2
                    }} paragraph>
                        {get("syntaxpage.question.standard.body")}
                    </Typography>
                </Box>
                <Box sx={{
                    p: 2
                }}>
                    <Typography variant="h5" sx={{
                        mb: 2
                    }}>
                        {get("syntaxpage.question.alle.title")}
                    </Typography>
                    <Typography variant="body1" sx={{
                        mb: 2
                    }} paragraph>
                        {get("syntaxpage.question.alle.body")}
                    </Typography>
                </Box>
            </Box>
            <Box component="section" sx={{
                mb: 4
            }}>
                <Typography variant="h4" sx={{
                    mb: 2
                }}>
                    {get("syntaxpage.focus.title")}
                </Typography>
                <Typography variant="body1" sx={{
                    mb: 2
                }} paragraph>
                    {get("syntaxpage.focus.body")}
                </Typography>
            </Box>
            <Box component="section" sx={{
                mb: 4
            }}>
                <Typography variant="h4" sx={{
                    mb: 2
                }}>
                    {get("syntaxpage.syllable.title")}
                </Typography>
                <Typography variant="body1" sx={{
                    mb: 2
                }} paragraph>
                    {getHTML("syntaxpage.syllable.body")}
                </Typography>
            </Box>
        </Box>
    );
}