import styled from 'styled-components';
import { Button as BaseButton } from 'govuk-react'
import { theme } from './theme';
import { ComponentPropsWithoutRef } from 'react'

export const Button: React.FC<ComponentPropsWithoutRef<'button'>> = styled(BaseButton)({
  backgroundColor: theme.colors.primary,
  '&:hover, &:focus': {
    backgroundColor: theme.colors.primaryDark,
  }
})