import React from "react"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ children, width, img }) => {
  return (
    <BackgroundImage
      style={{ width: width, height: "100%" }}
      Tag="div"
      fluid={img}
      backgroundColor={`#040e18`}
      alt="image"
    >
      {children}
    </BackgroundImage>
  )
}

export default BackgroundSection
