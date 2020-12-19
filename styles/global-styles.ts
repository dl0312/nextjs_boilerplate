// eslint-disable-next-line import/no-extraneous-dependencies
import reset from 'styled-reset'

import { media, Theme } from './theme'
import { createGlobalStyle } from './themed-components'

export const GlobalStyle = createGlobalStyle<Theme>`
  ${reset}
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body{
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 0.8rem;
    background: ${({ mainBackground }) => mainBackground};
    color: ${({ title }) => title};
    
    transition: color, background 0.5s ease-in-out;
    /** Responsive Design */
    ${media.giant} {
      /** Giant View */
    }
    ${media.desktop} {
      /** Desktop View */
    }
    ${media.tablet} {
      /** Tablet View */
      font-size: 0.6rem;
    }
    ${media.phone} {
      /** Phone View */
      font-size: 0.6rem;
    }
  }

  a{
    color: inherit;
    text-decoration: none !important;
    &:hover{
        color: ${({ linkText }) => linkText};
    }
  }

  input, button{
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    &:active {
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
