import React, { Component } from "react";
import Talk from "talkjs";

class MyChatComponent extends Component {
  constructor(props) {
    super(props);

    this.inbox = undefined;
  }

  componentDidMount() {
    // Promise can be `then`ed multiple times
    Talk.ready
      .then(() => {
        const me = new Talk.User({
          id: "12345231",
          name: "George Looney",
          email: "george@looney.net",
          photoUrl: "https://talkjs.com/docs/img/george.jpg",
          welcomeMessage: "Hey there! How are you? :-)",
          role: "buyer",
        });

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: "thgh6314",
            me: me,
          });
        }

        const other = new Talk.User({
          id: "54321",
          name: "Ronald Raygun",
          email: "ronald@teflon.com",
          photoUrl: "https://talkjs.com/docs/img/ronald.jpg",
          welcomeMessage: "Hey there! Love to chat :-)",
          role: "seller",
        });

        // You control the ID of a conversation. oneOnOneId is a helper method that generates
        // a unique conversation ID for a given pair of users.
        const conversationId = Talk.oneOnOneId(me, other);

        const conversation =
          window.talkSession.getOrCreateConversation(conversationId);
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        this.inbox = window.talkSession.createInbox({
          selected: conversation,
        });
        this.inbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  }

  componentWillUnmount() {
    if (this.inbox) {
      this.inbox.destroy();
    }
  }

  render() {
    return (
      <span>
        <div
          className="flex items-center justify-center"
          style={{
            height: "500px",
            width: "500px",
            background: "white",
            color: "black",
          }}
          ref={(c) => (this.container = c)}
        >
          Loading...
        </div>
      </span>
    );
  }
}
export default MyChatComponent;
