import React, {Component} from "react";

export class Header extends Component {
    render() {
        return (
            <div className="d-flex flex-column justify-content-center mt-5">
                <img alt="logo" src="icons/ico-logo.png" width="50" height="50"/>
                <h4>Frontend Test</h4>
            </div>
        );
    }
}