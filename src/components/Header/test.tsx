import { render, screen } from '@testing-library/react'

import { Header } from '~/components'

describe('<Header />', () => {
  it('should have title and username displayed', () => {
    render(<Header />)

    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByText('Spotify Playground')).toBeInTheDocument()
  })
})
