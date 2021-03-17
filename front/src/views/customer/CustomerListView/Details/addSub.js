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
import TextField from '@material-ui/core/TextField';
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
              Добавить адрес
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

            {/*address: Object,*/}
            {/*residents: Array,*/}
            {/*owner: [{type: Schema.Types.ObjectId, ref: "User"}],*/}
            {/*balance: Number,*/}
            {/*houseArea: Number,*/}
            {/*housingType: String,*/}
            {/*territoryType: String,*/}
            {/*geoPosition: String,*/}
            {/*operation: Array,*/}
            {/*waterMeter: Number*/}
            <Container maxWidth="lg">
          <form className={`${classes.root} formIn`} noValidate autoComplete="off">
            <div>
              <TextField required id="standard-required" label="ФИО"  />
              <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <br/>
              <TextField
                id="standard-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="standard-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField id="standard-search" label="Search field" type="search" />
              <br/>
              <TextField
                id="standard-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
              />
            </div>
            <div>
              <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Hello World"
                variant="filled"
              />
              <TextField
                disabled
                id="filled-disabled"
                label="Disabled"
                defaultValue="Hello World"
                variant="filled"
              />
              <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
              <TextField
                id="filled-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
                variant="filled"
              />
              <TextField
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
              <TextField id="filled-search" label="Search field" type="search" variant="filled" />
              <TextField
                id="filled-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
                variant="filled"
              />
            </div>
            <div>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
                variant="outlined"
              />
              <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
                variant="outlined"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />
              <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
              <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
                variant="outlined"
              />
            </div>
          </form>
            </Container>
          </Box>
        </List>
      </Dialog>
    </div>
  );
}
