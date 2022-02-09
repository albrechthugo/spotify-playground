import { render, screen } from '@testing-library/react'

import { Layout } from '~/components'

describe('<Layout />', () => {
  it('should render children was received from props', () => {
    render(
      <Layout>
        <h1>useless stuff</h1>
      </Layout>
    )

    expect(screen.getByText('useless stuff')).toBeInTheDocument()
  })
})
