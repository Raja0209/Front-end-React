import React, { Component } from 'react';

export default class LogoLink extends Component{

    render(){

        return(

            <a href="index3.html" class="brand-link">
                <img src={this.props.logoIcon} alt={this.props.AltLogo} class="brand-image img-circle elevation-3" />
                <span class="brand-text font-weight-light">{this.props.titleApp}</span>
            </a>
        );
    }
}