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


// AllOrder Component

const ManageOrder = () => {

    const [allorder, setAllorder] = useState([]);

    useEffect( () => {
  
        fetch('https://safe-crag-74905.herokuapp.com/order/all')
        .then(res => res.json())
        .then(data => setAllorder(data))
    }, [])


    const handleOrderDelete = id => {

       const wantToDelete = window.confirm('Are You Sure!! You Want To Delete!!')

       if(wantToDelete) {

        const url = `https://safe-crag-74905.herokuapp.com/order/all/${id}`;

        fetch(url, {
          method : 'DELETE',
        })

        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0) {
            alert('order deleted successfully');
            const restOrder = allorder.filter(order => order._id !== id);
            setAllorder(restOrder);
          }

        })

       }

    }

    return (

        <TableContainer component={Paper}>

        <Typography variant='h5' align='center' color='success.main'>Manage Orders</Typography>

              <Table sx={{ minWidth: 650 }} aria-label="simple table">

              <TableHead>

              <TableRow>

              <TableCell>User Email</TableCell>

              <TableCell>Product</TableCell>

              <TableCell>Name</TableCell>

              <TableCell>Price</TableCell>

              <TableCell>Date</TableCell>

              <TableCell>Action</TableCell>

              </TableRow>

              </TableHead>

              <TableBody>
              {allorder.map((order) => (
              <TableRow
              key={ order._id }
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >


              <TableCell align="left">{order.email}</TableCell>

              <TableCell align="left">
              <img 
              src={order.img} 
              alt=''
              width = '100px'
              /></TableCell>

              <TableCell align="left">{order.productName}</TableCell>

              <TableCell align="left">$ {order.price}</TableCell>

              <TableCell align="left">{order.date}</TableCell>

              <TableCell align="left">
              <Button onClick={() => handleOrderDelete(order._id)} variant="outlined" color="error">Delete</Button>
              </TableCell>

              </TableRow>
              ))}
              </TableBody>

              </Table>

        </TableContainer>
           
         
    );
};

export default ManageOrder;