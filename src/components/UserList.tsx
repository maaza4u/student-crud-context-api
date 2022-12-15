import React,{useState} from 'react';
import { useGlobalContext } from '../contexts/GlobalState';
import { Link } from 'react-router-dom';
import { IUser } from '../types';
import StudentModal from '../StudentModel';
import { Button, TableCell,Table,TableRow,TableContainer,Paper, Grid} from "@material-ui/core";
import '../styles.css';

const UserList: React.FC = () => {
  const { currentState, removeUser } = useGlobalContext();

  const users = currentState.users;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IUser | null);

  const viewStudent = (data: IUser) => {
    setDataToShow(data);
    setShowModal(true);
    
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <Grid>
  
    <div>
       <TableContainer component={Paper} style={{width:'750px'}}>
      <Table style={{ width: '750px' }} aria-label="simple table">
        <TableRow style={{textAlign:"center"}}>
          <TableCell >Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      {users.map((user, key) => {
        return (
           
          <TableRow key={key}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
          <TableCell>{user.phone}</TableCell>
             <TableCell>
              <div>
                <Button variant='outlined' type='button' style={{margin:'5px'}} >
            <Link
              to={`/edit/${user.id}`}
              color='white'
            >
              Update
            </Link>
            </Button>
            <Button variant="contained" color="secondary" onClick={() => removeUser(user.id)} style={{margin:'5px'}} >
              Delete
            </Button>
            <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={() => viewStudent(user.id)}
                  >View</Button>
                  </div>
                  </TableCell>
         </TableRow>
      
    
        );
        })}
  
    </Table>
    </TableContainer>
    {showModal && dataToShow !== null && (
        <StudentModal onClose={onCloseModal} data={dataToShow} />
      )}
     
  </div>
  
  </Grid>
  );
};

export default UserList;
