import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import * as blogStyles from "../styles/blog.module.scss"
import * as styles from "../styles/layout.module.scss"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(fromNow: true, formatString: "DD MMMM, YYYY")
            featuredalt
            featured {
              childImageSharp {
                gatsbyImageData
              }
            }
            tags
          }
          timeToRead
          excerpt
          id
          fields {
            slug
          }
        }
      }
    }
  }
`

export default function TagSearch({ data, location, pageContext }) {
  return (
    <Layout>
      <Metadata title="Tags"
                description="Nikky Armstrong | Tags"
                pathname={location.pathname} />
      <div className={blogStyles.header}>
        <div>
          Posts matching: <span className={blogStyles.tags}>{pageContext.tag}</span>
        </div>
        <FontAwesomeIcon aria-label='sort-direction' title='sort-direction' icon={faArrowUp} />
      </div>
      <ul className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          let tagArray = edge.node.frontmatter.tags?.split(',')
          if (!tagArray || !tagArray.includes(pageContext.tag)) {
            return;
          }

          return (
            <li className={blogStyles.post} key={edge.node.id}>
              {
                edge.node.frontmatter.featured && (
                  <GatsbyImage className={blogStyles.featured}
                    image={edge.node.frontmatter.featured?.childImageSharp?.gatsbyImageData}
                    alt={edge.node.frontmatter.featuredalt}
                  />
                )
              }
              <div className={blogStyles.contentTeaser}>
                <h3>
                  <Link to={`/blog/${edge.node.fields.slug}/`}>
                    {edge.node.frontmatter.title}
                  </Link>
                </h3>
                <div className={blogStyles.meta}>
                  <span>
                    Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                    {edge.node.timeToRead} min read
                  </span>
                </div>

                <p className={blogStyles.excerpt}>{edge.node.excerpt}</p>
                <div className={styles.button}>
                  <Link to={`/blog/${edge.node.fields.slug}/`}>Read More</Link>
                </div>
                <div>
                  {
                    tagArray?.map(tag => {
                      return (
                        <Link to={`/tags/${tag}/`} className={blogStyles.tags}>{tag}</Link>
                      )
                    })
                  }
                </div>
              </div>
            </li>
          )
        })}
      </ul>
     </Layout>
  )
}
