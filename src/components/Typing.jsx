import React from 'react'
import PropsTypes from 'prop-types'

function Typing(props) {
    const {message, from} = props;

    return (
    
    <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">
            {from.name + ' печатает '}
            <span className="animation animation-1">.</span>
            <span className="animation animation-2">.</span>
            <span className="animation animation-3">.</span>
        </span>
    </div>
      
    );
}

Typing.propTypes = {
    message: PropsTypes.shape({
        id: PropsTypes.string.isRequired,
        from: PropsTypes.shape({
            name: PropsTypes.string.isRequired,
        }),
        type: PropsTypes.string.isRequired,
        time: PropsTypes.string.isRequired,
    }),
    from: PropsTypes.shape({
        name: PropsTypes.string.isRequired,
    })
}

export default Typing