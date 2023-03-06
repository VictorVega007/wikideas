// import { CircularProgress, Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export const CircularLoading = () => {
  return (
    <Box sx={{ display: 'flex'}}>
      <CircularProgress color="secondary"/>
    </Box>
  );
};