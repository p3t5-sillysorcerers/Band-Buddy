import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import "./homepage.css";


class homepage extends Component {

    render() {
        return (
            <div className="jumbotron">
                <h1 class="display-4">Band Buddy! Find music buds in your area!</h1>
                <p class="lead">Create a profile, add your instrument, and hook up with musicians in your neighborhood.</p>

                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="/login" role="button">Log in </a>
                    <a class="btn btn-primary btn-lg" href="/create" role="button">Create an Account </a>
                </p>

            </div>
        )

    }
}

export default homepage;
