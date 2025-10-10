import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Chatbot knowledge base
const portfolioData = {
  name: 'Anirudh Nuti',
  role: 'Full-Stack Developer & AI/ML Enthusiast',
  skills: {
    languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
    frontend: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML/CSS'],
    backend: ['Node.js', 'Express', 'Django', 'FastAPI', 'REST APIs'],
    aiml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
    tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Linux'],
  },
  contact: {
    email: 'nvkanirudh124@gmail.com',
    location: 'Available for remote work',
  },
};

// Simple chatbot response logic
function generateResponse(message) {
  const lowerMessage = message.toLowerCase();

  // Greetings
  if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
    return "Hello! I'm here to help you learn more about Anirudh. You can ask me about his skills, experience, projects, or how to contact him.";
  }

  // Skills
  if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
    return `Anirudh has expertise in:\n\n• Programming Languages: ${portfolioData.skills.languages.join(', ')}\n• Frontend: ${portfolioData.skills.frontend.join(', ')}\n• Backend: ${portfolioData.skills.backend.join(', ')}\n• AI/ML: ${portfolioData.skills.aiml.join(', ')}\n• Databases: ${portfolioData.skills.databases.join(', ')}\n• Tools: ${portfolioData.skills.tools.join(', ')}`;
  }

  // Frontend
  if (lowerMessage.includes('frontend') || lowerMessage.includes('react') || lowerMessage.includes('ui')) {
    return `Anirudh is proficient in frontend development with: ${portfolioData.skills.frontend.join(', ')}. He builds modern, responsive, and user-friendly interfaces.`;
  }

  // Backend
  if (lowerMessage.includes('backend') || lowerMessage.includes('server') || lowerMessage.includes('api')) {
    return `For backend development, Anirudh works with: ${portfolioData.skills.backend.join(', ')}. He can build scalable REST APIs and server-side applications.`;
  }

  // AI/ML
  if (lowerMessage.includes('ai') || lowerMessage.includes('ml') || lowerMessage.includes('machine learning') || lowerMessage.includes('artificial intelligence')) {
    return `Anirudh has strong AI/ML skills including: ${portfolioData.skills.aiml.join(', ')}. He works on projects involving natural language processing, computer vision, and predictive modeling.`;
  }

  // Projects
  if (lowerMessage.includes('project')) {
    return "Anirudh has worked on various projects including:\n\n• Full-stack web applications\n• AI/ML models and implementations\n• E-commerce platforms\n• Data analysis tools\n\nScroll up on this page to see detailed project descriptions in the Projects section!";
  }

  // Experience
  if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
    return "Anirudh is a skilled full-stack developer with experience in building web applications, implementing AI/ML solutions, and working with modern development tools. Check the Experience section above for detailed information!";
  }

  // Contact
  if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('hire')) {
    return `You can contact Anirudh at: ${portfolioData.contact.email}\n\nFeel free to use the contact form on this page to send a message directly!`;
  }

  // Education
  if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('university') || lowerMessage.includes('degree')) {
    return "You can find details about Anirudh's educational background in the About section above. Scroll up to learn more!";
  }

  // Location/Availability
  if (lowerMessage.includes('location') || lowerMessage.includes('where') || lowerMessage.includes('available')) {
    return `${portfolioData.contact.location}. Anirudh is open to remote opportunities and collaborations!`;
  }

  // Default response
  return "I can help you learn about Anirudh's skills, experience, projects, and how to contact him. What would you like to know?";
}

// Chatbot endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const response = generateResponse(message);
  res.status(200).json({ response });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'nvkanirudh124@gmail.com',
    subject: `Portfolio Contact: Message from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
