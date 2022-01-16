import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
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
      <p>Hello! I am a Software Engineer with over ten years' experience across vastly different industries, including web development, mining simulation, and both AAA & Indie game development.</p>
      <GatsbyImage class={layoutStyles.headshot} alt="Nikky with her dog, Growlithe" placeholder="blurred" image={image} />
      <p>I am currently Lead Programmer at <OutboundLink href="https://silverraingames.com">Silver Rain Games</OutboundLink> where as well as writing tools & gameplay code, I make sure the code team is ticking along happily.</p>
      <p>Before 2020, I lived and worked in Adelaide and then Perth, Australia. In 2019 I was offered a position as Senior Gameplay Programmer with Ubisoft Reflections, and so on March 10th 2020 I landed in the UK, excited to spend the next few years exploring everything my new home on the border of Northumberland, the wider UK, and the Northern Hemisphere had to offer. I quickly discovered that the inside of my flat was quite nice, thank you.</p>
      <p>I am passionate about mentoring and teaching, improving the experience for people in underrepresented groups in the tech & games industries, and bringing concepts and workflows from software development into the games industry. I am an engaging speaker who is constantly talking to anyone who will listen about all of these topics, and would love to be invited to do this at your event or workplace.</p>
      <p>When I am not at work or banging on about automated tests, I can probably be found rambling in a muddy field with my dog, Growlithe.</p>
      <p>If you would like to contact me, please feel free to do so on <OutboundLink href="https://twitter.com/nikkyarmstrong">Twitter</OutboundLink> or <OutboundLink href="https://www.linkedin.com/in/nikky-armstrong/">LinkedIn</OutboundLink>.</p>
    </Layout>
  )
}