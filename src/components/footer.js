import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as footerStyles from "../styles/footer.module.scss"
import Socials from "./socials"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )

  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        {data.site.siteMetadata.author} &copy; {new Date().getFullYear().toString()}{" "}
      </div>
      <div>
        <Socials />
      </div>
    </footer>
  )
}

export default Footer