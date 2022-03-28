import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { ListGroup } from "react-bootstrap";

export default class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="list-container">
        <ListGroup className="Messages-list">
          {messages.map(m => this.renderMessage(m))}
        </ListGroup>
      </div>
    );
  }

  renderMessage(message) {
    const key = uuidv4();
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    return ( 
      <ListGroup.Item className={className} key={key}>
        <span
          className="avatar" style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </ListGroup.Item>
    );
  }
}


