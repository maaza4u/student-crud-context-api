import React, { useState, useEffect} from 'react';
import { FormLabel,Button,Container,Grid } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useGlobalContext } from '../contexts/GlobalState';
import { IUser, IParams } from '../types';
import { Input } from '@mui/material';


type Props = { 
  data: IUser;
  onBackBtnClickHnd: () => void;
  users : IUser [];
  setUsers: (data : IUser []) => void;
  // onUpdateClickHnd: (data: IUser) => void;
}

const EditUser = (props:Props) => {
 
  const history = useHistory();
  

  const { currentState, editUser } = useGlobalContext();
  const users = currentState.users;
  const params: IParams = useParams();

  const [selectedUser, setSelectedUser] = useState<IUser>({
    id: '',
    name: '',
    email:'',
    phone:''
  });


  const currentUserId = params.id;

  useEffect(() => {
    const userId: Number | String = currentUserId;
    const findSelectedUser: any = users.find(
      user => user.id === Number(userId) || user.id === String(userId)
    );
    setSelectedUser(findSelectedUser);
  }, [currentUserId, users]);

  const onSubmit =(e:any)=> {
    e.preventDefault();
     editUser(selectedUser)
    // onUpdateClickHnd(selectedUser)
    // onBackBtnClickHnd();
    console.log('new user edited:', selectedUser);
    history.push('/');
  }

  const onChangeEditName = (
    event:any
  ) => {
    setSelectedUser({
        ...selectedUser,
      [event.target.name]: event.target.value,

    });
  };

  const onChangeEditEmail = (
    event:any
  ) => {
    setSelectedUser({
      ...selectedUser,
      [event.target.email]: event.target.value,
    });
  };

  const onChangeEditPhone = (
    event:any
  ) => {
    setSelectedUser({
      ...selectedUser,
      [event.target.phone]: event.target.value,
    });
  };




  return (
    <>
      <Grid>
        <Container>
      <h3>Edit Student Info</h3>

      <form onSubmit={onSubmit}>
       
          <div>
          <FormLabel>Name :</FormLabel>
          <Input
            id='name'
            type="text"
            name='name'
            value={selectedUser.name}
            onChange={onChangeEditName}
            placeholder="Enter new name"
            required
          />
          </div>
          <div>
          <FormLabel>Email :</FormLabel>
          <Input
            id='email'
            type="text"
            value={selectedUser.email}
            // value={selectedUser.email}
            name='email'
          
            onChange={onChangeEditEmail}
            placeholder="Enter New Email"
            required
          />
          </div>
          <div>
          <FormLabel>Phone :</FormLabel>
          <Input
            id='phone'
            value={selectedUser.phone}
            name='phone'
            type="text"
            onChange={onChangeEditPhone}
            placeholder="Enter New Phone Number"
            required
          />
          </div>
        <div>
        <Button type="submit" variant='contained' color='primary' style={{margin:'5px'}}>
          Submit
        </Button>
        <Button variant='contained' color='secondary'>
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

export default EditUser;

