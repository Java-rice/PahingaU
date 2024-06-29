// src/pages/success/SuccessPage.js
import React, { useState, useEffect } from 'react';
import registerBG from "../../assets/registerBG.png";
import { Button } from '../../components/buttons/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const SuccessPage = () => {
  const [count, setCount] = useState(10);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${registerBG})` }}>
      <div className="w-full md:w-2/5 h-auto m-5 md:m-[5%] text-center bg-white bg-opacity-80 backdrop-blur-md rounded-lg p-3 md:p-[4%] shadow-md flex flex-col">
        <h1 className="text-4xl font-bold text-[#0077B5] mb-4">Success</h1>
        <p className="text-lg font-montserrat mb-6 text-[#525252]">Chillout! Welcome to PahingaU!</p>
        <p className="text-lg text-[#404040] mb-8">
          We have successfully created your new account. But before you start, you will have to activate it. We have sent an activation mail to the email you provided during registration. It should arrive in a couple of minutes.
        </p>
        
        <Box sx={{ position: 'relative', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
          <CircularProgress
            variant="determinate"
            value={progress}
            sx={{ color: '#0077B5' }} 
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption" component="div" color="text.secondary">
              {count > 0 ? `${count}s` : '0s'}
            </Typography>
          </Box>
        </Box>
        <Button variant="solid" style={{ marginTop: '1rem' }}>Go to Homepage</Button>
      </div>
    </div>
  );
};

export default SuccessPage;
