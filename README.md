# Portfolio Website

A modern, minimalistic portfolio website built with React, Vite, and Tailwind CSS. Features a dark theme with cyan accents, smooth animations, and a fully functional contact form.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Dark theme with cyan accent colors and clean typography
- **Smooth Animations**: Scroll-triggered fade-in animations and interactive elements
- **Project Modals**: Detailed project information with expandable modals
- **Collapsible Experience**: Clean timeline layout with expandable work experience cards
- **Contact Form**: Functional email contact form with backend integration
- **Halloween Theme**: Seasonal interactive elements (ghosts and snowflakes)

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS, Custom CSS animations
- **Icons**: Lucide React
- **Backend**: Node.js, Express, Nodemailer (for contact form)
- **Deployment**: Vercel (with serverless functions)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   PORT=3001
   ```

   See [CONTACT_SETUP.md](./CONTACT_SETUP.md) for detailed email configuration.

## 🚀 Development

Run the development server:

```bash
npm run dev
```

For the contact form to work in development, also run the backend server in a separate terminal:

```bash
npm run server
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## 📝 Available Scripts

- `npm run dev` - Start Vite development server
- `npm run server` - Start Express backend server (for local development)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Import your repository on [Vercel](https://vercel.com)
   - Vercel will auto-detect Vite configuration

3. **Add Environment Variables**

   In Vercel Project Settings → Environment Variables, add:
   - `EMAIL_USER` = your-email@gmail.com
   - `EMAIL_PASS` = your-gmail-app-password

4. **Redeploy** after adding environment variables

The contact form will automatically work in production using Vercel serverless functions.

## 📂 Project Structure

```
portfolio/
├── api/                    # Vercel serverless functions
│   └── contact.js         # Contact form API endpoint
├── public/                # Static assets
│   └── favicon.svg        # Custom favicon
├── server/                # Express backend (local development)
│   └── index.js
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── HalloweenElements.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Snowflakes.jsx
│   │   └── icons/
│   │       └── SubstackIcon.jsx
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles and animations
│   └── main.jsx           # Entry point
├── .env                   # Environment variables (not in git)
├── .env.example           # Example environment variables
├── CONTACT_SETUP.md       # Contact form setup guide
├── package.json
├── tailwind.config.js     # Tailwind configuration
├── vercel.json            # Vercel deployment config
└── vite.config.js         # Vite configuration
```

## ✨ Key Sections

### Hero
- Name with code icon (`<>`)
- Role and tagline
- Social links (GitHub, LinkedIn, Substack)

### About
- Professional summary
- Current projects (Nidhi AI)
- Areas of expertise tags

### Experience
- Collapsible timeline layout
- Click to expand/collapse work experience
- Nidhi AI, DEtermined, and previous roles

### Projects
- Featured projects with modals
- LinkedIn Post Generator (MCP server)
- Real-Time E-Commerce Analytics Pipeline
- DEtermined Data Engineering Platform
- Architecture diagrams, features, and tech stack

### Skills
- Categorized skill tags
- Languages & Databases
- Data Engineering
- Cloud & BI Tools
- Machine Learning & AI

### Contact
- Functional contact form
- Real-time email delivery
- Success/error messages
- Loading states

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the accent color:
```javascript
colors: {
  accent: '#06b6d4', // Cyan
}
```

### Content
Update content in component files:
- Personal info: `src/components/Hero.jsx`
- About section: `src/components/About.jsx`
- Experience: `src/components/Experience.jsx`
- Projects: `src/components/Projects.jsx`
- Skills: `src/components/Skills.jsx`

### Theme Elements
- Halloween elements: `src/components/HalloweenElements.jsx`
- Snowflakes: `src/components/Snowflakes.jsx`
- Remove imports from `App.jsx` if not needed

## 📧 Contact Form Setup

The contact form uses Gmail SMTP to send emails. See [CONTACT_SETUP.md](./CONTACT_SETUP.md) for:
- Gmail app password setup
- Environment configuration
- Local development setup
- Production deployment

## 🐛 Troubleshooting

**Contact form not working?**
- Check if backend server is running (`npm run server`)
- Verify `.env` file exists with correct credentials
- Check browser console for errors

**Animations not working?**
- Clear browser cache
- Check if JavaScript is enabled

**Build errors?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Make sure you're using Node.js 16+

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Anirudh Nuti**
- LinkedIn: [nvkanirudh](https://linkedin.com/in/nvkanirudh)
- GitHub: [NvkAnirudh](https://github.com/NvkAnirudh)
- Substack: [@anirudhnuti](https://substack.com/@anirudhnuti)
- Website: [determinedeng.com](https://determinedeng.com)

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)
