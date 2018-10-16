import React from 'react';
//display tasks from the app component in a list
//recieve tasks array as prop
export default function Todo (props) {
    return (
        <p>{props.task}</p>
    )
}

//what's the point of having this child function? WHy not just write it in list.js?