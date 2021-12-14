import { styled } from '@mui/system';
import { InputBase } from '@mui/material';
import theme from '.././theme';

const HTextInput = styled(InputBase)`
  padding: 5px 10px 5px 10px;
  border-radius: none;
  border-bottom: 3px solid ${theme.palette.info.dark};
  background-color: ${theme.palette.info.main};
  &:hover {
    border-color: ${theme.palette.primary.main};
  }
`;

export default HTextInput;
