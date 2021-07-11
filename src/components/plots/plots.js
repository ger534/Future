import React, { } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';

let cols = [
    { title: "Título del capítulo" },
    { title: "El viaje de Aniristuv" },
    { title: "Cápsulas de aprendizaje" }
]

let rows = [
    { chapter: "Términos y condiciones", plot: "Planteamiento del universo en el que se desarrolla la obra", knowledge: "???" },
    { chapter: "Hola mundo", plot: "El viaje de 305 hacia la realidad. Introducción al antogonista", knowledge: "Ids, variables, ciclos ???" },
    { chapter: "Post mortem", plot: "El viaje de 99 hacia la muerte. El antagonista vive y es más complejo de lo esperado", knowledge: "Algoritmos (de ordenamiento), códigos de colores RGB, HEX" }
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
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {cols.map((col) =>
                            <TableCell key={col.title}>{col.title}</TableCell>
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








