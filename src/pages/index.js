import { graphql, useStaticQuery } from "gatsby"
import Card from "gatsby-plugin-material-ui"
import { default as React, useEffect } from "react"
import Layout from "../components/layout"
import {  } from "graphql"
import gql from "graphql-tag"

const { createApolloFetch } = require('apollo-fetch');

const fetch = createApolloFetch({
  url: 'https://api.github.com/graphql',
});

fetch({
  query: `{
    organization(login: "debtcollective") {
        login
        name
        location
        id
        avatarUrl
        websiteUrl
        url
        repositories(first: 100) {
          nodes {
            name
            id
            createdAt
            description
            updatedAt
            url
            projectsUrl
          }
        }
      }
    }`,
}).then(res => {
  console.log(res.data);
});



const IndexPage = () => {
  return (
    <Layout>
      <Card>
  {fetch()}
      </Card>
    </Layout>
  )
}

export default IndexPage
