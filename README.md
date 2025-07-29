# Shahjalal Shanto - Personal Academic Website

A professional academic website showcasing software engineering projects, research, and computational chemistry tools. Built with modern web technologies for optimal performance and user experience.

## 🚀 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Development**: Turbopack for fast development
- **Code Quality**: ESLint + Prettier
- **Deployment**: Vercel (planned)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and posts
│   ├── contact/           # Contact form and information
│   ├── projects/          # Project showcase
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── ui/               # UI components
│   └── common/           # Common components
├── lib/                  # Utilities and configurations
├── types/                # TypeScript type definitions
└── hooks/                # Custom React hooks
```

## 🛠️ Development

### Prerequisites

- Node.js (LTS version)
- npm or yarn

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 📄 Pages

- **Home** (`/`) - Landing page with introduction and featured content
- **About** (`/about`) - Professional background and skills
- **Projects** (`/projects`) - Showcase of software projects
- **Blog** (`/blog`) - Technical articles and insights
- **Contact** (`/contact`) - Contact form and information

## 🎨 Features

- **Responsive Design** - Optimized for all device sizes
- **TypeScript** - Type-safe development
- **Modern Styling** - Tailwind CSS for utility-first styling
- **SEO Optimized** - Built-in Next.js SEO features
- **Performance** - Optimized for Core Web Vitals
- **Accessibility** - WCAG compliance considerations

## 🚀 Deployment

This project is designed to be deployed on [Vercel](https://vercel.com/):

1. **Connect your repository** to Vercel
2. **Configure environment variables** (if needed)
3. **Deploy** - Automatic deployments on push to main branch

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📧 Contact

For questions or collaboration opportunities, please reach out through the contact form on the website or directly via email.

## 📄 License

This project is for personal/academic use. Please respect the intellectual property and ask permission before reusing significant portions of the code or content.
