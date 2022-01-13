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
    </Layout>
  )
}
