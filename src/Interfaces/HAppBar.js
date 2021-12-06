import { styled } from '@mui/system';
import { AppBar } from '@mui/material';
import theme from '../theme';

const HAppBar = styled(AppBar)`
  box-shadow: none;
  position: static;
  color: ${theme.palette.secondary.main};
`;

export default HAppBar;
