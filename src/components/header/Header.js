import React, {Component} from "react";

export class Header extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center flex-column align-items-center mt-5">
                <img alt="logo" src="icons/ico-logo.png" width="50" height="50"/>
                <strong><p className="mt-3 header-text">Frontend Test</p></strong>
            </div>
        );
    }
}