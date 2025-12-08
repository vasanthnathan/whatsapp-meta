import { useState } from 'react'
import { templates } from './templates'
import { buildPayload } from './utils'
import { sendWhatsAppMessage } from './services/api'
import PhoneInput from './components/PhoneInput'
import MessageTable from './components/MessageTable'
import './App.css'

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [formValues, setFormValues] = useState({})
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [sendStatus, setSendStatus] = useState(null)
  const [incomingMessages, setIncomingMessages] = useState([])

  const handleTemplateChange = (e) => {
    const templateId = e.target.value
    const template = templates.find(t => t.id === templateId)
    setSelectedTemplate(template)
    
    const initialValues = {}
    if (template) {
      template.placeholders.forEach(placeholder => {
        initialValues[placeholder] = ''
      })
    }
    setFormValues(initialValues)
    setSendStatus(null)
  }

  const handleInputChange = (placeholder, value) => {
    setFormValues(prev => ({
      ...prev,
      [placeholder]: value
    }))
  }

  const handleSendMessage = async () => {
    if (!selectedTemplate) {
      setSendStatus({ success: false, message: 'Please select a template' })
      return
    }

    const cleanedPhone = phoneNumber.replace(/\D/g, '')
    if (!cleanedPhone || cleanedPhone.length < 10) {
      setSendStatus({ success: false, message: 'Please enter a valid phone number' })
      return
    }

    const missingFields = selectedTemplate.placeholders.filter(
      placeholder => !formValues[placeholder] || formValues[placeholder].trim() === ''
    )

    if (missingFields.length > 0) {
      setSendStatus({ 
        success: false, 
        message: `Please fill in all fields: ${missingFields.join(', ')}` 
      })
      return
    }

    setIsSending(true)
    setSendStatus(null)

    const payload = buildPayload(selectedTemplate, formValues, cleanedPhone)
    
    const result = await sendWhatsAppMessage(payload)
    
    setIsSending(false)
    
    if (result.success) {
      setSendStatus({ success: true, message: 'Message sent successfully!' })
      setFormValues({})
      setPhoneNumber('')
    } else {
      setSendStatus({ success: false, message: `Failed to send message: ${result.error}` })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>WhatsApp Meta Message Sender</h1>
      </header>
      
      <main className="App-main">
        <div className="message-sender">
          <div className="form-section">
            <label htmlFor="template-select">Select Template</label>
            <select
              id="template-select"
              value={selectedTemplate?.id || ''}
              onChange={handleTemplateChange}
              className="template-select"
            >
              <option value="">-- Select a template --</option>
              {templates.map(template => (
                <option key={template.id} value={template.id}>
                  {template.name}
                </option>
              ))}
            </select>
          </div>

          {selectedTemplate && (
            <>
              <div className="template-preview">
                <h3>Template Preview:</h3>
                <p className="preview-text">{selectedTemplate.message}</p>
              </div>

              <div className="form-fields">
                <h3>Fill in the placeholders:</h3>
                {selectedTemplate.placeholders.map(placeholder => (
                  <div key={placeholder} className="form-field">
                    <label htmlFor={placeholder}>{placeholder}</label>
                    <input
                      id={placeholder}
                      type="text"
                      value={formValues[placeholder] || ''}
                      onChange={(e) => handleInputChange(placeholder, e.target.value)}
                      placeholder={`Enter ${placeholder}`}
                      className="placeholder-input"
                    />
                  </div>
                ))}
              </div>

              <div className="phone-section">
                <PhoneInput value={phoneNumber} onChange={setPhoneNumber} />
              </div>

              <div className="send-section">
                <button
                  onClick={handleSendMessage}
                  disabled={isSending}
                  className="send-button"
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                
                {sendStatus && (
                  <div className={`status-message ${sendStatus.success ? 'success' : 'error'}`}>
                    {sendStatus.message}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <MessageTable messages={incomingMessages} />
      </main>
    </div>
  )
}

export default App
