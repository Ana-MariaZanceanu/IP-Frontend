import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
           providerName: props.providerName
        }
    }

    render() {
        return (
            <div id="header">
                <style>
                @import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@1,300&display=swap");
                </style>
                <h2>{this.state.providerName}</h2>
            </div>
        );
    }
}

export default Header;