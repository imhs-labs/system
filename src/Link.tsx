import styled from 'styled-components';
import { Link as BaseLink } from 'govuk-react'

export const Link = styled(BaseLink)({
  color: 'inherit',
  fontWeight: 'bold',
  textUnderlineOffset: '.1578em',
  textDecorationThickness: 'max(1px, .0625rem)',
  fontSize: 19,
  '&:hover': {
    textDecorationThickness: 'max(3px, .1875rem, .12em)'
  }
})