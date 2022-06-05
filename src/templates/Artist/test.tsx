import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { artistsMock } from '~/mocks'

import ArtistTemplate from '.'

describe('<ArtistTemplate />', () => {
  beforeEach(() => {
    render(<ArtistTemplate artist={artistsMock[0]} />)
  })

  it('should render template with artist that was received from props with top tracks title', () => {
    expect(
      screen.getByRole('heading', { name: /marília mendonça/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 2, name: /melhores faixas/i }))
  })

  it('should apply correct css props in differents device width', () => {
    expect(screen.getByTestId('artist-template__wrapper')).toHaveStyleRule(
      'border-bottom',
      '1px solid var(--color-border)',
      { media: '(min-width:768px)' }
    )

    expect(
      screen.getByTestId('artist-template__image-wrapper')
    ).toHaveStyleRule('display', 'none', {
      media: '(max-width:450px)'
    })
  })

  it('should apply correct css props to artist name in differents device width', () => {
    expect(
      screen.getByRole('heading', { name: /marília mendonça/i })
    ).toHaveStyleRule('font-size', '4rem', { media: '(max-width:450px)' })

    expect(
      screen.getByRole('heading', { name: /marília mendonça/i })
    ).toHaveStyleRule('font-size', '6rem', { media: '(min-width:450px)' })

    expect(
      screen.getByRole('heading', { name: /marília mendonça/i })
    ).toHaveStyleRule('margin-left', '4rem', { media: '(min-width:450px)' })

    expect(
      screen.getByRole('heading', { name: /marília mendonça/i })
    ).toHaveStyleRule('font-size', '8rem', { media: '(min-width:768px)' })
  })
})
