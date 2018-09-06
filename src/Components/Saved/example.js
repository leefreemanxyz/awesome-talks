import React from 'react'
import { action } from '@storybook/addon-actions'
import SavedView from './view'

const SavedIDs = [1, 2, 3]

export const Saved = () => {
    return (
        <SavedView
            Saved={SavedIDs}
            addSaved={action('add Saved')}
            removeSaved={action('remove Saved')}
            id={3}
        />
    )
}

export const Unsaved = () => (
    <SavedView
        Saved={SavedIDs}
        addSaved={action('add Saved')}
        removeSaved={action('remove Saved')}
        id={4}
    />
)
