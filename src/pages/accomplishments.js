import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

export default function About({location}) {
  return (
    <Layout>
      <Metadata title="Accomplishments"
                description="Nikky Armstrong | Accomplishments"
                pathname={location.pathname} />
      <h1>Nikky Armstrong</h1>      
    </Layout>
  )
}
