import React from 'react';
import {
  Box,
  Typography,
  Toolbar,
  Grid,
  Container,
  Checkbox,
} from '@mui/material';
import { styles } from '../components/styles';
import DataTable from 'react-data-table-component';
import axios from '../api/axios';

export const User = () => {
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.ID,
    },
    // {
    //   name: 'Name',
    //   selector: (row) => row.name,
    // },
    {
      name: 'Nama',
      selector: (row) => row.nama,
    },
    // {
    //   name: 'Email',
    //   selector: (row) => row.email,
    // },
    // {
    //   name: 'Gender',
    //   selector: (row) => row.gender,
    // },
    // {
    //   name: 'Status',
    //   selector: (row) => row.status,
    // },
  ];

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get(`http://192.168.1.116:8080/student`).then((res) => {
      const responseUsers = res.data.message;
      setUsers(responseUsers);
      console.log(res.data.message);
    });
  }, []);
  const isIndeterminate = (indeterminate) => indeterminate;
  const selectableRowsComponentProps = { indeterminate: isIndeterminate };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      <Box>
        <Toolbar />
        <Container maxWidth="sm" sx={{ mt: 6, mb: 6}}>
          <Grid container spacing={3}>
            <Grid item xs={12} style={styles.titlePage}>
              {/* <Typography variant="h5" color="initial" fontWeight={600} alignContent="center">
                DATA SISWA
              </Typography> */}
            </Grid>
            <Box sx={{ p: 4, position:"absolute"}}>
              <DataTable
                title="DATA SISWA"
                columns={columns}
                data={users}
                pagination
                selectableRows
                selectableRowsComponent={Checkbox}
                selectableRowsComponentProps={selectableRowsComponentProps}
              />
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
