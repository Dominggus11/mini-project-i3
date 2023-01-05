import * as React from 'react';
import { Typography, Box, Button, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styles } from '../components/styles';

const Login = () => {
  return (
    <Box sx={styles.bgLogin}>
      <Box sx={styles.formLogin}>
      <Typography id="modal-modal-title" variant="h3" fontWeight="700" paddingBottom={"20px"} color="#242E6F">
         S P K J 
        </Typography>
      <input type="image" img src={'/img/logo bm.png'} width="100px" alt="logo" />
        <Typography id="modal-modal-title" variant="h6" fontWeight="700" color="#242E6F">
          SMA Swasta
        </Typography>
        <Typography id="modal-modal-title" variant="h5" fontWeight="700" color="#242E6F">
          Budi Mulia Tumbajae
        </Typography>
        <form>
          <Stack spacing={3}>
            <TextField
              required
              id="outlined-required"
              label="Username"
              sx={{ mt: 3 }}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              sx={{ mt: 3 }}
            />
            <Box display="flex">
              <Button
                variant="outlined"
                color="error"
                sx={{ width: '100%', mr: 1 }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="info"
                type="submit"
                sx={{ width: '100%', ml: 1 }}
              >
                Login
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};
export default Login;
