import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { DragSource } from 'react-dnd'

import dragTypes from 'utilities/enums'

export class TimeChartItem extends React.Component {
    static propTypes = {
        className: PropTypes.string.isRequired,
        children: PropTypes.node,
        chartMeta: PropTypes.object,
        isDragging: PropTypes.bool.isRequired,
        connectDragSource: PropTypes.func.isRequired,
        isLocked: PropTypes.bool.isRequired,
    }

    static defaultProps = {
        className: '',
        isDragging: false,
        dragSource: (data) => data,
        isLocked: false,
    }

    static dragSourceContract = {
        beginDrag: (props /* , monitor, component */) => {
            const { children, className, chartMeta } = props
            return {
                children,
                className,
                chartMeta,
            }
        },
        endDrag: (props, monitor /* , component */) => {
            if (!monitor.didDrop()) {
                return
            }
        },
        canDrag: ({ isLocked }) => !isLocked,
    }

    render() {
        const { connectDragSource, className, children, chartMeta } = this.props
        let style
        if (chartMeta) {
            style = {
                top: chartMeta.top,
                height: chartMeta.height,
            }
        }
        return connectDragSource(
            <div className={classNames('time-chart-item', className)} style={style}>
                {children}
            </div>,
        )
    }
}

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
})

export default DragSource(dragTypes.TIME_CHART_ITEM, TimeChartItem.dragSourceContract, collect)(TimeChartItem)
