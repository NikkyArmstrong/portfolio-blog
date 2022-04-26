import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { getUniqueTags } from "../../utils"
import * as blogStyles from "../styles/blog.module.scss"
import * as styles from "../styles/layout.module.scss"

const TagCloud = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  const tags = getUniqueTags(data.allMarkdownRemark.edges);

  return (
    <div className={blogStyles.sidePanel}>
      <h2>Tags</h2>
      {tags.size > 0 && [...tags].map(tag => {
        return (
          <div className={styles.button}>
            <Link to={`/tags/${tag}/`}>{tag}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default TagCloud