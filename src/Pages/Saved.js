import React from 'react'
import Header from './../Components/Header'
import { Col, Row, Grid } from 'react-styled-flexboxgrid'
import Query from './../Components/Query'
import Video from './../Components/Video'
import GET_VIDEOS from '../Queries/GET_VIDEOS'
import GET_SAVED from '../Queries/Local/GET_SAVED'
import Nav from './../Components/Nav'
import CookieBanner from './../Components/CookieBanner'

export default () => (
    <Grid>
        <div role="banner">
            <Nav />
            <Header title="Saved" noSearch />
        </div>
        <main>
            <Row>
                <Col xs={12}>
                    <Query query={GET_SAVED}>
                        {({ data: { saved } }) => (
                            <Query
                                query={GET_VIDEOS}
                                variables={{ ids: saved }}
                            >
                                {({ data: { allVideoses } }) => (
                                    <Row>
                                        {allVideoses.map(v => (
                                            <Video key={v.id} talk={v} />
                                        ))}
                                    </Row>
                                )}
                            </Query>
                        )}
                    </Query>
                </Col>
            </Row>
        </main>
        <CookieBanner />
    </Grid>
)
