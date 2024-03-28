import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import * as layoutStyles from "../styles/layout.module.scss"

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
      <h1> </h1>
      <p>Hello! I am a Software Engineer with over twelve years' experience across vastly different industries, including web development, mining simulation, and both AAA & Indie game development.</p>
      <GatsbyImage class={layoutStyles.headshot} alt="Nikky with her dog, Growlithe" placeholder="blurred" image={image} />
      <p>I am currently a freelance Lead Programmer, working with <OutboundLink href="https://www.perfectgarbagestudios.com/" target="_blank" rel="noreferrer">Perfect Garbage</OutboundLink>, and on my own projects under my banner Shuffle Thump.</p>
      <p>Before 2020, I lived and worked first in Adelaide and then Perth, Australia, building proprietary games engines for non-games applications, such as mining simulation. In 2019 I was offered a position as Senior Gameplay Programmer with Ubisoft Reflections, and so on March 10th 2020 (the beginning of the pandemic!) I moved to Newcastle upon Tyne, UK. I have since held several remote positions with UK and US based companies and am excited to have many colleagues around the globe.</p>
        <p>I am an engaging speaker, and would love to be invited speak about any of my tech passions at your event or workplace. You can see some past talks I have given on my <Link to="/speaking">Speaking page</Link>. I am also passionate about mentoring and teaching, improving the experience for people in underrepresented groups in the tech & games industries, and bringing concepts and workflows from software development into the games industry.</p>
      <p>When I am not at work or banging on about automated tests, I can probably be found rambling in a muddy field with my dog, Growlithe.</p>
      <p>If you would like to get in touch, feel free to follow me on <OutboundLink href="https://twitter.com/nikkyarmstrong" target="_blank" rel="noreferrer">Twitter</OutboundLink>, <OutboundLink href="https://www.linkedin.com/in/nikky-armstrong/" target="_blank" rel="noreferrer">LinkedIn</OutboundLink>, or send me a message via my <Link to="/contact">Contact page</Link>.</p>
    </Layout>
  )
}