export default [
  [
    'grid-template-columns',
    '10rem auto',
    {
      media: '(max-width:1170px)'
    }
  ],
  [
    'grid-template-columns',
    'auto',
    {
      media: '(max-width:768px)'
    }
  ],
  [
    'grid-template-rows',
    '8rem auto 6rem',
    {
      media: '(max-width:768px)'
    }
  ],
  [
    'grid-template-areas',
    `'header' 'main' 'sidemenu'`,
    {
      media: '(max-width:768px)'
    }
  ]
]
