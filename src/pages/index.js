import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "Growlithe.jpg" }) {
      publicURL
    }
  }
`

export default function Index({data}) {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <h1>Home page</h1>
      <h2>Software Engineer and Game Developer</h2>
      <img alt="Cute dog" src={data.image.publicURL} />
    </Layout>
  )
}