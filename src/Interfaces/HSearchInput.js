import { styled } from '@mui/system';
import { InputBase } from '@mui/material';
import theme from '../theme';

const HSearchInput = styled(InputBase)`
  font-weight: 400;
  background: rgb(243, 246, 249);
  border: 1px solid ${theme.palette.info.dark};
  border-radius: 10px;
  padding: 6px 10px;
  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }
`;

export default HSearchInput;
