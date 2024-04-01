import { Page as BasePage, GridCol, GridRow } from 'govuk-react'
import { Header } from './Header'
import { PropsWithChildren } from 'react'

export const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <BasePage
      header={<Header />}
    >
      <GridRow>
        <GridCol setWidth="two-thirds" />
        <GridCol setWidth="one-third">
          {/* Language select */}
        </GridCol>
      </GridRow>
      {children}
    </BasePage>
  )
}