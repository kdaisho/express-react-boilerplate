import React, { Component } from "react";

class App extends Component {
    state = {
        username: ""
    };

    componentDidMount() {
        fetch("/api/getUsername")
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
    }

    render() {
        const { username } = this.state;
        return (
            <div>
                {username ? (
                    <h1>{`Hello ${username}`}</h1>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        );
    }
}

export default App;
