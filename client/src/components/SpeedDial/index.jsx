import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import CommentIcon from '@mui/icons-material/Comment';


export default function OpenIconSpeedDial() {
  return (
    <Box sx={{ height: 50, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 0, right: 16}}
        icon={<SpeedDialIcon openIcon={<CommentIcon />} />}
      >
      </SpeedDial>
    </Box>
  );
}