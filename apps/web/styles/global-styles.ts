// eslint-disable-next-line import/no-extraneous-dependencies
import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-named-as-default
import reset from 'styled-reset'
import { media, StyledComponents } from 'styles/theme'

const GlobalStyle = createGlobalStyle<StyledComponents>`
  ${reset}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body{
    font-family: 'Nanum Gothic', sans-serif;
    
    /** Responsive Design */
    ${media.giant} {
      /** Giant View */
    }
    ${media.desktop} {
      /** Desktop View */
    }
    ${media.tablet} {
      /** Tablet View */
    }
    ${media.phone} {
      /** Phone View */
    }
  }

  /** animations */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes fadeIn {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`

export default GlobalStyle
