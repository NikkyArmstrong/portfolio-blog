import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDev, faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
library.add(faDev, faTwitterSquare, faLinkedin, faGithubSquare, faSquare)

export default function Index() {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" image="/images/Growlithe.jpg" />
      <h1>Home page</h1>
      <p>Software Engineer and Game Developer</p>
      <StaticImage alt="My dog Growlithe" placeholder="blurred" src="../images/Growlithe.jpg" />
    </Layout>
  )
}