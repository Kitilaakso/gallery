import React from "react";
import { Component } from "react";

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    /* JOS ON JOKIN TILA tau props TULISI KÄYTTÄÄ TÄTÄ EIKÄ YLINTÄ shouldComponentUpdate(){
         if(this.state) !== nextState.count){
             return true
         } 
         return false
     }*/
    render() {
        return <h1 className='f1'>RoboFriends</h1>
    }
}
export default Header;
