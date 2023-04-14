import React from 'react'
import PropsTypes from 'prop-types'
import Response from './Response'
import Message from './Message'
import Typing from './Typing'

function MessageHistory({list}) {

    const messageType = list.map(message => {
        if (message.type === 'message') {
          return <Message key={message.id} message={message} from={message.from} />
        }
    
        if (message.type === 'response') {
          return <Response key={message.id} message={message} from={message.from} />
        }
    
        if (message.type === 'typing') {
          return <Typing key={message.id} message={message} from={message.from} />
        }
      })
    
      return (
        <ul>
          {messageType}
        </ul>
      );
}

MessageHistory.propsTypes = {
    messages: PropsTypes.arrayOf(
        PropsTypes.shape({
            id: PropsTypes.string.isRequired,
            from: PropsTypes.object.isRequired,
            type: PropsTypes.oneOf(['response', 'message', 'typing']).isRequired,
            time: PropsTypes.string.isRequired,
            text: PropsTypes.string.isRequired,
        }),
    ),
}

export default MessageHistory