import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";




export default class Input extends React.Component {
    state = {
        text: ""
    }

    handleChange = e => {
        this.setState({ text: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ text: "" });
        this.props.onSendMessage(this.state.text);
        const element = document.getElementById("content");
        element.scrollIntoView();
    }

    render() {
        const { text } = this.state
        return (
            <div id="mymsg">
                <Form onSubmit={this.handleSubmit} className="display">
                    <FormControl className="input-bar"
                        onChange={this.handleChange} value={text}
                        type="text" placeholder="Aa" size="sm" autoFocus={true} />
                    <Button type="submit" variant="outline-success" size="sm" id="b1">Send Message</Button>
                    <div id="content">
                        <div className="focus">not so clever fix</div>
                    </div>
                </Form>
            </div>
        );
    }
}
