import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

export default function NotFound({location}) {
  return (
    <Layout>
      <Metadata title="404" description="404" pathname="/404" />
      <h1>404: Page Not Found</h1>
      <p>
        <Link to="/blog/">Check our latest articles</Link>
      </p>
    </Layout>
  )
}
