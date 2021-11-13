import { Alert, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = {email};
        
         fetch('https://safe-crag-74905.herokuapp.com/user/admin', {
             method : 'PUT',
             headers : {
                 'content-type' : 'application/json'
             },
             body : JSON.stringify(user)
         })
         .then(res => res.json())
         .then(data => {
             if(data.modifiedCount) {
                 e.target.reset();
                setSuccess(true);
             }
         })
         e.preventDefault();
    }


    return (
        <Form onSubmit={handleAdminSubmit}>
             <Typography variant='h5' align='center' color='success.main'>Make Admin</Typography>
            <Form.Control 
                    className='w-50 mx-auto'
                    onBlur={handleOnBlur}
                    name="email"
                    type="email" 
                    placeholder="Enter email" />
            
            <Button 
            variant='primary mx-auto d-block mt-4'
            type='submit'
            >Make Admin</Button>
            {success &&  <Alert severity="success">Make Admin Succcess</Alert>}
        </Form>
    );
};

export default MakeAdmin;