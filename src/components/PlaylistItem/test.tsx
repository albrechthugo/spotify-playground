import { render, screen } from '@testing-library/react'
import 'jest-styled-components'

import { playlistsMock } from '~/mocks'

import { PlaylistItem } from '.'

describe('<PlaylistItem />', () => {
  it('should render playlist item with applyBackgroundColor', () => {
    render(
      <PlaylistItem playlist={playlistsMock[0]} applyBackgroundColor={true} />
    )

    expect(screen.getByRole('listitem')).toHaveStyleRule(
      'background-color',
      'var(--color-shadow-overlay)'
    )
  })

  it(`shouldn't render playlist item with applyBackgroundColor`, () => {
    render(
      <PlaylistItem playlist={playlistsMock[0]} applyBackgroundColor={false} />
    )

    expect(screen.getByRole('listitem')).not.toHaveStyleRule(
      'background-color',
      'var(--color-shadow-overlay)'
    )
  })
})
