import React, { Component } from 'react';
import NavBarUl from "./../navbar/NavBarUl";

export default  class Header extends Component {
        render(){ 
                return (
                          
                         <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                                <NavBarUl />
                        </nav>
                );
        }
    }
    