import React from 'react'
import PropsTypes from 'prop-types'

function Message(props) {
    const {message, from} = props;

    return (
    <>
        <div className="message-data">
            <span className="message-data-name">
                <i className="fa fa-circle online"></i>
                {from.name}
            </span>
          <span className="message-data-time">{message.time}</span>
        </div>
        <div className="message my-message">{message.text}</div>
    </>
    );
}

Message.propTypes = {
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

export default Message