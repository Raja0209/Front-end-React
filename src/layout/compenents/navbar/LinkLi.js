import React, { Component } from 'react';
export default class LinkLi extends Component{

    render(){
         
        return (
            
        <a class={this.props.classlink} data-widget="pushmenu" href={this.props.LinkURL}>
            <i class={this.props.icons}></i> {this.props.LinkLabel} 
        </a>
            
        );
    }
}