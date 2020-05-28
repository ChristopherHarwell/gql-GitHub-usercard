import { useStaticQuery } from "gatsby"
import Card from "gatsby-plugin-material-ui"
import { default as React, useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from "graphql"
import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag"

const GET_REPO = gql
`query {
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
  }
`;

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_REPO);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Layout>
      <Card>
        {data.GET_REPO.map(repo => {
          return console.log(repo);
        })}
      </Card>
    </Layout>
  )
}

export default IndexPage
