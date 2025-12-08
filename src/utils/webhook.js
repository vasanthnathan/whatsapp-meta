export function parseIncomingMessage(webhookData) {
  if (!webhookData || !webhookData.entry) {
    return null
  }

  const messages = []
  
  webhookData.entry.forEach(entry => {
    if (entry.changes && entry.changes[0]?.value?.messages) {
      entry.changes[0].value.messages.forEach(message => {
        const messageData = {
          id: message.id,
          from: message.from,
          timestamp: parseInt(message.timestamp) * 1000,
          type: message.type,
          content: '',
          url: '',
          caption: ''
        }

        switch (message.type) {
          case 'text':
            messageData.content = message.text?.body || ''
            break
          case 'image':
            messageData.url = message.image?.id || ''
            messageData.caption = message.image?.caption || ''
            break
          case 'video':
            messageData.url = message.video?.id || ''
            messageData.caption = message.video?.caption || ''
            break
          case 'audio':
            messageData.url = message.audio?.id || ''
            break
          default:
            messageData.content = JSON.stringify(message)
        }

        messages.push(messageData)
      })
    }
  })

  return messages
}

