import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Socials from "./socials"
import * as headerStyles from "../styles/header.module.scss"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            header {
              nav_links {
                label
                url
              }
            }
          }
        }
      }
    `
  )

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.accent}></div>
      <section className={headerStyles.sideBarContainer}>
      <div className={headerStyles.heroContent}>
        <p className={headerStyles.brand}>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </p>
        <p className={headerStyles.description}>{data.site.siteMetadata.description}</p>
      </div>
      <div className={headerStyles.socialContainer}>
        <Socials />
      </div>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          {data.site.siteMetadata.header.nav_links.map(link => {
            return (
              <li key={link.label}>
                <Link to={link.url}>
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </section>
    </header>
  )
}

export default Header