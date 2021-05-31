import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Title from './Title';
import { useTranslation } from 'react-i18next';
import { getData } from '../../../api/data';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useEffect, useState } from "react";

let cols = [
  { text: "dashboard.table.ags", id: "ags" },
  { text: "dashboard.table.name", id: "name" },
  { text: "dashboard.table.date", id: "date" },
  { text: "dashboard.table.cases", id: "cases" },
]

let rows = [];

export default function Cases() {

  //language
  const { t } = useTranslation('common');

  //table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(10);
  const [ data, setData ] = useState(undefined);


  const onPageChange = (event, newPage) => {
    setPage(newPage);
  };

  //fetch data
  useEffect(() => getData(t).then(res => {
    rows = res.data.data["09162"];
    rows.history.forEach(date => {
      date["date"] = date["date"].toString().slice(0, -14)
    });
    rows.history = rows.history.reverse()
    setData(rows);
    return () => {
      setData(undefined) 
    };
  }).catch(e => {
    setData(undefined)
    rows = []
  }), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (

    <React.Fragment>
      {!data && <CircularProgress style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }} />}

      <Title>{t('dashboard.table.title')}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {cols.map((col) =>
              <TableCell key={col.id}>{t(col.text)}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data !== undefined && data.history.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.date}>
              <TableCell>{rows.ags}</TableCell>
              <TableCell>{rows.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.cases}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {data !== undefined && <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={data.history.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={onPageChange}
      />}

    </React.Fragment>
  );
}
