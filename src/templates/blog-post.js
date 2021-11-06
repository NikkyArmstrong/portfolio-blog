import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import * as postStyles from "../styles/blogPost.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        featuredalt
        featured {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      timeToRead
      html
    }
  }
`

const BlogPost = props => {
  const image = getImage(props.data.markdownRemark.frontmatter.featured)

  return (
    <Layout>
      <Metadata title={props.data.markdownRemark.frontmatter.title} />
      <div className={postStyles.content}>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <span className={postStyles.meta}>
          Posted on {props.data.markdownRemark.frontmatter.date}{" "}
          <span> / </span> {props.data.markdownRemark.timeToRead} min read
        </span>
        {
          props.data.markdownRemark.frontmatter.featured && (
            <GatsbyImage className={postStyles.featured}
              image={image}
              alt={props.data.markdownRemark.frontmatter.featuredalt}
            />
          )
        }
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default BlogPost