import { styled } from '@mui/system';
import { InputBase } from '@mui/material';
import theme from '.././theme';

const HTextInput = styled(InputBase)`
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  background-color: ${theme.palette.info.main};
`;

export default HTextInput;
