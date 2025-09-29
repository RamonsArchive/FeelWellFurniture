# FeelWellFurniture - Premium Furniture E-commerce Website

A modern, responsive furniture e-commerce website built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases premium furniture products with an elegant design and comprehensive SEO optimization.

## 🏠 Project Overview

FeelWellFurniture is a premium furniture store website that offers a curated collection of high-quality furniture pieces. The website features a modern, responsive design with smooth animations, comprehensive product displays, and optimized SEO for better search engine visibility.

### Key Features

- **Modern Design**: Clean, elegant interface with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Product Showcase**: Interactive product display with detailed information
- **SEO Optimized**: Comprehensive SEO with structured data, meta tags, and sitemaps
- **Performance**: Fast loading times with optimized images and code
- **Accessibility**: Built with accessibility best practices
- **PWA Ready**: Progressive Web App capabilities with manifest file

## 🛠️ Technology Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management and side effects
- **Custom CSS** - Additional styling and animations

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Next.js Config** - Framework configuration
- **TypeScript Config** - TypeScript configuration

### SEO & Performance

- **Next.js Metadata API** - Dynamic meta tags
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Twitter sharing optimization
- **Structured Data** - Schema.org markup for search engines
- **Sitemap** - XML sitemap for search engines
- **Robots.txt** - Search engine crawling instructions
- **Web App Manifest** - PWA capabilities

## 📁 Project Structure

```
my-project/
├── public/                          # Static assets
│   ├── DataFile/                    # Product data files
│   │   └── Атлас продукции Kinkelay.pdf
│   ├── ProductImages/               # Product images
│   │   ├── prod1.png
│   │   ├── prod2.png
│   │   └── ... (prod10.png)
│   ├── logo.svg                     # Main logo (SVG)
│   ├── favicon.svg                  # Favicon (SVG)
│   ├── favicon.ico                  # Favicon (ICO)
│   ├── site.webmanifest            # PWA manifest
│   ├── browserconfig.xml           # Microsoft browser config
│   ├── robots.txt                  # Search engine instructions
│   ├── sitemap.xml                 # XML sitemap
│   └── favicon-generator.html      # Favicon generation tool
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── components/             # React components
│   │   │   ├── Navbar.tsx          # Navigation component
│   │   │   ├── ProductDisplay.tsx  # Product showcase
│   │   │   └── ProductNavigation.tsx # Product navigation
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout with SEO
│   │   └── page.tsx                # Home page
│   └── constants/                  # Data constants
│       └── index.ts                # Product data and company info
├── eslint.config.mjs               # ESLint configuration
├── next.config.ts                  # Next.js configuration
├── package.json                    # Dependencies and scripts
├── postcss.config.mjs              # PostCSS configuration
├── tsconfig.json                   # TypeScript configuration
├── vercel.json                     # Vercel deployment config
└── README.md                       # This file
```

## 🎨 Design System

### Color Palette

- **Primary**: Amber (#f59e0b) to Orange (#f97316) gradient
- **Secondary**: Warm grays and whites
- **Accent**: Various shades of amber and orange

### Typography

- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Components

- **Navbar**: Fixed navigation with smooth scrolling
- **Hero Section**: Full-screen landing with call-to-action buttons
- **Product Display**: Interactive product showcase
- **Features Section**: Highlighted company benefits
- **Testimonials**: Customer reviews and ratings
- **Contact Section**: Contact information and forms
- **Footer**: Company information and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔍 SEO Features

### Meta Tags

- Dynamic title and description
- Open Graph tags for social sharing
- Twitter Card optimization
- Viewport and mobile optimization
- Theme color and app configuration

### Structured Data

- Schema.org markup for furniture store
- Product information
- Company details
- Contact information
- Social media links

### Performance

- Image optimization
- Code splitting
- Lazy loading
- Fast loading times
- Core Web Vitals optimization

## 🎯 Product Data

The website includes comprehensive product data including:

- **Beds**: Luxury leather beds with premium materials
- **Sofas**: Modern sofas with eco-leather and fabric options
- **Chairs**: Premium chairs with ergonomic design
- **Product Details**: Dimensions, materials, colors, features
- **Pricing**: Competitive pricing information
- **Specifications**: Technical details and specifications

## 🛡️ Security & Performance

### Security

- TypeScript for type safety
- ESLint for code quality
- Secure headers configuration
- Input validation

### Performance

- Next.js optimization
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies

## 📊 Analytics & Monitoring

### SEO Tools

- Google Search Console ready
- Sitemap submission
- Robots.txt configuration
- Meta tag optimization

### Performance Monitoring

- Core Web Vitals
- Lighthouse scores
- Page speed optimization
- Mobile performance

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting provider

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=https://feelwellfurniture.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Customization

- Update company information in `src/constants/index.ts`
- Modify colors in `src/app/globals.css`
- Add new products to the constants file
- Update SEO metadata in `src/app/layout.tsx`

## 📈 Future Enhancements

### Planned Features

- [ ] E-commerce functionality
- [ ] Shopping cart
- [ ] User authentication
- [ ] Product search and filtering
- [ ] Customer reviews system
- [ ] Blog section
- [ ] Multi-language support
- [ ] Advanced analytics

### Technical Improvements

- [ ] Database integration
- [ ] Payment processing
- [ ] Inventory management
- [ ] Order tracking
- [ ] Email notifications
- [ ] Advanced SEO features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- Email: info@feelwellfurniture.com
- Phone: +1 (555) 123-4567
- Address: 123 Furniture Street, Design City, DC 12345

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Google Fonts for the beautiful typography
- All contributors and supporters

---

**FeelWellFurniture** - Where Comfort Meets Style 🪑✨
