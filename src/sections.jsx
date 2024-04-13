// import * as React from 'react';
// import { graphql } from 'gatsby';
// import { MDXProvider } from '@mdx-js/react';

// const MySections = ({ data, children }) => {

//   // These settings are just random so you can customize your own settings here
//   // FYI: https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/
//   const MyH1 = props => <h1 style={{ color: `tomato` }} {...props} />
//   const MyParagraph = props => (
//     <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
//   )

//   const components = {
//     h1: MyH1,
//     p: MyParagraph,
//   }

//   return (
//     <div>
//         <MDXProvider components={components}>
//           {children}
//         </MDXProvider>
//     </div>
//   )
// }

// export const query = graphql`
//   query ($path: String!) {
//     mdx(frontmatter: {path: {eq: $path}}) {
//       frontmatter {
//         path
//       }
//     }
//   }
// `

// export default MySections