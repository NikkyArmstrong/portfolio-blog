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
        excerpt
        featured {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
        tags
      }
      timeToRead
      html
    }
  }
`

export default function BlogPost({ data, location }) {
  const image = getImage(data.markdownRemark.frontmatter.featured)
  const imagePublicUrl = data.markdownRemark.frontmatter.featured.publicURL

  return (
    <Layout>
      <Metadata title={data.markdownRemark.frontmatter.title}
                description={data.markdownRemark.frontmatter.excerpt}
                image={imagePublicUrl}
                pathname={location.pathname} />
      <div className={postStyles.content}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <span className={postStyles.meta}>
          Posted on {data.markdownRemark.frontmatter.date}{" "}
          <span> / </span> {data.markdownRemark.timeToRead} min read
        </span>
        {
          data.markdownRemark.frontmatter.featured && (
            <GatsbyImage className={postStyles.featured}
              image={image}
              alt={data.markdownRemark.frontmatter.featuredalt}
            />
          )
        }
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}
