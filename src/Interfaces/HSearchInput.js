import { styled } from '@mui/system';
import { InputBase } from '@mui/material';
import theme from '../theme';

const HSearchInput = styled(InputBase)`
  height: 100%;
  padding-left: 1em;
  border-left: 1px solid #c8c8c8;
  border-right: 1px solid #c8c8c8;
  background-color: ${theme.palette.info.main};

  &:hover {
    //
  }
`;

export default HSearchInput;
