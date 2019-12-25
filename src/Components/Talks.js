import React, { Fragment, useState } from 'react'
import { Col, Row } from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import remcalc from 'remcalc'
import Query from './Query'
import Scroll from './Scroll'
import Talks from './TalksList'
import ALL_VIDEOS from '../Queries/ALL_VIDEOS'
import COUNT from '../Queries/COUNT'

import PublishedYearFilter from './Filters/Year'
import DurationFilter from './Filters/Duration'
import Order from './Filters/Order'

import { Title } from './Styling/Text'

const Icon = styled(FontAwesomeIcon)`
    margin-right: ${remcalc(10)};
    display: block;
    cursor: pointer;
`

const getMore = (fetchMore, allVideoses) =>
    fetchMore({
        variables: {
            first: 9,
            after: allVideoses[allVideoses.length - 1].id
        },
        updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev
            return {
                allVideoses: [
                    ...prev.allVideoses,
                    ...fetchMoreResult.allVideoses
                ]
            }
        }
    })

const VideoComponent = ({ search }) => {
    const [duration, setDuration] = useState(undefined)
    const [year, setYear] = useState(undefined)
    const [order, setOrder] = useState('createdAt_DESC')
    const [filtersOpened, setFiltersOpened] = useState(false)

    const setDurationFilter = duration => setDuration(duration)
    const setPublishYear = year => setYear(year)
    const changeOrder = e => setOrder(e.target.value)
    const toggleFilters = () => setFiltersOpened(o => !o)

    return (
        <Fragment>
            <Title>
                <Flex
                    role="button"
                    tabindex="0"
                    onClick={toggleFilters}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            toggleFilters()
                        }
                    }}
                >
                    {filtersOpened ? (
                        <Icon icon="chevron-up" />
                    ) : (
                        <Icon icon="chevron-down" />
                    )}
                    Filters
                </Flex>
            </Title>
            {filtersOpened ? (
                <Flex
                    wrap
                    alignCenter
                    justifyBetween
                    style={{
                        marginBottom: 40
                    }}
                >
                    <DurationFilter
                        duration={duration}
                        onClick={setDurationFilter}
                    />
                    <PublishedYearFilter year={year} onClick={setPublishYear} />
                    <Order onChange={changeOrder} />
                </Flex>
            ) : null}
            <Query
                query={ALL_VIDEOS}
                variables={{
                    first: 9,
                    search,
                    duration,
                    year,
                    order
                }}
            >
                {({ data: { allVideoses }, fetchMore }) => {
                    return (
                        <Row
                            css={`
                                justify-content: center;
                            `}
                        >
                            <Col xs={12}>
                                <Row>
                                    <Talks
                                        search={search}
                                        talks={allVideoses}
                                    />
                                </Row>

                                <Query
                                    query={COUNT}
                                    variables={{
                                        search
                                    }}
                                >
                                    {({ data: { _allVideosesMeta } }) => (
                                        <Scroll
                                            show={
                                                _allVideosesMeta.count >
                                                allVideoses.length
                                            }
                                            onBottom={() =>
                                                getMore(fetchMore, allVideoses)
                                            }
                                        />
                                    )}
                                </Query>
                            </Col>
                        </Row>
                    )
                }}
            </Query>
        </Fragment>
    )
}

export default VideoComponent
