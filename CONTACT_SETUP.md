# Contact Form Backend Setup

## Prerequisites
- Gmail account for sending emails
- App-specific password from Google

## Setup Instructions

### 1. Enable Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to "App passwords" (search for it in the security settings)
5. Generate a new app password for "Mail"
6. Copy the 16-character password

### 2. Configure Environment Variables

1. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```
   EMAIL_USER=nvkanirudh124@gmail.com
   EMAIL_PASS=your-16-character-app-password
   PORT=3001
   ```

### 3. Running the Application

You need to run TWO terminals:

**Terminal 1 - Frontend (Vite)**
```bash
npm run dev
```
This runs on http://localhost:5173

**Terminal 2 - Backend (Express)**
```bash
npm run server
```
This runs on http://localhost:3001

### 4. Testing

1. Open http://localhost:5173 in your browser
2. Navigate to the "Get In Touch" section
3. Fill out the contact form
4. Submit the form
5. Check nvkanirudh124@gmail.com for the email

## Production Deployment (Vercel)

✅ Everything is configured for Vercel deployment!

### Vercel Setup Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add contact form backend"
   git push
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Vercel will auto-detect the Vite configuration

3. **Add Environment Variables in Vercel Dashboard**
   - Go to Project Settings → Environment Variables
   - Add these variables:
     ```
     EMAIL_USER = nvkanirudh124@gmail.com
     EMAIL_PASS = uexinztmhsbfcetr
     ```
   - Make sure to add them for Production, Preview, and Development

4. **Redeploy**
   - After adding environment variables, trigger a redeploy
   - Your contact form will now work on the live site!

### How it works:

- **Development**: Uses Express server on `localhost:3001`
- **Production**: Uses Vercel serverless function at `/api/contact`
- The frontend automatically detects which environment it's in and uses the correct endpoint

## Troubleshooting

- **"Failed to send message"**: Check if the backend server is running on port 3001
- **"Authentication failed"**: Verify your app password is correct in .env
- **CORS errors**: Make sure both frontend and backend are running
