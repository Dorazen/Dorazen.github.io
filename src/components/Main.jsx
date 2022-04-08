import React from "react";
import { Messages, Input, CustomButton } from "./index";
import { randomName, randomColor } from "./RandomGenerator";
import { Navbar, FormControl, Form, } from "react-bootstrap";
import logo from "./logo.svg"

export default class Main extends React.Component {
  state = {
    member: {
      username: randomName(),
      color: randomColor(),
    },
    messages: []
  }

  constructor() {
    super();
    this.drone = new window.Scaledrone("GsIMFm21Sjp8P0Bl", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar expand="lg" fixed="top">
          <Navbar.Text>ChatApp</Navbar.Text>
          <Navbar.Brand>
            <img src={logo} alt="ChatApp logo" className="logo" />
          </Navbar.Brand>
          <Form>
            <FormControl className="name-bar" placeholder={`Nickname: ${this.state.member.username}`} size="sm" disabled />
            <CustomButton />
          </Form>
        </Navbar>

        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div >
    );
  }
}


//    onSendMessage = (newMessage) => {
  //   const messages = this.state.messages
  //   messages.push({
  //     text: newMessage,
  //     member: this.state.member
  //   })
  //   this.setState({ messages: messages })
  // }
  //onSendMessage without scaledrone