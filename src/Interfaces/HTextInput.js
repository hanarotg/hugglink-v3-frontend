import { styled } from '@mui/system';
import { InputBase } from '@mui/material';

const HTextInput = styled(InputBase)`
  padding: 5px 10px 5px 10px;
  border: 1px solid #6a6a6a;
  background-color: #f8f9fa;
  &:hover {
    border-color: #0d6efd;
  }
`;

export default HTextInput;
