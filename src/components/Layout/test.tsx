import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Layout } from '~/components'
import { RenderWithRouter } from '~/helpers'

describe('<Layout />', () => {
  it('should render children was received from props', () => {
    const { container } = render(
      <RenderWithRouter>
        <Layout>
          <h1>useless stuff</h1>
        </Layout>
      </RenderWithRouter>
    )

    expect(container).toMatchSnapshot()
    expect(screen.getByText('useless stuff')).toBeInTheDocument()
  })

  it('should render grid template correctly', () => {
    render(
      <RenderWithRouter>
        <Layout>
          <h1>useless stuff</h1>
        </Layout>
      </RenderWithRouter>
    )

    const el = screen.getByRole('main')

    expect(el).toHaveStyle({
      display: 'grid',
      'grid-template-columns': '28rem auto',
      'grid-template-rows': '8rem auto',
      'grid-template-areas': `'header header' 'sidemenu main'`
    })

    expect(el).toHaveStyleRule('grid-template-columns', '10rem auto', {
      media: '(max-width:1170px)'
    })

    expect(el).toHaveStyleRule('grid-template-columns', 'auto', {
      media: '(max-width:768px)'
    })

    expect(el).toHaveStyleRule('grid-template-rows', '8rem auto 6rem', {
      media: '(max-width:768px)'
    })

    expect(el).toHaveStyleRule(
      'grid-template-areas',
      `'header' 'main' 'sidemenu'`,
      {
        media: '(max-width:768px)'
      }
    )
  })
})
