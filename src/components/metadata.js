import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const Metadata = ({ title, description, keywords, image, pathname }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            twitterHandle
          }
        }
        defaultImage: file(base: { eq: "headshot_with_growlithe.jpg" }) {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  )

  const defaultImage = getImage(data.defaultImage)

  const metaTitle = title || data.site.siteMetadata.title
  const metaDescription = description || data.site.siteMetadata.description
  const metaAuthor = data.site.siteMetadata.author
  const metaKeywords = keywords || data.site.siteMetadata.keywords
  const metaImage = image ? `${data.site.siteMetadata.siteUrl}${image}` : defaultImage
  const metaTwitterSummary = metaImage ? "summary_large_image" : "summary"
  const canonicalUrl = `${data.site.siteMetadata.siteUrl}${pathname}`

  return (
    <Helmet>
      <title>{`${metaTitle} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={metaAuthor} />
      <meta name="keywords" content={metaKeywords} />
      { metaImage && <meta property="og:image" content={metaImage} /> }
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:creator" content={data.site.siteMetadata.twitterHandle} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:card" content={metaTwitterSummary} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  )
}

export default Metadata