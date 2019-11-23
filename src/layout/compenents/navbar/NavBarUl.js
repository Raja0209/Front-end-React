import React, { Component } from 'react';
import NavBarLi from './NavBarLi';
export default  class NavBarUl extends Component{
     
    render(){
            
            const li_Nav=[
                {classliNav: "nav-item", LinkClass:"nav-link",icons:"g",LinkURL:"www", LinkLabel:"test1"}
                ,{classliNav: "nav-item", LinkClass:"nav-link",icons:"gg",LinkURL:"www2", LinkLabel:"test2"}
                ,{classliNav: "nav-item", LinkClass:"nav-link",icons:"fa fa-edit",LinkURL:"www3", LinkLabel:"test3"}
            ];
             const listItems = li_Nav.map((liElt) => 
                 <NavBarLi  LiElt={liElt} />
             );
             

        return ( 
            
            <ul class="navbar-nav"> 
             <li class="nav-item">
                 <a class="nav-link" data-widget="pushmenu" href="#root"><i class="fas fa-bars"></i></a>
             </li>
                {listItems}
            </ul>    
        );
    }
} 