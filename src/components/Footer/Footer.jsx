import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from "@mui/material/Box";

import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>ANOTHER SHOP STORE</h4>
						  <Box sx={{ flexGrow: 1, justifyContent: "center", display: "flex", my:1 }}>
 								<IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/cfoostdijk/')}>
   								<LinkedInIcon fontSize="large" />
 								</IconButton>
 								<IconButton aria-label="Linkedin.com" onClick={() => window.open('https://github.com/cfooostdijk')}>
   								<GitHubIcon fontSize="large" />
 								</IconButton>
 							</Box>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
						Diseñado y desarrollado por Cristian Oostdijk | © 2022 CoderHouse React Course. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;