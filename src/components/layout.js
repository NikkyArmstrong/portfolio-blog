import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../styles/style.scss"
import * as layoutStyles from "../styles/layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header />
      <section className={layoutStyles.aligner}>
        <div className={layoutStyles.mainContent}>
          {props.children}
        </div>
      </section>
    </div>
    <Footer />
  </div>
  )
}

export default Layout