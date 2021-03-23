/* eslint-disable */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import {respChangeState} from './fetch/getSubAllFetch'

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));



const Results = ({ className, customers, ...rest }) => {
  const classes = useStyles();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [subs, setSubs] = useState([])
  const [maximumSubs, setMaximumSubs] = useState(0)


  useEffect(()=>{
    respChangeState({page, limit, setPage, setSubs, setMaximumSubs})
  },[limit, page])

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    // respChangeState({page, limit, setPage, setSubs, setMaximumSubs})
  };
  const handlePageChange = async (event, newPage) => {
    setPage(newPage);
    // respChangeState({page, limit, setPage, setSubs, setMaximumSubs})
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  ФИО
                </TableCell>
                <TableCell>
                  Баланс
                </TableCell>
                <TableCell>
                  Адрес
                </TableCell>
                <TableCell>
                  Телефон
                </TableCell>
                <TableCell>
                  Номер договора
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/*slice(page*limit, page*limit+limit).*/}
              {subs.map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                >
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={undefined}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {`${customer.lastName} ${customer.firstName} ${customer.middleName}`}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.balance}
                  </TableCell>
                  <TableCell>
                    {`${customer.addressStreet}, ${customer.addressNumberHouse}, ${customer.addressCorpus}, ${customer.addressKV}`}
                  </TableCell>
                  <TableCell>
                    {customer.tel}
                  </TableCell>
                  <TableCell>
                    {customer.id}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={maximumSubs}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default Results;
