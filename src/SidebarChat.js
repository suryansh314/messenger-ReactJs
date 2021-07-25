import React, {useState, useEffect} from 'react';

import {Avatar} from '@material-ui/core';

import {Link} from 'react-router-dom';

import './SidebarChat.css';
import db from './firebase';

function SidebarChat ({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("")

    useEffect(() => {
        if (id) {
            db
                .collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timeStamp', 'desc').onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map((doc) => 
                    doc.data()))
                ));
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name of chat room");

        if (roomName) {
            db.collection('rooms').add({
                name: roomName
            })
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="SidebarChat__info">
                    <h2>{name}</h2>
                    <p>Click to open</p>
                </div>
            </div>  
        </Link>
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );

}

export default SidebarChat;