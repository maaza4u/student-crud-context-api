import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useGlobalContext } from '../contexts/GlobalState';
import { IUser } from '../types';
import { FormControl,FormLabel,Input,Button, Grid, Container} from '@material-ui/core';


const AddUser: React.FC = () => {
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

      <form onSubmit={onSubmit}>
        <FormControl className="mb-2">
          <div>
          <FormLabel>Name : </FormLabel>
           
          <Input
            type="text"
            onChange={onChangeName}
            placeholder="Enter name"
            required
          />
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
        <Button type="submit" variant="contained" color="primary" style={{margin:'5px'}}>Submit</Button>
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
