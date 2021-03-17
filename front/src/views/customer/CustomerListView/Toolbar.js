/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import AddSub from "./Details/addSub";
import AddTariffs from "./Details/addTariffs";

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  addButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  const [openSub, setOpenSub] = React.useState(false);

  const openSubClick = (bool) => {
    setOpenSub(bool);
  };
  const [openTariffs, setOpenTariffs] = React.useState(false);

  const openTariffsClick = (bool) => {
    setOpenTariffs(bool);
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Button className={classes.exportButton}>
          Показать абонентов
        </Button>
        <Button className={classes.exportButton}>
          Показать Тарифы
        </Button>
        <Button onClick={()=>openTariffsClick(true)}
          className={classes.addButton}
          color="primary"
          variant="contained"
        >
          Добавить тариф
        </Button>
        <AddTariffs props={{open: openTariffs, openTariffsClick}}/>
        <Button onClick={()=>openSubClick(true)}
          color="primary"
          variant="contained"
        >
          Добавить адрес
        </Button>
        <AddSub props={{open: openSub, openSubClick}}/>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
