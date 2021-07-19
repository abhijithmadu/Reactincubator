import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Overlay extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="overlay" style={{ display: this.props.display }}></div>
        )
    }
}
