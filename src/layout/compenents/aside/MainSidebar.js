import React, { Component } from 'react';
import LogoLink from './elments/LogoLink';
 
export default  class MainSidebar extends Component {
        render(){
                const img1 = process.env.PUBLIC_URL+"/AdminLTE-3.0.0-rc.5/dist/img/AdminLTELogo.png";
                const img2 = process.env.PUBLIC_URL+"/AdminLTE-3.0.0-rc.5/dist/img/user2-160x160.jpg";

                return (
                        
                        <aside class="main-sidebar sidebar-dark-primary elevation-4">
                                <LogoLink logoIcon={img1} AltLogo="Application" titleApp="Application"/>

                        
                                <div class="sidebar">
                                
                                        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                                                <div class="image">
                                                        <img src={img2} class="img-circle elevation-2" alt="User picture"/>
                                                </div>
                                                <div class="info">
                                                        <a href="#root" class="d-block">Alexander Pierce</a>
                                                </div>
                                        </div>

                                
                                        <nav class="mt-2">
                                                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                                
                                                        <li class="nav-item has-treeview menu-open">
                                                                <a href="#root" class="nav-link active">
                                                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                                                <p>
                                                                        Dashboard
                                                                        <i class="right fas fa-angle-left"></i>
                                                                </p>
                                                                </a>
                                                                <ul class="nav nav-treeview">
                                                                        <li class="nav-item">
                                                                                <a href="#root" class="nav-link active">
                                                                                <i class="far fa-circle nav-icon"></i>
                                                                                <p>Dashboard v1</p>
                                                                                </a>
                                                                        </li>
                                                                        <li class="nav-item">
                                                                                <a href="#root" class="nav-link">
                                                                                <i class="far fa-circle nav-icon"></i>
                                                                                <p>Dashboard v2</p>
                                                                                </a>
                                                                        </li> 
                                                                </ul>
                                                        </li> 
                                                </ul>
                                        </nav>
                                </div> 
                        </aside>
                );
        }
    }