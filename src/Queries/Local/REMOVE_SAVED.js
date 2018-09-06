import gql from 'graphql-tag'

export default gql`
    mutation removeSaved($id: String!) {
        removeSaved(id: $id) @client
    }
`
