import React, { } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#3f51b5",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

let cols = [
    { title: "Título del capítulo" },
    { title: "El viaje de Aniristuv" },
    { title: "Cápsulas de aprendizaje" }
]

let rows = [
    { chapter: "Términos y condiciones", plot: "Planteamiento del universo en el que se desarrolla la obra", knowledge: "???" },
    { chapter: "Hola mundo", plot: "El viaje de 305 hacia la realidad. Introducción al antogonista", knowledge: "Ids, variables, ciclos ???" },
    { chapter: "Post mortem", plot: "El viaje de 99 hacia la muerte. El antagonista vive y es más complejo de lo esperado", knowledge: "Algoritmos (de ordenamiento), códigos de colores RGB, HEX" },
    { chapter: "Disonancia cognitiva", plot: "Religión (?)", knowledge: "???" },
    { chapter: "Histología", plot: "Experimentación humana, evolución forzada o dirigida", knowledge: "???" },
    { chapter: "Jaula de Faraday", plot: "Deporte, e-sports", knowledge: "???" },
    { chapter: "Folie à deux", plot: "fecundación", knowledge: "???" },
    { chapter: "Ludópatas", plot: "Moneda, finanzas, criptología", knowledge: "???" },
    { chapter: "Ambivalencia", plot: "La inevitable incertidumbre de existir en el multiverso virtual ", knowledge: "???" },
];


function Plots(props) {

    //table
    const [page, setPage] = React.useState(0);
    const [rowsPerPage] = React.useState(10);


    const onPageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <>
            <Typography component="h2" variant="h3" color="primary" gutterBottom>
                Esquema General
            </Typography>
            <Box>
                <TableContainer component={Paper}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                {cols.map((col) =>
                                    <StyledTableCell key={col.title}>{col.title}</StyledTableCell>
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow key={row.chapter}>
                                    <TableCell>{row.chapter}</TableCell>
                                    <TableCell>{row.plot}</TableCell>
                                    <TableCell>{row.knowledge}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            {rows !== undefined && <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={onPageChange}
            />}

        </>
    )
}
export default Plots;








