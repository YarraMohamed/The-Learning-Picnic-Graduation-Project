import React from 'react'
import { useState } from 'react';
import '../pages/style/Footer.css'
import kids from '../assets/kids3.jpg'
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';




const Footer = () => {

const [color, setColor] = useState('primary');

  return (

                
      <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        ...(color !== 'neutral' && {
          bgcolor: `${color}.800`,
        }),
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0 },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
        >
          <ColorLensRoundedIcon fontSize="small" />
        </IconButton>
      </Box>
      <Divider sx={{ my: 2 }} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        
        <Card
          variant="soft"
          size="md"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
            width:{sx: 1.0, // 100%
      sm: 250,
      md: 300,}
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={90}
            sx={{ flexBasis: { xs: 200, md: 'initial' } }}
          >
            <img alt="" src={kids} />
          </AspectRatio>
          <CardContent>
            <Typography level="body-sm">Welcome to Learning Picnic.</Typography>
          </CardContent>
        </Card>

        <List
          size="md"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px' }}
        >
          <ListItem nested sx={{ width: { xs: '100%'} }}>
            <ListSubheader className="mt-3 justify-center" sx={{ fontSize: "lg" }}>Please don't hesitate to contact us<br/>Knowing that we're here for you.</ListSubheader>
            <List>
              <ListItem className='justify-center mt-2'>
                <Button  variant="contained" href='/contact'>
                    contact us
                 </Button>
              </ListItem>
            </List>
          </ListItem>
        </List>
        <List
          size="md"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px', '--ListItem-gap': '0px' }}
        >
          <ListItem nested sx={{ width: { xs: '100%', md: 160 } }}>
            <ListSubheader className="justify-center" sx={{fontSize:"lg"}}>Services</ListSubheader>
            <List>
              <ListItem >
                <ListItemButton className="justify-center"><Link to={"/lessons"}>Lessons</Link></ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton className="justify-center"><Link to={"/quizzes"}>Quizzes</Link></ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton className="justify-center"><Link to={"/reports"}>Reports</Link></ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
        </Box>
        <div class="pb-1 mt-2 justify-center">
      <div class="copyright justify-center text-center">
        All Copyrights © are reserved to <strong>Learning Picnic</strong>.
      </div>
    </div>
    </Sheet>

    
    
   
  )
}

export default Footer