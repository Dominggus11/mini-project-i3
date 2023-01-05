import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import AppBarDrawer from './components/AppBarDrawer';
import Task from './pages/Task';
import Login from './pages/Login';
import { Post } from './pages/Post';
import { User } from './pages/User';
import { theme } from './components/theme';
import '@fontsource/inter';
import HomePages from './pages/HomePages';
import { DataSiswa } from './pages/DataSiswa';
import { DataKriteria } from './pages/DataKriteria';

function Main() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBarDrawer />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/datasiswa" element={<User />} />
          <Route path="/datakriteria" element={<DataKriteria />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Box>
    </div>
  );
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/*" element={<Main />} />
          
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
