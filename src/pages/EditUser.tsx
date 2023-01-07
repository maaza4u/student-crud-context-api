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
    console.log('new user edited:', selectedUser);
    history.push('/');
  }

  const onChangeEditInput = (
    event:any
  ) => {
    setSelectedUser({
        ...selectedUser,
      [event.target.name]: event.target.value,

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
            onChange={onChangeEditInput}
            placeholder="Enter new name"
            required
            autoComplete='of'
          />
          </div>
          <div>
          <FormLabel>Email :</FormLabel>
          <Input
            id='email'
            type="text"
            value={selectedUser.email}
            name='email'
            onChange={onChangeEditInput}
            placeholder="Enter New Email"
            required
            autoComplete='of'
          />
        
          </div>
          <div>
          <FormLabel>Phone :</FormLabel>
          <Input
            id='phone'
            value={selectedUser.phone}
            name='phone'
            type="text"
            onChange={onChangeEditInput}
            placeholder="Enter New Phone Number"
            required
            autoComplete='of'
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

