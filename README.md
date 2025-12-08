# WhatsApp Meta Message Sender

A React application for sending WhatsApp template messages via Meta's WhatsApp Business API. Built with Vite.

## Features

- **Template Selection**: Choose from 5 pre-configured WhatsApp appointment reminder templates
- **Dynamic Form Fields**: Automatically generates input fields based on template placeholders
- **Phone Number Input**: Country code selector with phone number input
- **Message Sending**: Send messages via Meta's WhatsApp Business API
- **Incoming Messages Display**: Table view for received messages (text, image, video, audio)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Meta WhatsApp Business API credentials (Bearer Token and Phone Number ID)

### Installation

Install dependencies:

```bash
npm install
```

### Configuration

You can configure the API in two ways:

**Option 1: Direct configuration in `src/templates.js`**
- Edit the `API_CONFIG` object with your Meta WhatsApp Business API credentials

**Option 2: Environment variables (recommended)**
- Create a `.env` file in the root directory (see Environment Variables section below)

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Usage

1. **Select a Template**: Choose a WhatsApp template from the dropdown
2. **Fill Placeholders**: Enter values for all template placeholders (e.g., CustomerName, ServiceName, etc.)
3. **Enter Phone Number**: Select country code and enter the recipient's phone number
4. **Send Message**: Click "Send Message" to send via WhatsApp Business API
5. **View Incoming Messages**: Received messages will appear in the table at the bottom

## Available Templates

1. **Friendly Greeting** - Includes customer name, service, staff, business, and appointment date/time
2. **No Staff Variant (Upcoming)** - Service, business, and appointment date/time
3. **No Staff Variant** - Service, business, and appointment date/time
4. **Staff and Business (Upcoming)** - Service, staff, business, and appointment date/time
5. **Upcoming Mention** - Service, staff, business, and appointment date/time

## Project Structure

```
whatsapp-meta/
├── src/
│   ├── components/
│   │   ├── PhoneInput.jsx      # Phone number input with country code
│   │   └── MessageTable.jsx    # Incoming messages display table
│   ├── services/
│   │   └── api.js              # WhatsApp API integration
│   ├── utils/
│   │   ├── webhook.js          # Webhook message parser
│   │   └── utils.js            # Utility functions
│   ├── templates.js            # Template configurations
│   ├── App.jsx                 # Main App component
│   ├── App.css                 # App styles
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies and scripts
```

## API Payload Structure

The app automatically constructs the payload based on the selected template:

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "48517723982",
  "type": "template",
  "template": {
    "name": "appointment_reminde_generic",
    "language": {
      "code": "en"
    },
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "parameter_name": "1",
            "text": "value1"
          }
        ]
      }
    ]
  }
}
```

## Environment Variables

For local development, create a `.env` file in the root directory:

```
VITE_API_BASE_URL=https://graph.facebook.com/v18.0/YOUR_PHONE_NUMBER_ID/messages
VITE_VERIFY_TOKEN=YOUR_BEARER_TOKEN_HERE
# OR use VITE_API_BEARER_TOKEN as alternative
VITE_API_BEARER_TOKEN=YOUR_BEARER_TOKEN_HERE
```

**Important**: 
- Never commit `.env` file to Git (it's already in `.gitignore`)
- Environment variables prefixed with `VITE_` are exposed to the client
- The app will use `VITE_VERIFY_TOKEN` first, then fall back to `VITE_API_BEARER_TOKEN`
- If no environment variables are set, the app will use empty string (you must set them)

## Deployment to Render

### Prerequisites
- A GitHub account with your code pushed to a repository
- A Render account (sign up at [render.com](https://render.com))

### Steps

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/whatsapp-meta.git
   git push -u origin main
   ```

2. **Create a new Static Site on Render**:
   - Go to [dashboard.render.com](https://dashboard.render.com)
   - Click "New +" → "Static Site"
   - Connect your GitHub account and select the `whatsapp-meta` repository
   - Configure the following settings:
     - **Name**: `whatsapp-meta` (or any name you prefer)
     - **Branch**: `master` (or `main` if you renamed it)
     - **Root Directory**: Leave empty (or `/` if required)
     - **Build Command**: `npm install && npm run build`
     - **Publish Directory**: `dist`

3. **Configure Environment Variables** (IMPORTANT - Do this BEFORE deploying):
   - Scroll down to "Environment Variables" section
   - Click "Add Environment Variable" and add:
     - **Key**: `VITE_API_BASE_URL`
       **Value**: `https://graph.facebook.com/v18.0/YOUR_PHONE_NUMBER_ID/messages`
     - **Key**: `VITE_VERIFY_TOKEN`
       **Value**: `YOUR_BEARER_TOKEN_HERE`
   - ⚠️ **Important**: Add these BEFORE clicking "Create Static Site"

4. **Deploy**:
   - Click "Create Static Site"
   - Render will build and deploy your app
   - You'll get a URL like `https://whatsapp-meta.onrender.com`
   - The build process will take a few minutes

### Troubleshooting

If you encounter errors:
- **Build fails**: Check that all environment variables are set correctly
- **Environment variables not working**: Make sure they're prefixed with `VITE_` and added before deployment
- **404 errors**: Verify the Publish Directory is set to `dist`
- **API errors**: Double-check your `VITE_VERIFY_TOKEN` and `VITE_API_BASE_URL` values

**Note**: If you need to add/update environment variables after deployment, go to your service → Environment, add/update them, and click "Manual Deploy" → "Clear build cache & deploy".

## Notes

- Phone numbers are automatically formatted (country code + digits only)
- All template placeholders must be filled before sending
- Incoming messages require a webhook server to receive and process Meta's webhook events
- The `parseIncomingMessage` utility in `src/utils/webhook.js` can be used to parse webhook payloads

