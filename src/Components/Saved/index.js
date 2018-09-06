import React from 'react'
import { graphql, compose } from 'react-apollo'
import Query from './../Query'
import View from './view'
import GET_SAVED from '../../Queries/Local/GET_SAVED'
import REMOVE_SAVED from '../../Queries/Local/REMOVE_SAVED'
import ADD_SAVED from '../../Queries/Local/ADD_SAVED'

const Saved = props => (
    <Query query={GET_SAVED}>
        {({ data: { saved } }) => {
            return <View saved={saved} {...props} />
        }}
    </Query>
)

export default compose(
    graphql(REMOVE_SAVED, {
        props: ({ mutate }) => ({
            removeSaved: id => mutate({ variables: { id } })
        })
    }),
    graphql(ADD_SAVED, {
        props: ({ mutate }) => ({
            addSaved: id => mutate({ variables: { id } })
        })
    })
)(Saved)
