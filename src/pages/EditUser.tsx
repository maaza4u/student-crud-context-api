import { FormLabel,Input,Button, FormControl,Container,Grid } from '@material-ui/core';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useGlobalContext } from '../contexts/GlobalState';
import { IUser, IParams } from '../types';

type Props = { 
  data: IUser;
  onBackBtnClickHnd: () => void;
  users : IUser [];
  setUsers: (data : IUser []) => void;
  onUpdateClickHnd: (data: IUser) => void;
}

const EditUser = (props:Props) => {
  const history = useHistory();
  const {onBackBtnClickHnd,onUpdateClickHnd} = props

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

  function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    editUser(selectedUser);
    onBackBtnClickHnd();
    console.log('new user edited:', selectedUser);
    history.push('/');
    onUpdateClickHnd(selectedUser);
  }

  const onChangeEditName = (
    e:any
  ) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeEditEmail = (
    e:any
  ) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.email]: e.target.value,
    });
  };

  const onChangeEditPhone = (
    e:any
  ) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.phone]: e.target.value,
    });
  };

  return (
    <>
      <Grid>
        <Container>
      <h3>Edit Student Info</h3>

      <form onSubmit={onSubmit}>
        <FormControl className="mb-2">
          <div>
          <FormLabel>Name :</FormLabel>
          <Input
            type="text"
            name="name"
            onChange={onChangeEditName}
            placeholder="Enter new name"
            required
          />
          </div>
          <div>
          <FormLabel>Email :</FormLabel>
          <Input
            type="text"
            name="email"
            onChange={onChangeEditEmail}
            placeholder="Enter New Email"
            required
          />
          </div>
          <div>
          <FormLabel>Email :</FormLabel>
          <Input
            type="text"
            name="email"
            onChange={onChangeEditPhone}
            placeholder="Enter New Phone Number"
            required
          />
          </div>
        </FormControl>
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

  const onChangeEditEmail = (
    e:any
  ) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.email]: e.target.value,
    });
  };

  const onChangeEditPhone = (
    e:any
  ) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.phone]: e.target.value,
    });
  };

  return (
    <>
      <Grid>
        <Container>
      <h3>Edit Student Info</h3>

      <form onSubmit={onSubmit}>
        <FormControl className="mb-2">
          <div>
          <FormLabel>Name :</FormLabel>
          <Input
            type="text"
            name="name"
            onChange={onChangeEditName}
            placeholder="Enter new name"
            required
          />
          </div>
          <div>
          <FormLabel>Email :</FormLabel>
          <Input
            type="text"
            name="email"
            onChange={onChangeEditEmail}
            placeholder="Enter New Email"
            required
          />
          </div>
          <div>
          <FormLabel>Email :</FormLabel>
          <Input
            type="text"
            name="email"
            onChange={onChangeEditPhone}
            placeholder="Enter New Phone Number"
            required
          />
          </div>
        </FormControl>
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
