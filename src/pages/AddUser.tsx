import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useGlobalContext } from '../contexts/GlobalState';
import { IUser } from '../types';
import { FormControl,FormLabel,Input,Button, Grid, Container} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
 email: Yup.string().email('Invalid email').required('Required'),
 phone: Yup.string()
 .min(2, 'Too Short!')
 .max(50, 'Too Long!')
 .required('Required'),
});



const AddUser = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [info,setInfo] = useState();

  const history = useHistory();
  const { addUser } = useGlobalContext();

  function onSubmit() {
    const newUser: IUser = {
      id: uuid(),
      name,
      email,
      phone
    };

    addUser(newUser);

    // console.log('new user added:', addUser);
    history.push('/');
   
  }




  const onChangeName = (e: any) => {
    setName(e.target.value);
    
  };

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e: any) => {
    setPhone(e.target.value);
  }

  



  return (
    <> 
      <Grid>
        <Container>
      <h3 style={{color:'black'}}>ADD STUDENT INFO</h3>

      <Formik
       initialValues={{
         name: '',
         email: '',
         phone: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
  
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched,values,handleBlur }) => (

      <Form onSubmit={onSubmit}>
        <FormControl className="mb-2">
          <div>
          <FormLabel>Name : </FormLabel>
           
          <Field
            id='name'
            name='name'
            type="name"
            onChange={onChangeName}
            value={values.name}
            onBlur={handleBlur}
            placeholder="Enter name"
            required
          />
           {errors.name && touched.name ? (
             <div style={{color:'red',fontSize:'15px',width:'15%',paddingLeft:'120px',paddingTop:'10px'}} >{errors.name}</div>
           ) : null}
          </div>
          <div>
          <FormLabel>Email : </FormLabel>
           
          <Input
            name='email'
            type="text"
            onChange={onChangeEmail}
            placeholder="Enter Email"
            required
          />
          </div>
          <div>
          <FormLabel>Phone : </FormLabel>
           
          <Input
            name='phone'
            type="text"
            onChange={onChangePhone}
            placeholder="Enter Phone"
            required
          />
          </div>
        </FormControl>
        <div>
        
        <Button type="submit" variant="contained" color="primary" style={{margin:'5px'}}>Submit</Button>
        
    
        <Button type='button' variant="contained" color='secondary'>
        <Link to="/">
          Cancel
        </Link>
        </Button>
        </div>

      </Form>
        )}
      </Formik>
      
      </Container>
      </Grid>
      
    </>
  );
};


export default AddUser;




