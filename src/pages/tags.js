import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import TagCloud from "../components/tag-cloud"

export default function Tags({location}) {
  return (
    <Layout>
      <Metadata title="Experience"
                description="Nikky Armstrong | Work History and Experience"
                pathname={location.pathname} />
      <TagCloud />
    </Layout>
  )
}