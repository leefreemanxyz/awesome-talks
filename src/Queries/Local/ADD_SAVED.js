import gql from 'graphql-tag'

export default gql`
    mutation addSaved($id: String!) {
        addSaved(id: $id) @client
    }
`
