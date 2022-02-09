import { render, screen } from '@testing-library/react'

import { SideMenu } from '~/components'

describe('<SideMenu />', () => {
  it('should render', () => {
    render(<SideMenu />)

    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent(/sidemenu!/i)
  })
})
