import React,{useEffect,useState} from 'react';
import { useGlobalContext } from '../contexts/GlobalState';
import { Link } from 'react-router-dom';
import { Button, TableCell,Table,TableRow,TableContainer,Paper, Grid} from "@material-ui/core";
import { Modal,Typography,Box} from '@mui/material';
import '../styles.css';
import { IUser } from '../types';
import { v4 as uuid } from 'uuid';

type Props = {
  users: IUser[];
  setUsers: (data : IUser []) => void;
  onDeleteClickHnd: (data: IUser) => void;
  onEdit: (data: IUser) => void;
  removeUser: (id: typeof uuid)=> void;
 
}

const UserList = (props:Props) => {
  const { currentState, removeUser} = useGlobalContext();
  const [open, setOpen] = React.useState(false);
  // const [user, setUsers] = useState([] as IUser[]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const users = currentState.users;
 


  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    
  
    <div>
      <Grid>
      <TableContainer component={Paper} style={{width:'750px'}} >
      <Table style={{ width: '750px',fontWeight:'bold' }} aria-label="simple table">
        <TableRow style={{marginRight:'200px'}} >
          <TableCell style={{fontWeight:'bold'}} >Name</TableCell>
          <TableCell style={{fontWeight:'bold'}}>Email</TableCell>
          <TableCell style={{fontWeight:'bold'}}>Phone</TableCell>
          <TableCell style={{fontWeight:'bold'}}>Action</TableCell>
        </TableRow>
      {users.map((user,values) => {
        return (
           
          <TableRow key={values}>
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
           <Button onClick={handleOpen} variant='contained' color='primary' style={{margin:'20px',marginTop:'20px',marginRight:'50px'}}>View</Button>
            <Button variant="contained" color="secondary" onClick={() => removeUser(user.id)} style={{margin:'5px'}} >
              Delete
            </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2,fontWeight:'100px'}}>
            <strong>Student INFO</strong>
          </Typography>
          <br/>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            <Typography>Name: {user.name}</Typography>
            <Typography>Email: {user.email} </Typography>
            <Typography> Phone: {user.phone}</Typography>
          </Typography>
          
        </Box>
      </Modal>
      
                  </div>
                  </TableCell>
         </TableRow>
         );
        })}
  
    </Table>
    </TableContainer>
   
   </Grid>
     
  </div>
  
  
  );
};

export default UserList;



