/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";


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

export default function AddTariffs(props) {
  const classes = useStyles();


  return (
    <div>
      <Dialog fullScreen open={props.props.open} onClose={()=>props.props.openTariffsClick(false)} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={()=>props.props.openTariffsClick(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Добавить владельца:
            </Typography>
            <Button autoFocus color="inherit" onClick={()=>props.props.openTariffsClick(false)}>
              Сохранить
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <Box
            paddingTop={"50px"}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >

            {/*name: Object,*/}
            {/*tel: String*/}
            <Container maxWidth="lg">
              <form className={`${classes.root} formIn`} noValidate autoComplete="off">
                <div>
                  <TextField required id="standard-required" label="Название тарифа"  />
                  <TextField required id="standard-required" label="Стоимость в год"  />
                  <TextField required id="standard-required" label="Режим снятия денег"  />
                <br/>
                  <TextField name={"withdrawal"} required id="standard-required" label="Режим снятия" SelectProps={{native: true}} select>
                    <option value={"year"}>Годовой</option>
                    <option value={"month"}>Месячный</option>
                  </TextField>

                </div>
              </form>
            </Container>
          </Box>
        </List>
      </Dialog>
    </div>
  );
}