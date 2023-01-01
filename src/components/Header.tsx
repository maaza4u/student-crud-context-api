import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import { Button, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography'; 




const Header: React.FC = () => {
  



  return (
    <Grid>
    <AppBar>
      <Container>
      <Typography variant="h6" component="div" sx={{ flexGrow: 3,paddingLeft:'500px' }}>
            Student List
          </Typography>
        
             <Button color="secondary" sx={{ paddingLeft:'800px' }}>
            <Link className="btn btn-primary" to="/add">
              Add Student
            </Link>
           </Button>
        
      </Container>
    </AppBar>
    </Grid>
  );
};

export default Header;
