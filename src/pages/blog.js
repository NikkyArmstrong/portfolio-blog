import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
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
            tags
          }
          excerpt
          timeToRead
          id
          fields {
            slug
          }
        }
      }
    }
  }
`

// todo search, archive, pagination

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.location = props.location;
    this.dataArray = props.data.allMarkdownRemark.edges;

    this.state = { sortIcon: faArrowDown, tooltip: "Posts newest to oldest", data: props.data.allMarkdownRemark.edges };
  }

  flip() {
    let newIcon = this.state.sortIcon === faArrowUp ? faArrowDown : faArrowUp;
    let newTooltip = newIcon === faArrowUp ? "Posts oldest to newest" : "Posts newest to oldest";
    this.setState({sortIcon: newIcon, tooltip: newTooltip});

    let data = this.state.data.reverse();
    this.setState({data: data});
  }

  render() {
    return (
      <Layout>
        <Metadata title="Blog"
                  description="Nikky Armstrong | Blog Archive"
                  pathname={this.location.pathname} />
        <div className={blogStyles.header}>
          <div></div>
          <FontAwesomeIcon className={blogStyles.sortArrow}
                           aria-label='sort-direction' title={this.state.tooltip}
                           icon={this.state.sortIcon} onClick={this.flip.bind(this)} />
        </div>
        <ul className={blogStyles.posts}>
          {this.state.data.map(edge => {
            let tagArray = edge.node.frontmatter.tags?.split(',')
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
        {/* <div className={blogStyles.meta}>
          <Link to="/archive">Archive</Link> <span> / </span>{" "}
          <input type="text" placeholder="search"></input>
        </div> */}
      </Layout>
    )
  }
}

export default Blog;