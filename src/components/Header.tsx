import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';



const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
