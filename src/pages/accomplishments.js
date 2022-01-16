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
      <h2>Intro Spiel</h2>
      Available to speak on xyz topics

      <h2>Appearances</h2>

      <p>She Plays Games pod</p>

      <p>Develop Conf 2021</p>

      <p>Career's talks</p>

      <p>YGD masterclass</p>

      <h2>Upcoming</h2>
      <p>Cheltenham Science Festival</p>


    </Layout>
  )
}
