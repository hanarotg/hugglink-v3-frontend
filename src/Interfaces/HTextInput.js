import { styled } from '@mui/system';
import { InputBase } from '@mui/material';
import theme from '.././theme';

const HTextInput = styled(InputBase)`
  padding: 5px 10px 5px 10px;
  border: 1px solid ${theme.palette.text.light};
  background-color: ${theme.palette.info.main};
  &:hover {
    border-color: ${theme.palette.primary.main};
  }
`;

export default HTextInput;
