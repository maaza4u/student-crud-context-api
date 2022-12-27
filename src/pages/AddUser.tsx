import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useGlobalContext } from '../contexts/GlobalState';
import { IUser } from '../types';
import { FormControl,FormLabel,Input,Button, Grid, Container} from '@material-ui/core';
import * as Yup from 'yup';
import { Form, Field,useFormik } from 'formik';
import { schemaValidation } from "../validationschema";

type Props = {

  users: IUser[];
  setUsers: (data : IUser []) => void;
  onBackBtnClickHnd: () => void;
  handleSubmit:any
}

const initialValues : IUser = {
  id: uuid(),
  name:'',
  email:'',
  phone:''
}




const AddUser = (props: Props) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  // const [users, setusers] =  useState<string>('');
  const history = useHistory();
  const { addUser } = useGlobalContext();
  const{users,setUsers,onBackBtnClickHnd} = props

  // const onSubmit =(values:any) => {
  //   const newUser: IUser = {
  //     id: uuid(),
  //     name,
  //     email,
  //     phone
  //   };

  //   addUser(newUser);

  //   // console.log('new user added:', addUser);
  //   history.push('/');
  //   values.id = users.length + 1;
      
  //   setUsers([...users,values])
  //   onBackBtnClickHnd();
       
  //   // same shape as initial values
  //   console.log(values);
  // }

  // function onSubmitt() {
  //   const newUser: IUser = {
  //     id: uuid(),
  //     name,
  //     email,
  //     phone
  //   };

  //   addUser(newUser);

  //   // console.log('new user added:', addUser);
  //   history.push('/');
   
  // }




  const onChangeName = (e: any) => {
    setName(e.target.value);
    
  };

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e: any) => {
    setPhone(e.target.value);
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    // validateOnMount:true,
    validationSchema: schemaValidation,
    // enableReinitialize:true,
    onSubmit: (values, action) => {
  
      values.id = users.length + 1;
    
      setUsers([...users,values])
      // onSubmitClickHnd(values);
      console.log(
        "valueone",
        users
      );
      action.resetForm();
      addUser(initialValues);
     

    },
  });



  return (
    <> 
      <Grid>
        <Container>
      <h3 style={{color:'black'}}>ADD STUDENT INFO</h3>

      
      <form onSubmit={handleSubmit}>
        <FormControl className="mb-2">
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


