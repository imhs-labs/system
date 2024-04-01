import { Heading, Main } from 'govuk-react'
import { Link } from './Link'
import styled from 'styled-components'
import { theme } from './theme'

const Wrapper = styled('header')({
  backgroundColor: theme.colors.primary,
  color: '#ffffff',
  height: 75,
})

const Container = styled(Main)({
  height: '100%',
  paddingTop: '0 !important',
  '& > div': {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '& a': {
    display: 'flex',
    alignItems: 'center',
    height: 75,
  }
})

const TitleLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  }
})

const Title = styled(Heading)({
  color: '#ffffff !important',
  margin: '0 !important',
})

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <TitleLink href={process.env.NEXT_PUBLIC_LANDING_URL}>
          <Title size="L">IMHS.dev</Title>
        </TitleLink>
        <div>
          <Link href={process.env.NEXT_PUBLIC_ONELOGIN_URL}>Login</Link>
        </div>
      </Container>
    </Wrapper>
  )
}