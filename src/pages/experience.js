import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

export default function About({location}) {
  return (
    <Layout>
      <Metadata title="Experience"
                description="Nikky Armstrong | Work History and Experience"
                pathname={location.pathname} />
      <h1>Nikky Armstrong</h1>

      <h2>Intro Spiel</h2>
      Int Tech 2020, Snr, then Lead. Generally just stress about being a good mentor and a good lead because I've never had women be either

      <p>Selected career highlights. For full information, visit my <OutboundLink href="https://www.linkedin.com/in/nikky-armstrong/">LinkedIn</OutboundLink></p>

      <h2>Experience</h2>
      <p>Lead Programmer - Silver Rain Games</p>
      At SRG I've transformed the code team from being absolute cowboys to adhering to a coding standard, using code reviews, sharing knowledge, having a study group, having a backlog, and a team expectations document, basically trying to get the team to operate as respectfully and inclusively as possible internally and also when interacting with other disciplines while also moving forward together towards improving our coding skills. Also at SRG I've improved a bunch of tools to help the rest of the team and am basically always being helpdesk ahah, and have given up a lot of my coding time to make sure I'm available for the team

      <p>Senior Gameplay Programmer - Ubisoft Reflections</p>
      FOunded and ran C++ and women group
      <p>Software Engineer - Immersive Technologies</p>

      <p>Software Engineer - Maptek</p>

      <h2>Volunteering</h2>
      <p>Limit Break 2020, 2021</p>
      <p>Girls' Network 2021</p>

      <h2>Education</h2>
      <p>Bachelor of Computer Science (Hons. First Class) 2007 - 2010</p>

    </Layout>
  )
}
