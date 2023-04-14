import React from 'react'
import PropsTypes from 'prop-types'

function Response(props) {
    const {message, from} = props;

    return (
    <>
        <div className="message-data align-right">
            <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
            <span className="message-data-name">{from.name}</span>
            <i className="fa fa-circle me"></i>
        </div>
        <div className="message other-message float-right">{message.text}</div>
    </>
    );
}

Response.propTypes = {
    message: PropsTypes.shape({
        id: PropsTypes.string.isRequired,
        from: PropsTypes.shape({
            name: PropsTypes.string.isRequired,
        }),
        type: PropsTypes.string.isRequired,
        time: PropsTypes.string.isRequired,
        text: PropsTypes.string.isRequired,
    }),
    from: PropsTypes.shape({
        name: PropsTypes.string.isRequired,
    })
}

export default Response