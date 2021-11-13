import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';



const ManageUser = () => {

    const [alluser, setAlluser] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/alluser')
        .then(res => res.json())
        .then(data => {
            const exceptAdmin = data.filter(user => user._id !== user.role);
            setAlluser(exceptAdmin);
        })
    }, [])

    const handleUserDelete = id => {

       const wantToDelete = window.confirm('Are You Sure, You Want To Delete');
       if(wantToDelete)  {

        fetch(`http://localhost:5000/alluser/${id}`, {
            method : 'DELETE',
        })

        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
               alert('deleted successfully');
               const restUser = alluser.filter(user => user._id !== id);
               setAlluser(restUser);
            }

        })

       }

    }


    return (
        <TableContainer component={Paper}>

         <Typography variant='h5' align='center' color='success.main'>Manage Users</Typography>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>

              <TableCell>User Name</TableCell>
              <TableCell>User Email</TableCell>
              <TableCell>Action</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            { alluser.map((user) => (
              <TableRow
                key={user.email}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                

                <TableCell align="left">{user.displayName}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">
                 <Button onClick= { () => handleUserDelete(user._id) } variant="outlined" color="error">Delete</Button>
               </TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default ManageUser;