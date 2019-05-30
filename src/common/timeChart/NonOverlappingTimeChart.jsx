import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { DropTarget } from 'react-dnd'

import { DropTargetTypes } from 'utilities/enums'

export class NonOverlappingTimeChart extends React.Component {
    static propTypes = {
        className: PropTypes.string.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        children: PropTypes.node,
    }
    render() {
        const { connectDropTarget, className, children } = this.props
        return connectDropTarget(<div className={classNames('time-chart', className)}>{children}</div>)
    }
}

const spec = {}

const collect = (connect, monitor) => ({
    isHighlighted: monitor.canDrop(),
    isHovered: monitor.isOver(),
    connectDropTarget: connect.dropTarget(),
})

export default DropTarget(DropTargetTypes.NON_OVERLAPPING_TIME_CHART, spec, collect)(NonOverlappingTimeChart)
