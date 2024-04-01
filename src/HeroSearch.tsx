import { Label, LabelText, SearchBox } from 'govuk-react'
import styled from 'styled-components'
import { theme } from './theme'

const SearchLabel = styled(LabelText)({
  color: '#ffffff',
  fontWeight: 'bold',
  marginBottom: 15,
})

const SearchInput = styled(SearchBox.Input)({
  height: 50,
  border: 'none',
})

const SearchButton = styled(SearchBox.Button)({
  height: 50,
  width: 50,
  padding: 15,
  backgroundColor: theme.colors.primaryLight,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.colors.primaryLighter,
  },
  '& > svg': {
    fill: theme.colors.primary,
  }
})

export const HeroSearch: React.FC = () => {
  return (
    <Label>
      <SearchLabel>Search</SearchLabel>
      <SearchBox>
        <SearchInput />
        <SearchButton />
      </SearchBox>
    </Label>
  )
}