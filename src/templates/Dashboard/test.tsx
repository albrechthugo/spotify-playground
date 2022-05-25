import { render, screen } from '@testing-library/react'

import { RenderWithRouter } from '~/helpers'
import { artistsMock } from '~/mocks'

import DashboardTemplate from '.'

describe('<DashboardTemplate />', () => {
  beforeEach(() => {
    render(
      <RenderWithRouter>
        <DashboardTemplate artists={artistsMock} />
      </RenderWithRouter>
    )
  })

  it.each(['Marília Mendonça', 'Maiara & Maraisa', 'Tribo da Periferia'])(
    'should render artist with name: %s, received from props',
    (artistName) => {
      expect(screen.getByText(artistName)).toBeInTheDocument()
    }
  )
})
