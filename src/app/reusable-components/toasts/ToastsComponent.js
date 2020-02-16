import React from "react";
import ReactDOM from 'react-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Toast from "./Toast";
import { removeToast } from './ToastActions';

const toastsRoot = document.getElementById('toasts-root')

const Toasts = ({ actions, toasts }) => {
    const { removeToast } = actions;
    return ReactDOM.createPortal(
        <ul className="toasts">
            {toasts.map(toast => {
                const { id } = toast;
                return (
                    <Toast {...toast} key={id} onDismissClick={() => removeToast(id)} />
                );
            })}
        </ul>, toastsRoot
    );
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ removeToast }, dispatch)
});

const mapStateToProps = state => {
    return {
        toasts: state.toasts
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Toasts);