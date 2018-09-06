import React from 'react'

import { storiesOf } from '@storybook/react'

import { Saved, Unsaved } from './example'

storiesOf('Save', module)
    .add('Saved', () => {
        return <Saved />
    })
    .add('UnSaved', () => {
        return <Unsaved />
    })
