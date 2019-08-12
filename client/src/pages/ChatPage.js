import React, { Component } from 'react';
import ChatMessage from '../components/Chat/ChatMessage';
import Signup from '../components/SignUp/Signup';
import './ChatPage.css';
import ChatApp from '../components/ChatApp/ChatApp'
import { chatkit, ChatManager, TokenProvider } from '@pusher/chatkit-client/react-native';
// import { default as Chatkit } from '@pusher/chatkit-server';


// const chatkit = new Chatkit({
//     instanceLocator: "v1:us1:856db2b4-07cd-410e-b6ea-5f7019f0ca98",
//     key: "40b047cb-ad2c-4e9d-8852-6894933345dd:xN5H7BjJETmWIgvdBP4s5nqOndHsHLfY/9/TgC7SqVg="
// })

class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUsername: '',
            currentId: '',
            currentView: 'signup'
        }
        this.changeView = this.changeView.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    createUser(username) {
        chatkit.createUser({
            id: username,
            name: username,
        })
            .then((currentUser) => {
                this.setState({
                    currentUsername: username,
                    currentId: username,
                    currentView: 'chatApp'
                })
            }).catch((err) => {
                if (err.status === 400) {
                    this.setState({
                        currentUsername: username,
                        currentId: username,
                        currentView: 'chatApp'
                    })
                } else {
                    console.log(err.status);
                }
            });
    }

    changeView(view) {
        this.setState({
            currentView: view
        })
    }

    render() {
        let view = '';
        if (this.state.currentView === "ChatMessage") {
            view = <ChatMessage changeView={this.changeView} />
        } else if (this.state.currentView === "Signup") {
            view = <Signup onSubmit={this.createUser} />
        } else if (this.state.currentView === "chatApp") {
            view = <ChatApp currentId={this.state.currentId} />
        }
        return (
            <div className="App">
                {view}
            </div>
        );
    }
}
export default ChatPage;