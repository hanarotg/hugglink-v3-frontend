import { styled } from '@mui/system';
import { InputBase } from '@mui/material';
import theme from '../theme';

const HSearchInput = styled(InputBase)`
  border-bottom: 3px solid ${theme.palette.info.dark};
  &:hover {
    border-color: ${theme.palette.primary.main};
  }
`;

export default HSearchInput;
