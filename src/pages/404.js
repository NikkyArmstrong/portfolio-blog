import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import * as styles from "../styles/layout.module.scss"

export default function NotFound({location}) {
  return (
    <Layout>
      <Metadata title="404" description="404" pathname="/404" />
      <h1>404</h1>
      <p>The page you've tried to visit either doesn't exist, or hasn't been created yet.</p>
      <div className={styles.button}>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}
