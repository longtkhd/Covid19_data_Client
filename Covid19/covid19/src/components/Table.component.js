import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  getAllCase,
  getAllCaseSuccess,
  getAllCaseFailed
} from '../actions/index';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export function SimpleTable(props) {
  const classes = useStyles();
  useEffect(() => {
    props.dispatch(getAllCase());

  }, []);
  console.log(props.AllCase)


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Cases</TableCell>
            <TableCell align="right">TodayCases</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.AllCase.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.country}
              </TableCell>
              <TableCell color = {'red'} align="right">{row.cases}</TableCell>
              <TableCell align="right">{row.todayCases}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
              <TableCell align="right">{row.todayDeaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    AllCase: state.users  
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//     onGetUsers: query => dispatch(getAllCase(query)),
//   };
// }

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

export default compose(

  withConnect,
)(SimpleTable);
