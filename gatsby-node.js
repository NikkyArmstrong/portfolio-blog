const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  let tags = new Set();
  response.data.allMarkdownRemark.edges.forEach(edge => {
    if (edge.node.frontmatter.tags) {
      var postTags = edge.node.frontmatter.tags?.split(',');
      postTags.forEach(tag => {
        tags.add(tag);
      });
    }
  });

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag}`,
      component: path.resolve("./src/templates/tag-search.js"),
      context: {
        tag: tag
      }
    })
  });

  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.fields.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
}