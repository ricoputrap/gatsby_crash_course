import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Latest Posts</h1>
    { data.allMarkdownRemark.edges.map(post => {
      const postContent = post.node.frontmatter;
      return (
        <div key={ post.node.id }>
          <h3>{postContent.title}</h3>
          <small>
            Posted by {postContent.author} on{' '}
            {postContent.date}
          </small>
          <br />
          <br />
          <Link to={ postContent.path }>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      )
    }) }
  </Layout>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`;

export default BlogPage;