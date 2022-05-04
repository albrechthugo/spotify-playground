import { render, screen } from '@testing-library/react'

import { artistsMock } from '~/mocks'

import DashboardTemplate from '.'

describe('<DashboardTemplate />', () => {
  beforeEach(() => {
    render(<DashboardTemplate artists={artistsMock} />)
  })

  it.each(['Marília Mendonça', 'Maiara & Maraisa', 'Tribo da Periferia'])(
    'should render artist with name: %s, received from props',
    (artistName) => {
      expect(screen.getByText(artistName)).toBeInTheDocument()
    }
  )
})
