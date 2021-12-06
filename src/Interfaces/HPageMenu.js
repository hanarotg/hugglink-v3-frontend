import { styled } from '@mui/system';
import { ButtonGroup, Button } from '@mui/material';
import theme from '../theme';

const HPageMenu = styled(ButtonGroup)``;

const HPageMenuButton = styled(Button)`
  border: none;
  color: ${theme.palette.secondary.main};
  &:hover {
    border: none;
  }
`;

export { HPageMenu, HPageMenuButton };
