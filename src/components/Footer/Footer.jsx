import React from 'react';

import './Footer.css';

import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Footer = () => {
  return (
    <div className='main-footer'>
      <h4>XIAOMI ECOMMERCE</h4>
      <Box sx={{ flexGrow: 1, justifyContent: 'center', display: 'flex', my:1 }}>
        <IconButton aria-label='Linkedin.com' onClick={() => window.open('https://www.linkedin.com/in/cfoostdijk/')}>
          <LinkedInIcon fontSize='large' />
        </IconButton>
        <IconButton aria-label='Linkedin.com' onClick={() => window.open('https://github.com/cfooostdijk')}>
          <GitHubIcon fontSize='large' />
        </IconButton>
      </Box>
      <p className='col-sm'>
        Diseñado y desarrollado por Cristian Oostdijk | © 2022 CoderHouse React Course. Todos los derechos reservados.
      </p>
    </div>
  );
}

export default Footer;
