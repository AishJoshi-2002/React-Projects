import React from "react";
import PropTypes from 'prop-types'

export default function Alert(props) {
    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>Mode Changed:</strong> {props.alert.message}
        </div>
    )
}

Alert.propTypes = { alert: PropTypes.object}