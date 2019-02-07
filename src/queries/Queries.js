import gql from "graphql-tag";
export const GET_DATA_FROM_GRAPHQL_API = gql`
  query FetchData {
      page {
    title
    id
    body {
      summary
      processed
      value
      format
    }
  }
  }
`; 