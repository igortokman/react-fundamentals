import React from 'react';


export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState((state, props) => {
            // console.log("state: " + JSON.parse(JSON.stringify(state)));
            // console.log("props: " + JSON.parse(JSON.stringify(props)));
            return {date: new Date()};
        })
    }

    render() {
        return (
            <div>
                <span>current date is </span>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}