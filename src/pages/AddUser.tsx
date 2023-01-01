import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useGlobalContext } from '../contexts/GlobalState';
import { IUser } from '../types';
import { FormLabel,Button, Grid, Container} from '@material-ui/core';
import {  useFormik } from 'formik';
import { schemaValidation } from "../validationschema";
import { Input } from '@mui/material';

type Props = {
  handleSubmit: any
  users: IUser[];
  setUsers: (data : IUser []) => void;
  onBackBtnClickHnd: () => void;
  // values: IUser[]
}

const initialValues : IUser = {
  id: uuid(),
  name:'',
  email:'',
  phone:''
}




const AddUser = (props: Props) => {
  // const [name, setName] = useState<string>('');
  // const [email, setEmail] = useState<string>('');
  // const [phone, setPhone] = useState<string>('');
  // const [users, setusers] =  useState<string>('');
  const history = useHistory();
  const { addUser } = useGlobalContext();
  const{users,setUsers,onBackBtnClickHnd} = props

  

  const { values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues,
    // validateOnMount:true,
    validationSchema: schemaValidation,
    // enableReinitialize: true,
    validateOnMount:true,
    onSubmit: async (values,action) => {
      console.log(
        values,
        users,
      );
      action.resetForm();
      // addUser(initialValues);
      addUser(values);
      history.push('/');
    },
  });



  return (
    <> 
      <Grid>
        <Container>
      <h3 style={{color:'black'}}>ADD STUDENT INFO</h3>

      
      <form onSubmit={handleSubmit}>
        
          <div>
          <FormLabel>Name : </FormLabel>
           
          <Input
            id='name'
            name='name'
            type="name"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            placeholder="Enter name"
            autoComplete='of' 
            required
          />
            {touched.name && errors.name ? (
            <div style={{color:'red',fontSize:'15px',width:'100%',paddingLeft:'50px',paddingTop:'10px'}} >{errors.name}</div>
          ) : null} 
    
          </div>
          <div>
          <FormLabel>Email : </FormLabel>
           
          <Input
            id='email'
            name='email'
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value = {values.email}
            placeholder="Enter Email"
            autoComplete='of'
            required
          />
             {touched.email && errors.email? (
            <div style={{color:'red',fontSize:'15px',width:'100%',paddingLeft:'50px',paddingTop:'10px'}} >{errors.email}</div>
          ) : null} 
    
          </div>
          <div>
          <FormLabel>Phone : </FormLabel>
           
          <Input
             id='phone'
            name='phone'
            type="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value = {values.phone}
            placeholder="Enter Phone"
            required
            autoComplete='of'
          />
            {touched.phone && errors.phone? (
            <div style={{color:'red',fontSize:'15px',width:'100%',paddingLeft:'50px',paddingTop:'10px'}} >{errors.phone}</div>
          ) : null} 
          </div>
        <div>
        
        <Button type='submit' variant="contained" color="primary" style={{margin:'5px'}}>Submit</Button>
        
    
        <Button type='button' variant="contained" color='secondary'>
        <Link to="/">
          Cancel
        </Link>
        </Button>
        </div>

      </form>

      
      </Container>
      </Grid>
      
    </>
  );
};


export default AddUser;


