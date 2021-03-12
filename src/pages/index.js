import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home" 
      description="This is a sample website for the Gatsby crash course"
    />
    <h1>Hi people</h1>
    <p>Welcome to my website.</p>
    <p>This is a simple site for the Gatsby Crash Course.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
