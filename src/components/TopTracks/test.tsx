import { render, screen } from '@testing-library/react'

import { topTracksMock } from '~/mocks/artist-top-tracks.mock'

import { TopTracks } from '.'

describe('<TopTracks />', () => {
  it.each(['Top Track 1', 'Top Track 2', 'Top Track 3'])(
    'should render top track: `%s` that was received from props',
    (trackName) => {
      render(<TopTracks tracks={topTracksMock} />)

      expect(screen.getByText(trackName)).toBeInTheDocument()
    }
  )
})
