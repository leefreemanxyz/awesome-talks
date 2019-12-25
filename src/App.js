import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Speakers from './Pages/Speakers'
import Proposed from './Pages/Proposed'
import Speaker from './Pages/Speaker'
import Tags from './Pages/Tags'
import Tag from './Pages/Tag'
import Favorites from './Pages/Favorites'
import FourOFour from './Pages/FourOFour'
import Video from './Pages/Video'

import './Utils/icons'

export default () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/favorites">
            <Favorites />
        </Route>
        <Route exact path="/categories">
            <Tags />
        </Route>
        <Route exact path="/category/:category">
            <Tag />
        </Route>
        <Route exact path="/speakers">
            <Speakers />
        </Route>
        <Route exact path="/proposed">
            <Proposed />
        </Route>
        <Route exact path="/speaker/:speaker">
            <Speaker />
        </Route>
        <Route exact path="/video/:id">
            <Video />
        </Route>
        <Route>
            <FourOFour />
        </Route>
    </Switch>
)
