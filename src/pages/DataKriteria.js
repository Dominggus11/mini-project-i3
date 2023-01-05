import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
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

export const DataKriteria = () => {
  const columns = [
    {
      name: 'NO',
      selector: (row) => row.ID,
    },
    // {
    //   name: 'Name',
    //   selector: (row) => row.name,
    // },
    {
      name: 'Kriteria',
      selector: (row) => row.nama_kriteria,
    },
    {
      name: 'Bobot',
      selector: (row) => row.bobot_kriteria,
    },
    
  ];

  const [users, setUsers] = React.useState();

  React.useEffect(() => {
    axios.get(`http://192.168.1.116:8080/kriteria`).then((res) => {
      const responseUsers = res.data.data;
      setUsers(responseUsers);
      console.log(res.data.data);
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
        <Container maxWidth="sm" sx={{ mt: 6, mb: 6 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} style={styles.PageSPK}>
              <Typography variant="h5" color="initial" fontWeight={600}>
                DATA KRITERIA
              </Typography>
            </Grid>
            <Box 
            sx={{ p: 4}}>
              <DataTable
                // title="Data Siswa" style={styles.PageSPK}
                columns={columns}
                data={users}
                pagination
                // selectableRows
                // selectableRowsComponent={Checkbox}
                selectableRowsComponentProps={selectableRowsComponentProps}
              />
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
