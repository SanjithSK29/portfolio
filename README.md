# Sanjith Suresh Kumar - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, gradient-based design with purple/pink theme
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js and Turbopack
- 🎯 Prominent blog button linking to your blog
- 📝 Placeholder sections for easy customization
- 🔗 Smooth scrolling navigation
- 🌟 Hover effects and animations

## Sections Included

- **Hero Section**: Your name, title, and main call-to-action buttons
- **About**: Personal information and education details
- **Skills**: Technology stack and skills
- **Projects**: Showcase your work (placeholder content)
- **Contact**: Get in touch section
- **Blog**: Dedicated blog page with sample posts

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### 1. Personal Information

Edit `src/app/page.tsx` to update:
- Your name and title
- Education details
- Skills and technologies
- Project descriptions
- Contact information

### 2. Blog Integration

The blog button currently links to `/blog`. To connect to your actual blog:

1. **Option A**: Replace the blog content in `src/app/blog/page.tsx` with your own posts
2. **Option B**: Update the blog button links to point to your external blog URL

### 3. Styling

The website uses Tailwind CSS with a purple/pink gradient theme. You can customize:
- Colors: Update the gradient classes (e.g., `from-purple-500 to-pink-500`)
- Typography: Modify font sizes and weights
- Layout: Adjust spacing and grid layouts

### 4. Adding Content

#### Projects Section
Replace the placeholder projects in the Projects section with your actual work:
```jsx
<div className="bg-white/10 p-6 rounded-lg">
  <h3 className="text-xl font-semibold text-white mb-2">Your Project Name</h3>
  <p className="text-gray-300 mb-4">Your project description</p>
  <div className="flex gap-2">
    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">Technology</span>
  </div>
</div>
```

#### Skills Section
Update the skills array with your actual skills:
```jsx
{[
  'Your Skill 1', 'Your Skill 2', 'Your Skill 3',
  // Add more skills...
].map((skill) => (
  // ... existing code
))}
```

### 5. Contact Information

Update the email link in the Contact section:
```jsx
href="mailto:your.actual.email@example.com"
```

### 6. Social Links

Add your social media links in the Contact section or create a new Social section.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## File Structure

```
src/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── blog/
│   │   └── page.tsx      # Blog page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Turbopack**: Fast development builds

## Customization Tips

1. **Images**: Add your profile picture by replacing the placeholder "SS" initials
2. **Colors**: The purple/pink theme can be easily changed by updating gradient classes
3. **Content**: All text content is easily editable in the component files
4. **Blog**: The blog page is ready for your content or can link to an external blog

## Support

If you need help customizing your portfolio, you can:
- Modify the code directly in the component files
- Add new sections by following the existing pattern
- Update styling using Tailwind CSS classes

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀**
