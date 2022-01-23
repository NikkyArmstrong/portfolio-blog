import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import * as blogStyles from "../styles/blog.module.scss"
import * as styles from "../styles/layout.module.scss"

export const pageQuery = graphql`
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

export default function Blog({data, location}) {
  return (
    <Layout>
      <Metadata title="Blog"
                description="Nikky Armstrong | Blog Archive"
                pathname={location.pathname} />
      <ul className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post} key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.fields.slug}/`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <div className={blogStyles.meta}>
                <span>
                  Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                  {edge.node.timeToRead} min read
                </span>
              </div>
              {
                edge.node.frontmatter.featured && (
                  <GatsbyImage className={blogStyles.featured}
                    image={edge.node.frontmatter.featured?.childImageSharp?.gatsbyImageData}
                    alt={edge.node.frontmatter.featuredalt}
                  />
                )
              }
              <p className={blogStyles.excerpt}>{edge.node.excerpt}</p>
              <div className={styles.button}>
                <Link to={`/blog/${edge.node.fields.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

