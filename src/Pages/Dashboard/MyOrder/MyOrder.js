import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const MyOrder = () => {

    const {user} = useAuth();
    const [myorder, setMyorder] = useState([]);

    useEffect( () => {
        const url = `https://safe-crag-74905.herokuapp.com/order?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMyorder(data))
    }, [user.email])


    const handleOrderDelete = id => {

      const sureDelete = window.confirm('Are You Sure!! You Want To Delete');

      if(sureDelete) {

        fetch(`https://safe-crag-74905.herokuapp.com/order/${id}`, {
        method : 'DELETE',
      })

      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0) {
          alert('order successfully deleted');
          const restOrder = myorder.filter(order => order._id !== id);
          setMyorder(restOrder);
        }

      })

      }

    }

    return (

        <TableContainer component={Paper}>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">

          <TableHead>

            <TableRow>

              <TableCell>Product</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {myorder.map((order) => (
              <TableRow
                key={order.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                
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

export default MyOrder;