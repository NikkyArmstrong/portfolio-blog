import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import * as layoutStyles from "../styles/layout.module.scss"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDev, faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
library.add(faDev, faTwitterSquare, faLinkedin, faGithubSquare, faSquare)

export default function Index({location}) {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(base: { eq: "headshot_with_growlithe.jpg" }) {
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
      <h1>Nikky Armstrong</h1>
      <h4>Software Engineer and Game Developer</h4>
      <GatsbyImage class={layoutStyles.headshot} alt="Nikky with her dog, Growlithe" placeholder="blurred" image={image} />
      <p>Nikky Armstrong is a Software Engineer with over ten years experience across a number of different industries. She worked for most of her career in Australia for various mining software companies, most notably for <a href="https://www.immersivetechnologies.com" target="_blank" rel="noreferrer">Immersive Technologies</a> creating mining simulators for operator training. In 2020, she successfully transfered to AAA games, moving to the UK to work for <a href="https://reflections.ubisoft.com/">Ubisoft Reflections</a>. She is passionate about mentoring and teaching, improving the experience for people in underrepresented groups in the tech and games industries, and bringing concepts and workflows from software development into the games industry.</p>
    </Layout>
  )
}