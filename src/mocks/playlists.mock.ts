import { Playlist } from '~/core/entities'

export const playlistsMock: Playlist[] = [
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/1ZjvcP51QqdIiYll5V31h1'
    },
    href: 'https://api.spotify.com/v1/playlists/1ZjvcP51QqdIiYll5V31h1',
    id: '1ZjvcP51QqdIiYll5V31h1',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b273594fe64d5315a2873e2bf76fab67616d0000b2736dca8c5fbd00a19a9e503dd9ab67616d0000b273befd5ba0d5a5aa148daf9b22ab67616d0000b273ef89c52c42eaf1f89347a16c',
        width: 640
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b273594fe64d5315a2873e2bf76fab67616d0000b2736dca8c5fbd00a19a9e503dd9ab67616d0000b273befd5ba0d5a5aa148daf9b22ab67616d0000b273ef89c52c42eaf1f89347a16c',
        width: 300
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b273594fe64d5315a2873e2bf76fab67616d0000b2736dca8c5fbd00a19a9e503dd9ab67616d0000b273befd5ba0d5a5aa148daf9b22ab67616d0000b273ef89c52c42eaf1f89347a16c',
        width: 60
      }
    ],
    name: 'driving and smoking',
    owner: {
      display_name: 'Thomas Ziemer',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12152004619'
      },
      href: 'https://api.spotify.com/v1/users/12152004619',
      id: '12152004619',
      type: 'user',
      uri: 'spotify:user:12152004619'
    },
    public: false,
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/1ZjvcP51QqdIiYll5V31h1/tracks',
      total: 77
    },
    type: 'playlist',
    uri: 'spotify:playlist:1ZjvcP51QqdIiYll5V31h1'
  },
  {
    collaborative: true,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/2nMpPi8P2UB4Kv7eyWcv4o'
    },
    href: 'https://api.spotify.com/v1/playlists/2nMpPi8P2UB4Kv7eyWcv4o',
    id: '2nMpPi8P2UB4Kv7eyWcv4o',
    images: [
      {
        height: 640,
        url: 'https://mosaic.scdn.co/640/ab67616d0000b27328b0758f29d40d699fef1707ab67616d0000b27351f311c2fb06ad2789e3ff91ab67616d0000b2737a231174875d7930de9dad58ab67616d0000b273d0a50cacfb47854fa416cd6c',
        width: 640
      },
      {
        height: 300,
        url: 'https://mosaic.scdn.co/300/ab67616d0000b27328b0758f29d40d699fef1707ab67616d0000b27351f311c2fb06ad2789e3ff91ab67616d0000b2737a231174875d7930de9dad58ab67616d0000b273d0a50cacfb47854fa416cd6c',
        width: 300
      },
      {
        height: 60,
        url: 'https://mosaic.scdn.co/60/ab67616d0000b27328b0758f29d40d699fef1707ab67616d0000b27351f311c2fb06ad2789e3ff91ab67616d0000b2737a231174875d7930de9dad58ab67616d0000b273d0a50cacfb47854fa416cd6c',
        width: 60
      }
    ],
    name: 'FrontsPP',
    owner: {
      display_name: 'Nicole Rizzi',
      external_urls: {
        spotify: 'https://open.spotify.com/user/2227ble3knumyq5aa5lvgyfeq'
      },
      href: 'https://api.spotify.com/v1/users/2227ble3knumyq5aa5lvgyfeq',
      id: '2227ble3knumyq5aa5lvgyfeq',
      type: 'user',
      uri: 'spotify:user:2227ble3knumyq5aa5lvgyfeq'
    },
    public: false,
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/2nMpPi8P2UB4Kv7eyWcv4o/tracks',
      total: 78
    },
    type: 'playlist',
    uri: 'spotify:playlist:2nMpPi8P2UB4Kv7eyWcv4o'
  },
  {
    collaborative: false,
    description: '',
    external_urls: {
      spotify: 'https://open.spotify.com/playlist/5uS5mv9L5uoIrSkzME5LDP'
    },
    href: 'https://api.spotify.com/v1/playlists/5uS5mv9L5uoIrSkzME5LDP',
    id: '5uS5mv9L5uoIrSkzME5LDP',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b2738ab02a5b19afe9b2e30c7aac',
        width: 640
      }
    ],
    name: 'Você Me Vira A Cabeça (Me Tira Do Sério)',
    owner: {
      display_name: 'Hugo Albrecht',
      external_urls: {
        spotify: 'https://open.spotify.com/user/12185340345'
      },
      href: 'https://api.spotify.com/v1/users/12185340345',
      id: '12185340345',
      type: 'user',
      uri: 'spotify:user:12185340345'
    },
    public: true,
    tracks: {
      href: 'https://api.spotify.com/v1/playlists/5uS5mv9L5uoIrSkzME5LDP/tracks',
      total: 1
    },
    type: 'playlist',
    uri: 'spotify:playlist:5uS5mv9L5uoIrSkzME5LDP'
  }
]
