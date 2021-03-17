/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Formik } from 'formik';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddSub(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog fullScreen open={props.props.open} onClose={()=>props.props.openSubClick(false)} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={()=>props.props.openSubClick(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Добавить адрес:
            </Typography>
            <Button autoFocus color="inherit" onClick={()=>props.props.openSubClick(false)}>
              сохранить
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <Divider />
          <Box
            paddingTop={"50px"}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            >
            <Container maxWidth="lg">
          <form className={`${classes.root} formIn`} noValidate autoComplete="off">
            <div>
              <TextField required id="standard-required" label="Фамилия"  />
              <TextField required id="standard-disabled" label="Имя"  />
              <TextField required id="standard-disabled" label="Отчество"  />
              <TextField required id="standard-disabled" label="Код"  />
              <br/>
              <TextField required id="standard-required" label="Улица"  />
              <TextField required id="standard-disabled" label="Дом №"  />
              <TextField required id="standard-disabled" label="Корпус №"  />
              <TextField required id="standard-disabled" label="Квартира №"  />
              <br/>
              <TextField required id="standard-required" label="Общая площадь"  />
              <TextField required id="standard-disabled" label="Количество жильцов"  />
              <TextField required id="standard-disabled" label="Вид жилья" SelectProps={{native: true}} select>
                <option value={"private"}>Приватизированное</option>
                <option value={"no private"}>Не приватизированное</option>
              </TextField>
              <TextField required id="standard-disabled" label="Тип жилья" SelectProps={{native: true}} select>
                <option value={"gossector"}>Гос-сектор</option>
                <option value={"chastniysector"}>Частный сектор</option>
              </TextField>
              <br/>
              <TextField required id="standard-required" label="Счетчик воды №"  />
              <TextField required id="standard-disabled" label="Геопозиция"  />
              <br/>
            </div>
          </form>
            </Container>
          </Box>
        </List>
      </Dialog>
    </div>
  );
}
