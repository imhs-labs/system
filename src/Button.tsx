import styled from 'styled-components';
import { Button as BaseButton } from 'govuk-react'
import { theme } from './theme';

export const Button: React.FC<HTMLButtonElement> = styled(BaseButton)({
  backgroundColor: theme.colors.primary,
  '&:hover, &:focus': {
    backgroundColor: theme.colors.primaryDark,
  }
})