import React from "react";

export default class Inner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: props.content};

        // arrow function can be used here instead to get this
        this.handle = this.handle.bind(this);
    }

    handle() {
        console.log(this.state.content)
    }

    render() {
        return (
            <>
                <h3>Inner component</h3>
                <div>{this.state.content}</div>
                <button onClick={this.handle}>BTN #2</button>
            </>
        );
    }

}