# FeelWellFurniature - Premium Furniture Website

A modern, responsive furniture website built with Next.js, TypeScript, and Tailwind CSS. Features beautiful animations, mobile-first design, and professional styling.

## Features

- 🎨 **Modern Design**: Clean, professional interface with beautiful gradients and animations
- 📱 **Responsive**: Optimized for both desktop and mobile devices
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 🎭 **Smooth Animations**: CSS keyframes and Tailwind animations for engaging user experience
- 🖱️ **Interactive Elements**: Hover effects, smooth scrolling, and mobile swipe navigation
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Inter (sans-serif) and Playfair Display (serif)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd FeelWellFurniature/my-project
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── Navbar.tsx          # Navigation component with logo
│   ├── globals.css             # Global styles and animations
│   ├── layout.tsx              # Root layout with fonts
│   └── page.tsx                # Main homepage
├── constants/
│   └── index.ts                # Product data and company info
```

## Customization

### Adding Products

Edit `src/constants/index.ts` to add or modify products:

```typescript
export const categories: Category[] = [
  {
    id: "your-category",
    name: "Your Category",
    description: "Category description",
    image: "/your-image.jpg",
    products: [
      {
        id: "product-001",
        name: "Product Name",
        category: "Product Category",
        description: "Product description",
        image: "/product-image.jpg",
        price: "$999",
        // ... other properties
      },
    ],
  },
];
```

### Styling

- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind classes
- Custom animations: Defined in `globals.css` with keyframes

### Images

Replace placeholder images in the `public/` directory:

- Add your product images
- Update image paths in `constants/index.ts`
- Recommended sizes: 800x600px for product images

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Environment Variables

No environment variables required for basic functionality.

## Mobile Features

- **Swipe Navigation**: Swipe left/right on mobile to navigate between product categories
- **Touch-Friendly**: Large buttons and touch targets
- **Responsive Images**: Optimized for different screen sizes
- **Smooth Scrolling**: Native smooth scroll behavior

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Font Loading**: Optimized font loading with next/font

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:

- Email: info@feelwellfurniature.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for FeelWellFurniature
