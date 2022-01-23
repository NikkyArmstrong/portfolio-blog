import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import * as styles from "../styles/layout.module.scss"

export default function Thanks({location}) {
  return (
    <Layout>
      <Metadata title="Thanks" description="Nikky Armstrong | Contact Thanks" pathname={location.pathname} />
      <h1>Nikky Armstrong</h1>
      <p>Thanks for your query! I'll get back to you as soon as I can.</p>
      <div className={styles.button}>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}
