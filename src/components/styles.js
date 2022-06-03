import { createTheme } from '@mui/material/styles';

export const styles = createTheme({
  shadowBasic: {
    boxShadow:
      '0px 0px 14px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.06)',
  },
  cardTaskParent: {
    boxShadow:
      '0px 0px 14px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.06)',
    padding: ' 1.5em',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px',
  },
  cardTask: {
    boxShadow: 'none',
    marginTop: '16px',
    padding: ' 1em 1.5em',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    backgroundColor: '#F0F1F3',
  },
  titlePage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customButton: {
    borderRadius: '10px',
    textTransform: 'none',
    boxShadow:
      '0px 0px 14px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.06)',
  },
  circleIconButton: {
    borderRadius: '50%',
    marginLeft: '0.5em',
    padding: '11.4px ',
    minWidth: '38px',
    boxShadow:
      '0px 0px 14px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.06)',
  },
  paperBg: {
    background: '#111',
  },
});