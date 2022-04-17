import { authState, loginUserState } from '@stores/loginUser'
import { useRecoilState } from 'recoil'

export function useLoginUser() {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState)
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authState)

  return {
    ...loginUser,
    isAuthenticated,
  }
}
