import gql from 'graphql-tag'

export default gql`
    query GetSaved {
        saved @client
    }
`
