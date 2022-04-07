import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { getUniqueTags } from "../../utils"
import * as blogStyles from "../styles/blog.module.scss"

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
    <div>
      <h2>Tags</h2>
      <ul>
        {tags.size > 0 && [...tags].map(tag => {
          return (
            <Link className={blogStyles.tagLink} to={`/tags/${tag}/`}>{tag}</Link>
          )
        })}
      </ul>
    </div>
  )
}

export default TagCloud