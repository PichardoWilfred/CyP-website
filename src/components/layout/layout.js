import * as React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Crimson Text', sans-serif;
    margin: 0;
    padding: 0;
    

  }
  section {
    font-size: clamp(14px, 4vw, 2.4rem);
    width: 100%;
  }
`
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
