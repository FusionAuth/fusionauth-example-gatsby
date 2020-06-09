import React from "react"
import Layout from "../components/layout"
import {
  generateLoginUrl,
} from '../helpers/auth';

const IndexPage = () => (
  <Layout>
    <h1>Home</h1>
    <p>
      <a href={generateLoginUrl()}>Login to get started</a>
    </p>
  </Layout>
)

export default IndexPage
