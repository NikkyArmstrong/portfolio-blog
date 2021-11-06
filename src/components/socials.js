import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as socialStyles from "../styles/socials.module.scss"

const Socials = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            header {
              social_links {
                label
                url
                icon_class
              }
            }
          }
        }
      }
    `
  )

  return (
    <ul className={socialStyles.socialList}>
      {data.site.siteMetadata.header.social_links.map(link => {
        return (
          <li key={link.label}>
            <a href={link.url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon aria-label={link.label}
                                title={link.label}
                                icon={['fab', `${link.icon_class}`]} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Socials