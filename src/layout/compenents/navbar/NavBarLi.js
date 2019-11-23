import React, { Component } from 'react';
import LinkLi from "./LinkLi";
export default class NavBarLi extends Component{ 
    render(){ 
        const LiElt= this.props.LiElt;
        return (
           
            <li class={LiElt.classliNav}>
               <LinkLi classlink={LiElt.LinkClass} icons={LiElt.icons} LinkURL={LiElt.LinkURL} LinkLabel={LiElt.LinkLabel} />
            </li>
        );
    }
}