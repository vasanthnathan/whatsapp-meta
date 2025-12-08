export default function MessageTable({ messages }) {
  if (messages.length === 0) {
    return (
      <div className="message-table-container">
        <h3>Incoming Messages</h3>
        <p className="no-messages">No messages received yet</p>
      </div>
    )
  }

  return (
    <div className="message-table-container">
      <h3>Incoming Messages</h3>
      <table className="message-table">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>From</th>
            <th>Type</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index}>
              <td>{new Date(message.timestamp).toLocaleString()}</td>
              <td>{message.from}</td>
              <td>
                <span className={`message-type ${message.type}`}>
                  {message.type}
                </span>
              </td>
              <td>
                {message.type === 'text' && (
                  <div className="message-content">{message.content}</div>
                )}
                {message.type === 'image' && (
                  <div className="message-content">
                    <img src={message.url} alt="Received" className="message-image" />
                    {message.caption && <p className="image-caption">{message.caption}</p>}
                  </div>
                )}
                {message.type === 'video' && (
                  <div className="message-content">
                    <video src={message.url} controls className="message-video" />
                    {message.caption && <p className="video-caption">{message.caption}</p>}
                  </div>
                )}
                {message.type === 'audio' && (
                  <div className="message-content">
                    <audio src={message.url} controls className="message-audio" />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

