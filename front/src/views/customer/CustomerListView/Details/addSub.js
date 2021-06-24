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
import {addSubFetch} from "../fetch/addSubFetch";


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
  const handleSubmitApply = async (values)=>{
    const response = await addSubFetch(values)
    props.props.openSubClick(false)
  }
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
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  middleName: '',
                  code: '',
                  addressStreet: '',
                  addressNumberHouse: '',
                  addressCorpus: '',
                  addressKV: '',
                  houseArea: '',
                  residentsCount: '',
                  housingType: '',
                  territoryType: '',
                  waterMeter: '',
                  geoPosition: '',
                  tel: '',
                  tariffs: ''
                                }}
                onSubmit={(values, { setSubmitting }) => {
                  handleSubmitApply(values)
                }}
              >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                  <form onSubmit={handleSubmit} className={`${classes.root} formIn`} noValidate autoComplete="off">
                    <div>
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.firstName} name={"firstName"} required  label="Фамилия"  />
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.lastName} name={"lastName"} required  label="Имя"  />
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.middleName} name={"middleName"} required  label="Отчество"  />
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.code} name={"code"} required  label="Код"  />
                      <br/>
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.addressStreet} name={"addressStreet"} required  label="Улица"  />
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.addressNumberHouse} name={"addressNumberHouse"} required  label="Дом №"  />
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.addressCorpus} name={"addressCorpus"} required  label="Корпус №"  />
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.addressKV} name={"addressKV"} required  label="Квартира №"  />
                      <br/>
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.houseArea} name={"houseArea"}  required  label="Общая площадь"  />
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.residentsCount} name={"residentsCount"} required  label="Количество жильцов"  />
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.housingType} name={"housingType"} required  label="Вид жилья" SelectProps={{native: true}} select>
                        <option value={"private"}>Приватизированное</option>
                        <option value={"no private"}>Не приватизированное</option>
                      </TextField>
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.territoryType} name={"territoryType"} required  label="Тип жилья" SelectProps={{native: true}} select>
                        <option value={"GOS"}>Гос-сектор</option>
                        <option value={"CHAS"}>Частный сектор</option>
                      </TextField>
                      <br/>
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.waterMeter} name={"waterMeter"}required  label="Счетчик воды №"  />
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.geoPosition} name={"geoPosition"}  label="Геопозиция"  />
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.tel} name={"tel"} required  label="Телефон"  />
                      <TextField onChange={handleChange} onBlur={handleBlur} value={values.tariffs} name={"tariffs"} required  label="Тарифы"  />
                      <br/>
                      <Button
                        color="primary"
                        variant="contained"
                        type={"submit"}>
                        сохранить
                      </Button>
                    </div>

                  </form>
                )}
              </Formik>

            </Container>
          </Box>
        </List>
      </Dialog>
    </div>
  );
}
