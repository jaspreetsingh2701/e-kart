import React, { Component } from "react";

class Toast extends Component {
    render() {
        const { id, color, text, onDismissClick } = this.props;
        return (
            <li id={`toast-${id}`} className="toast" style={{ backgroundColor: color }}>
                <p className="toast__content">{text}</p>
                <button className="toast__dismiss" onClick={onDismissClick}>x</button>
            </li>
        );
    }

    componentDidMount() {
        const { id, onDismissClick } = this.props;
        const toastID = `toast-${id}`;
        setTimeout(() => {
            if (document.getElementById(toastID)) {
                onDismissClick();
            }
        }, 3000);
    }

    shouldComponentUpdate() {
        return false;
    }
}

export default Toast;