import React from "react";

import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const Footer = () => {
  return (
    <Paper sx={{ width: '100%', position: 'fixed', bottom: 0 }} 
			component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, justifyContent: "center", display: "flex", my:1 }}>
					<IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/cfoostdijk/')}>
  					<LinkedInIcon fontSize="large" />
					</IconButton>
					<IconButton aria-label="Linkedin.com" onClick={() => window.open('https://github.com/cfooostdijk')}>
  					<GitHubIcon fontSize="large" />
					</IconButton>
				</Box>
				<Box sx={{ flexGrow: 1, justifyContent: "center", display: "flex", mb: 2, }}>
					<Typography variant="caption" color="initial"> Copyright © 2022 All Rights Reserved by Cristian Oostdijk </Typography>
				</Box>
			</Container>
		</Paper>
	)
}

export default Footer;
