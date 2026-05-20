# Lizzdo - Premium 3D Portfolio & Store Theme

A futuristic, high-performance WordPress theme built with React, Three.js, and Tailwind CSS. Perfect for 3D studios, game developers, digital agencies, and premium e-commerce.

## Features

✨ **Modern Stack**
- React 19 with TypeScript
- Three.js for 3D visualizations
- Tailwind CSS 4 with custom design tokens
- Vite for blazing-fast builds

🎨 **Design**
- Cyberpunk/Futuristic aesthetic
- Fully responsive (mobile-first)
- Glassmorphism UI components
- Animated gradients and holographic text effects
- Custom grid and scanline effects

📱 **Pages**
- Home (Hero + Services + Portfolio Preview)
- Services (Full service listings)
- Portfolio (Project showcase)
- Store (Product catalog with filtering)
- Blog (Dynamic WordPress integration)
- About (Team showcase)
- Clients (Case studies)
- Contact (Contact form)

🔌 **WordPress Integration**
- Custom Post Types (Portfolio, Products)
- REST API integration
- Dynamic content loading from WordPress
- Theme customizer support
- Logo and site identity customization

⚡ **Performance**
- Optimized bundle sizes
- Lazy loading images
- Code splitting with React Router
- Service worker ready
- CDN-friendly asset structure

## Installation

### 1. Build the Project
```bash
npm install
npm run build
```

### 2. Create Theme Folder
```bash
mkdir -p lizzdo-theme
cp style.css functions.php index.php lizzdo-theme/
cp -r dist lizzdo-theme/
```

### 3. Create ZIP File
```bash
zip -r lizzdo-theme.zip lizzdo-theme/
```

### 4. Upload to WordPress
1. Go to **WordPress Admin** → **Appearance** → **Themes** → **Add New**
2. Click **Upload Theme**
3. Select `lizzdo-theme.zip`
4. Click **Install Now**
5. Click **Activate**

## Configuration

### Environment Variables
Create a `.env.local` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### WordPress Setup
1. Ensure permalinks are set to "Post name" (not "Plain")
2. Configure custom logo: **Appearance** → **Customize** → **Site Identity**
3. Create portfolio and product posts using the custom post types

### CORS Configuration (Local Development)
If developing locally, install a CORS plugin:
- **Headers and Access Control** (WP Plugin)
- Or use this header configuration in your `.htaccess`:

```apache
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
</IfModule>
```

## Development

### Local Server
```bash
npm run dev
```
Runs on `http://localhost:3000`

### Production Build
```bash
npm run build
```
Generates optimized files in the `dist/` folder

### Type Checking
```bash
npm run lint
```

## File Structure

```
lizzdo-theme/
├── src/
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── data/           # Data & mocks
│   ├── services/       # WordPress API service
│   ├── lib/            # Utilities
│   ├── App.tsx         # Main app
│   ├── index.css       # Global styles
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── dist/               # Built files (generated)
├── functions.php       # WordPress functions
├── index.php          # WordPress template
├── style.css          # Theme header
├── tsconfig.json      # TypeScript config
├── vite.config.ts     # Vite config
└── package.json       # Dependencies
```

## WordPress REST API

The theme fetches content via WordPress REST API:

- **Posts**: `/wp-json/wp/v2/posts`
- **Portfolio**: `/wp-json/wp/v2/portfolio`
- **Products**: `/wp-json/wp/v2/product`
- **Categories**: `/wp-json/wp/v2/categories`

All endpoints include `_embed` for featured images and author data.

## Content Management

### Blog Posts
1. Create standard posts in WordPress
2. Set featured image (used as thumbnail)
3. Add content as usual
4. Theme automatically displays via REST API

### Portfolio
1. Go to **Portfolio** post type in sidebar
2. Add new projects
3. Use excerpt for descriptions
4. Set featured image
5. Publish

### Store/Products
1. Go to **Products** post type
2. Create product listings
3. Use custom fields for price/details
4. Set featured images

### Custom Logo
1. **Appearance** → **Customize**
2. **Site Identity** → Upload logo
3. Theme automatically loads it

## Customization

### Colors
Edit `src/index.css` to change the color palette:

```css
@theme {
  --color-neon-cyan: #00f5ff;
  --color-neon-purple: #a855f7;
  --color-neon-pink: #ff006e;
  --color-neon-green: #00ff88;
  --color-neon-orange: #ff9500;
  --color-neon-blue: #0ea5e9;
}
```

### Fonts
Fonts are loaded from Google Fonts. Edit `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=...');
```

### Components
All React components are in `src/components/` and `src/pages/`.
Modify as needed for your brand.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Use WebP format with JPEG fallback
2. **Lazy Load**: Images are lazy-loaded by default
3. **Caching**: Browser caching enabled by default
4. **CDN**: Serve static assets from a CDN for best performance
5. **Database**: Keep WordPress database optimized with a caching plugin

## Troubleshooting

### Blank White Screen
- Check browser console for errors
- Ensure `/dist/` folder exists and has built files
- Verify WordPress REST API is accessible
- Check that plugin/post types are registered

### 404 Errors on Pages
- Set permalinks to "Post name" format
- Clear WordPress cache
- Ensure base slug matches React routes

### Missing Images
- Check featured images are set in WordPress
- Verify image URLs are CORS-enabled
- Use an image optimization plugin

### CORS Errors
- Install CORS plugin on WordPress
- Or add CORS headers to server config
- For local dev: use browser CORS extension (development only)

## Support & Updates

For questions, issues, or feature requests, visit:
- **Website**: https://lizzdo.com
- **Email**: hello@lizzdo.com
- **GitHub**: https://github.com/im0d00/theme

## License

GNU General Public License v2 or later. See LICENSE file for details.

---

**Built by Lizzdo Studio** • Crafting Digital Reality 🚀
