import { TopTrack } from '~/core/entities'

export const topTracksMock: TopTrack[] = [
  {
    artists: [{ name: 'Test Artist Name', id: 'test-artist-id' }],
    duration_ms: 900,
    external_urls: { spotify: 'test.url' },
    id: 'test-top-track-id-1',
    name: 'Top Track 1',
    preview_url: 'preview-url'
  },
  {
    artists: [{ name: 'Test Artist Name', id: 'test-artist-id' }],
    duration_ms: 900,
    external_urls: { spotify: 'test.url' },
    id: 'test-top-track-id-2',
    name: 'Top Track 2',
    preview_url: 'preview-url'
  },
  {
    artists: [{ name: 'Test Artist Name', id: 'test-artist-id' }],
    duration_ms: 900,
    external_urls: { spotify: 'test.url' },
    id: 'test-top-track-id-3',
    name: 'Top Track 3',
    preview_url: 'preview-url'
  }
]
