import { Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const {paymentId} = useParams();
    return (
        <div>
            <Typography>Please pay for : {paymentId}</Typography>
        </div>
    );
};

export default Payment;