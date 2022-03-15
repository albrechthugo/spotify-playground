import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { Layout } from '~/components'
import { RenderWithRouter } from '~/helpers'

import scenarios from './scenarios'

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
    expect(container.querySelector('section')).toHaveStyle({
      'grid-area': 'main'
    })
    expect(screen.getByText('useless stuff')).toBeInTheDocument()
  })

  it('should render grid template correctly without media modifiers', () => {
    render(
      <RenderWithRouter>
        <Layout>
          <h1>useless stuff</h1>
        </Layout>
      </RenderWithRouter>
    )

    expect(screen.getByRole('main')).toHaveStyle({
      display: 'grid',
      'grid-template-columns': '28rem auto',
      'grid-template-rows': '8rem auto',
      'grid-template-areas': `'header header' 'sidemenu main'`
    })
  })

  it.each(scenarios)(
    'should apply different props based on device width',
    (property, value, modifier) => {
      render(
        <RenderWithRouter>
          <Layout>
            <h1>useless stuff</h1>
          </Layout>
        </RenderWithRouter>
      )

      expect(screen.getByRole('main')).toHaveStyleRule(
        property as string,
        value as string,
        modifier as { [key: string]: string }
      )
    }
  )
})
