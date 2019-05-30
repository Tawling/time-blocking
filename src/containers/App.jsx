import React from 'react'
import { DragDropContext } from 'react-dnd'
import TouchBackend from 'react-dnd-touch-backend'

import './App.scss'
import DayPlannerLanding from 'components/DayPlanner/DayPlannerLanding'

export const App = () => {
    return (
        <div className="app">
            <DayPlannerLanding />
        </div>
    )
}

export default DragDropContext(
    TouchBackend({
        enableMouseEvents: true,
        touchSlop: 10,
    }),
)(App)
