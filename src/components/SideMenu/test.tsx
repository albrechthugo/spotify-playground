import { act, fireEvent, render, screen } from '@testing-library/react'

import 'jest-styled-components'
import { SideMenu } from '~/components'
import { RenderWithRouter } from '~/helpers'

describe('<SideMenu />', () => {
  it('should render', () => {
    const { container } = render(
      <RenderWithRouter>
        <SideMenu />
      </RenderWithRouter>
    )

    expect(container).toMatchSnapshot()
    expect(container.querySelector('aside')).toHaveStyleRule(
      'grid-area',
      'sidemenu'
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent(/playlists/i)
  })

  it('should remove border-right and add border-top when device width is less than 768px', () => {
    const { container } = render(
      <RenderWithRouter>
        <SideMenu />
      </RenderWithRouter>
    )

    expect(container.querySelector('aside')).toHaveStyleRule(
      'border-top',
      '1px solid var(--color-border)',
      { media: '(max-width:768px)' }
    )

    expect(container.querySelector('aside')).toHaveStyleRule(
      'border-right',
      'none',
      { media: '(max-width:768px)' }
    )
  })

  it('should set background color to primary-hover and font colors to dark-bg when element had hover event', () => {
    render(
      <RenderWithRouter>
        <SideMenu />
      </RenderWithRouter>
    )

    expect(screen.getAllByRole('listitem')[0]).not.toHaveStyleRule(
      'background-color',
      'var(--color-primary-hover)'
    )

    expect(screen.getAllByRole('listitem')[0]).toHaveStyleRule(
      'background-color',
      'var(--color-primary-hover)',
      { modifier: ':hover' }
    )

    expect(screen.getAllByRole('listitem')[0]).not.toHaveStyleRule(
      'color',
      'var(--color-dark-bg)'
    )

    expect(screen.getAllByRole('listitem')[0]).toHaveStyleRule(
      'color',
      'var(--color-dark-bg)',
      { modifier: ':hover' }
    )
  })

  it('should call push function when li element is clicked', () => {
    const push = jest.fn()

    const { getAllByRole } = render(
      <RenderWithRouter router={{ push }}>
        <SideMenu />
      </RenderWithRouter>
    )

    act(() => {
      fireEvent.click(getAllByRole('listitem')[0])
    })

    expect(push).toHaveBeenCalledWith('/playlists')
  })
})
