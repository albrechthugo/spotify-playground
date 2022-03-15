import { useRouter } from 'next/router'

import sideMenuContent from './content'
import * as S from './styles'

export const SideMenu = () => {
  const { push } = useRouter()

  return (
    <S.Wrapper>
      <ul>
        {sideMenuContent.map(({ label, link }) => {
          return (
            <S.Link key={link} onClick={() => push(link)}>
              {label}
            </S.Link>
          )
        })}
      </ul>
    </S.Wrapper>
  )
}
