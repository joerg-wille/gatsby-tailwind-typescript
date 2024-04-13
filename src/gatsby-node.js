// const path = require('path')

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions
//   const yourTemplate = require.resolve("sections.jsx")

//   return graphql(`
//     {
//       allMdx {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//             id
//             internal {
//               contentFilePath
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }

//     result.data.allMdx.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: `${yourTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
//         context: {
//           path: node.frontmatter.path,
//         },
//       })
//     });
//   })
// };