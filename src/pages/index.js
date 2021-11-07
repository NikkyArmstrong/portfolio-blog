import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDev, faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
library.add(faDev, faTwitterSquare, faLinkedin, faGithubSquare, faSquare)

export default function Index({location}) {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(base: { eq: "Growlithe.jpg" }) {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  )

  const image = getImage(data.image)

  return (
    <Layout>
      <Metadata title="Home"
                description="Nikky Armstrong | Lead Programmer & Game Developer"
                image={data.image.publicURL}
                pathname={location.pathname} />
      <h1>Home page</h1>
      <p>Software Engineer and Game Developer</p>
      <GatsbyImage alt="My dog Growlithe" placeholder="blurred" image={image} />
    </Layout>
  )
}