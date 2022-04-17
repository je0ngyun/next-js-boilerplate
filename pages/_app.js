import GlobalStyle from '@styles/global'
import { RecoilRoot } from 'recoil'
import Header from '@components/Layout/Header'
import Main from '@components/Layout/Main'
import Footer from '@components/Layout/Footer'
import ThemeWrapper from '@components/ThemeWrapper'

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeWrapper>
        <GlobalStyle />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </ThemeWrapper>
    </RecoilRoot>
  )
}

export default App
