import React, { Component } from 'react';

import logo from '../../static/assets/images/ds_circle_logo.png'

export default class Logo extends Component {
    render() {
        return (
            <div className='logo-main'>
                <img src={logo} alt='logo-daily'/>
            </div>
        );
    }
}