import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './TimeBlock.scss'

export class TimeBlock extends React.Component {
    static propTypes = {
        minutes: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        startTime: PropTypes.number.isRequired,
        isSelected: PropTypes.bool.isRequired,
    }

    static defaultProps = {
        startTime: 0,
        minutes: 0,
        title: 'Block',
        isSelected: false,
        className: '',
    }

    get className() {
        const { className, isSelected } = this.props
        return classNames('time-block', className, {
            selected: isSelected,
        })
    }

    handleMouseDown = () => {
        this.setState({
            isSelected: true,
        })
    }

    render() {
        const { title, minutes } = this.props
        const style = {
            height: minutes,
        }

        return (
            <div className={this.className} style={style}>
                <div class="block-drag top" />
                <div className="block-title">{title}</div>
                <div className="block-body" />
                <div class="block-drag bottom" />
            </div>
        )
    }
}

export default TimeBlock
