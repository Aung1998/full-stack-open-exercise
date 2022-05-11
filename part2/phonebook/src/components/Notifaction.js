import React from "react";

const Notification = ({message,color}) => {
    if (message === null){
        return null;
    }
    return (
        <div className="noti" style={color}>{message}</div>
    )
}

export default Notification;