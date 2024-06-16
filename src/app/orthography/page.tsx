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
import consonants from "./consonants.json";
import letters from "./letters.json";
import vowels from "./vowels.json";
export default function Orthography() {
    return (
        <Box sx={{
            p: 2
        }}>
            <Box component="section" sx={{
                mb: 4
            }}>
                <Typography variant="h4" sx={{
                    mb: 2
                }}>
                    {get("orthographypage.table")}
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="letters">
                        <TableHead>
                            <TableRow>
                                <TableCell>{get("orthographypage.uppercase")}</TableCell>
                                <TableCell>{get("orthographypage.lowercase")}</TableCell>
                                <TableCell align="right">{get("orthographypage.read")}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(letters as [Lowercase<string>, string][]).map(letter => (
                                <TableRow key={letter[0]} sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0
                                    }
                                }}>
                                    <TableCell scope="row">
                                        {letter[0].toLocaleUpperCase()}
                                    </TableCell>
                                    <TableCell>
                                        {letter[0]}
                                    </TableCell>
                                    <TableCell align="right">
                                        {letter[1]}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            {([["vowel", vowels], ["consonant", consonants]] as [string, [string, string][]][]).map(item => <Box sx={{
                mb: 4
            }} component="section" key={item[0]}>
                <Typography variant="h4" sx={{
                    mb: 1
                }}>
                    {get(`orthographypage.${item[0]}table`)}
                </Typography>
                {item[0] === "vowel" && <Typography variant="subtitle1" sx={{
                    mb: 2
                }}>
                    {get("orthographypage.V")}
                </Typography>}
                <TableContainer component={Paper}>
                    <Table aria-label={item[0]}>
                        <TableHead>
                            <TableRow>
                                <TableCell>{get(`orthographypage.${item[0]}`)}</TableCell>
                                <TableCell align="right">{get("orthographypage.ipa")}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {item[1].map(letter => (
                                <TableRow key={letter[0]} sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0
                                    }
                                }}>
                                    <TableCell scope="row">
                                        {letter[0]}
                                    </TableCell>
                                    <TableCell align="right">
                                        {letter[1]}
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
                    {get("orthographypage.stress.title")}
                </Typography>
                <Typography variant="body1" sx={{
                    mb: 2
                }} paragraph>
                    {get("orthographypage.stress.body")}
                </Typography>
            </Box>
            <Box component="section" sx={{
                mb: 4
            }}>
                <Typography variant="h4" sx={{
                    mb: 2
                }}>
                    {get("orthographypage.accent.title")}
                </Typography>
                <Box sx={{
                    p: 2
                }}>
                    <Typography variant="h5" sx={{
                        mb: 2
                    }}>
                        {get("orthographypage.accent.question.title")}
                    </Typography>
                    <Typography variant="body1" sx={{
                        mb: 2
                    }} paragraph>
                        {get("orthographypage.accent.question.body")}
                    </Typography>
                </Box>
                <Box sx={{
                    p: 2
                }}>
                    <Typography variant="h5" sx={{
                        mb: 2
                    }}>
                        {get("orthographypage.accent.focus.title")}
                    </Typography>
                    <Typography variant="body1" sx={{
                        mb: 2
                    }} paragraph>
                        {get("orthographypage.accent.focus.body")}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}