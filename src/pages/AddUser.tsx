import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useGlobalContext } from '../contexts/GlobalState';
import { IUser } from '../types';
import { FormControl,FormLabel,Input,Button, Grid, Container} from '@material-ui/core';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';


interface FormValues {
  name: string;
  email: string;
  phone: number
}


const AddUser = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

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
     

      <Form onSubmit={onSubmit}>
        <FormControl className="mb-2">
          <div>
          <FormLabel>Name : </FormLabel>
           
          <Field
            name='name'
            type="name"
            onChange={onChangeName}
            placeholder="Enter name"
            required
          />
           {touched.email && errors.email && <div>{errors.email}</div>}
          </div>
          <div>
          <FormLabel>Email : </FormLabel>
           
          <Input
            type="text"
            onChange={onChangeEmail}
            placeholder="Enter Email"
            required
          />
          </div>
          <div>
          <FormLabel>Phone : </FormLabel>
           
          <Input
            type="text"
            onChange={onChangePhone}
            placeholder="Enter Phone"
            required
          />
          </div>
        </FormControl>
        <div>
        
        <Button type="submit" variant="contained" color="primary" style={{margin:'5px'}} disabled={isSubmitting} >Submit</Button>
        
    
        <Button type='button' variant="contained" color='secondary'>
        <Link to="/">
          Cancel
        </Link>
        </Button>
        </div>

      </Form>
      </Container>
      </Grid>
      
    </>
  );
};

interface MyFormProps {
  initialEmail?: string;
  initialName?: string;
  initialPhone: number;
}
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      phone: props.initialPhone|| '',
      name: props.initialName|| ''
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },

  handleSubmit: values => {
    // do submitting things
    console.log(values)
  },
})(AddUser);
export default AddUser;


