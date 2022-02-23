import { render, fireEvent } from '@testing-library/react'

import { Button } from '~/components'

describe('<Button />', () => {
  it('should be created and render label', () => {
    const { container, getByText } = render(
      <Button label="Confirmar" onClick={() => {}} />
    )

    expect(container).toMatchSnapshot()
    expect(getByText('Confirmar')).toBeInTheDocument()
  })

  it('should execute onClick function was received from props', () => {
    const mockFn = jest.fn()

    const { getByRole } = render(<Button label="Confirmar" onClick={mockFn} />)

    fireEvent.click(getByRole('button'))

    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
