import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const About = () => {
  return (
    <Layout>
      <Metadata title="About" description="This is my about page" />
      <h1>About Page</h1>
      <p>Nikky Armstrong is a Software Engineer with over ten years experience across a number of different industries. She worked for most of her career in Australia for various mining software companies, most notably for Immersive Technologies creating mining simulators for operator training. In 2020, she successfully transfered to AAA games, moving to the UK to work for Ubisoft Reflections. She is passionate about mentoring and teaching, improving the experience for people in underrepresented groups in the tech and games industries, and bringing concepts and workflows from software development into the games industry.</p>
    </Layout>
  )
}

export default About