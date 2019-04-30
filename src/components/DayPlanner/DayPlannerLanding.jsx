import React from 'react'
import TimeBlock from './Blocks/TimeBlock'

import './DayPlannerLanding.scss'

export class DayPlannerLanding extends React.Component {
    render() {
        return (
            <div className="day-planner">
                <TimeBlock title="Test" minutes={60} />
            </div>
        )
    }
}

export default DayPlannerLanding
