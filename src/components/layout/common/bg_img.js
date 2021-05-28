import React from "react"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = props => {
  return (
    <BackgroundImage
      style={{ width: props.width, height: "100%" }}
      Tag="div"
      fluid={props.img}
      backgroundColor={`#040e18`}
    >
      {props.children}
    </BackgroundImage>
  )
}

export default BackgroundSection
