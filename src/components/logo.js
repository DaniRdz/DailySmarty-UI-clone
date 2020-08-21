import React, { Component } from 'react';

import logo from '../../static/assets/images/ds_circle_logo.png'

export default class Logo extends Component {
    render() {
        const size = {
            width: this.props.size ? this.props.size : 105,
            height: this.props.size ? this.props.size : 105
        }

        return (
            <div className='logo-main'>
                <img style={size} src={logo} alt='logo-daily' />
            </div>
        );
    }
}