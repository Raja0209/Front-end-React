import React, { Component } from 'react';
export default  class Footer extends Component {
        render(){
                return (
                        <footer class="main-footer">
                                <strong>Copyright &copy; {this.props.annee}<a href={this.props.urlcpy}>{this.props.appname}</a>.</strong>
                                All rights reserved.
                                <div class="float-right d-none d-sm-inline-block">
                                <b>Version</b> {this.props.version}
                                </div>
                        </footer>
                    
                );
        }
    }