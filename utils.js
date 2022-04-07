export function getUniqueTags(data) {
  let outArray = new Set();
  data.forEach(edge => {
    if (edge.node.frontmatter.tags) {
      var postTags = edge.node.frontmatter.tags?.split(',');
      postTags.forEach(tag => {
        outArray.add(tag);
      });
    }
  });

  return outArray;
}