export const mockPosts = [
  {
    id: 1,
    slug: 'future-of-3d-modeling',
    title: { rendered: 'The Future of 3D Modeling in Game Development' },
    excerpt: { rendered: 'Explore how next-gen tools are revolutionizing 3D asset creation pipelines for AAA game studios.' },
    content: { rendered: '<p>The world of 3D modeling has been transformed by AI-assisted tools and real-time rendering engines. In this post, we explore the cutting-edge workflows used by top game studios.</p><p>From procedural generation to neural radiance fields, the industry is evolving at a rapid pace. Artists are now able to create photorealistic assets in a fraction of the time.</p><p>Key trends include: AI-assisted texturing, procedural modeling, and real-time ray tracing. These technologies are enabling smaller teams to achieve AAA quality results.</p>' },
    date: '2024-01-15T10:00:00',
    categories: [1],
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800' }],
      author: [{ name: 'Alex Chen' }],
    },
  },
  {
    id: 2,
    slug: 'vr-ar-design-principles',
    title: { rendered: 'VR/AR Design Principles for Immersive Experiences' },
    excerpt: { rendered: 'Learn the core design principles that make virtual and augmented reality experiences truly immersive.' },
    content: { rendered: '<p>Designing for VR and AR requires a fundamentally different approach than traditional UI/UX. The three-dimensional space demands new ways of thinking about user interaction.</p><p>Key considerations include comfort zones, spatial audio, and intuitive hand interactions. We break down the principles used in our award-winning VR projects.</p>' },
    date: '2024-02-10T09:00:00',
    categories: [2],
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800' }],
      author: [{ name: 'Maya Rodriguez' }],
    },
  },
  {
    id: 3,
    slug: 'motion-capture-techniques',
    title: { rendered: 'Advanced Motion Capture Techniques for Animation' },
    excerpt: { rendered: 'A deep dive into the motion capture workflows we use to bring characters to life.' },
    content: { rendered: '<p>Motion capture technology has democratized high-quality animation. With accessible markerless mocap systems and AI-driven retargeting, small studios can now produce compelling character animations.</p><p>This article covers our full pipeline from capture to final delivery, including our custom cleanup scripts and rigging conventions.</p>' },
    date: '2024-03-05T14:00:00',
    categories: [1],
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800' }],
      author: [{ name: 'Jordan Kim' }],
    },
  },
  {
    id: 4,
    slug: 'real-time-rendering-2024',
    title: { rendered: 'Real-Time Rendering Trends in 2024' },
    excerpt: { rendered: 'Lumen, Nanite, path tracing — how real-time rendering is blurring the line between game and film.' },
    content: { rendered: '<p>Real-time rendering capabilities have reached a tipping point. With Unreal Engine 5 features like Lumen global illumination and Nanite virtualized geometry, the quality gap between pre-rendered and real-time is virtually closed.</p><p>We discuss practical applications for architectural visualization, product rendering, and interactive media.</p>' },
    date: '2024-04-20T11:00:00',
    categories: [2],
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800' }],
      author: [{ name: 'Sam Patel' }],
    },
  },
  {
    id: 5,
    slug: 'procedural-world-building',
    title: { rendered: 'Procedural World Building at Scale' },
    excerpt: { rendered: 'How we generate vast open worlds using procedural techniques and smart content pipelines.' },
    content: { rendered: '<p>Building open world games requires an entirely different approach to content creation. Manual placement of every asset simply does not scale. Enter procedural generation.</p><p>We share our techniques for creating believable terrains, populating them with vegetation, and adding gameplay-relevant structures automatically.</p>' },
    date: '2024-05-12T10:30:00',
    categories: [1],
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800' }],
      author: [{ name: 'Alex Chen' }],
    },
  },
  {
    id: 6,
    slug: 'ui-ux-games-2024',
    title: { rendered: 'UI/UX Design for Modern Games' },
    excerpt: { rendered: 'Designing intuitive interfaces that disappear when playing and shine when needed.' },
    content: { rendered: '<p>Game UI design is a delicate balance between information density and visual clarity. Modern games demand interfaces that feel native to their worlds while remaining functional and accessible.</p><p>We explore design patterns from top-tier games and how we apply those lessons to our client projects.</p>' },
    date: '2024-06-01T09:00:00',
    categories: [2],
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800' }],
      author: [{ name: 'Maya Rodriguez' }],
    },
  },
]

export const mockPortfolio = [
  {
    id: 1,
    title: { rendered: 'Neon City Chronicles' },
    excerpt: { rendered: 'A cyberpunk open-world game featuring procedurally-generated cityscapes and dynamic lighting.' },
    slug: 'neon-city-chronicles',
    meta: { category: 'Game Development', year: '2024' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=800' }],
    },
  },
  {
    id: 2,
    title: { rendered: 'Orbital Architecture' },
    excerpt: { rendered: 'Architectural visualization of a proposed space habitat using Unreal Engine 5.' },
    slug: 'orbital-architecture',
    meta: { category: '3D Visualization', year: '2024' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800' }],
    },
  },
  {
    id: 3,
    title: { rendered: 'Morphic Realms VR' },
    excerpt: { rendered: 'An immersive VR experience that transforms abstract art into explorable 3D environments.' },
    slug: 'morphic-realms-vr',
    meta: { category: 'VR Experience', year: '2023' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800' }],
    },
  },
  {
    id: 4,
    title: { rendered: 'Dragon\'s Ascent' },
    excerpt: { rendered: 'High-fidelity dragon character with 60+ animation states and full PBR materials.' },
    slug: 'dragons-ascent',
    meta: { category: 'Character Animation', year: '2023' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1547636780-e61f67d54d1b?w=800' }],
    },
  },
  {
    id: 5,
    title: { rendered: 'Quantum Shift Mobile' },
    excerpt: { rendered: 'Award-winning mobile puzzle game with 200+ levels and original soundtrack.' },
    slug: 'quantum-shift-mobile',
    meta: { category: 'Mobile Game', year: '2023' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800' }],
    },
  },
  {
    id: 6,
    title: { rendered: 'BioSync Branding' },
    excerpt: { rendered: 'Complete brand identity for a biotech startup including 3D logo animation and digital assets.' },
    slug: 'biosync-branding',
    meta: { category: 'Branding', year: '2024' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800' }],
    },
  },
]

export const mockProducts = [
  {
    id: 1,
    title: { rendered: 'Sci-Fi Weapon Pack Vol.1' },
    excerpt: { rendered: '15 high-quality sci-fi weapons with PBR textures, LODs, and optimized for game engines.' },
    slug: 'sci-fi-weapon-pack-1',
    meta: { price: '49', category: '3D Assets' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800' }],
    },
  },
  {
    id: 2,
    title: { rendered: 'Character Animation Bundle' },
    excerpt: { rendered: '200 game-ready character animations in BVH and FBX formats for humanoid rigs.' },
    slug: 'character-animation-bundle',
    meta: { price: '79', category: 'Animations' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1626379801357-537572b59c38?w=800' }],
    },
  },
  {
    id: 3,
    title: { rendered: 'Cyberpunk City Kit' },
    excerpt: { rendered: 'Modular city building kit with 80+ pieces, neon signs, and street props.' },
    slug: 'cyberpunk-city-kit',
    meta: { price: '129', category: '3D Assets' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=800' }],
    },
  },
  {
    id: 4,
    title: { rendered: 'Space Environment Pack' },
    excerpt: { rendered: 'Stunning space environments with planets, asteroids, nebulas, and space stations.' },
    slug: 'space-environment-pack',
    meta: { price: '89', category: 'Environments' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800' }],
    },
  },
  {
    id: 5,
    title: { rendered: 'VFX Particle Systems' },
    excerpt: { rendered: '50 pre-built particle systems for explosions, magic effects, and atmospheric phenomena.' },
    slug: 'vfx-particle-systems',
    meta: { price: '59', category: 'VFX' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800' }],
    },
  },
  {
    id: 6,
    title: { rendered: 'Fantasy Character Pack' },
    excerpt: { rendered: '6 fully rigged fantasy characters with textures and basic animation sets.' },
    slug: 'fantasy-character-pack',
    meta: { price: '149', category: 'Characters' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d3?w=800' }],
    },
  },
]

export const mockClients = [
  {
    name: 'NovaTech Studios',
    industry: 'Game Development',
    logo: '🎮',
    project: 'Open World RPG Engine',
    result: '40% faster asset pipeline',
    description: 'We overhauled NovaTech\'s entire 3D asset pipeline, reducing production time by 40% through procedural generation and automated LOD systems.',
    testimonial: 'Lizzdo transformed our production pipeline. We\'re shipping better assets in half the time.',
    author: 'James Chen, CTO',
  },
  {
    name: 'VisionAR Labs',
    industry: 'Augmented Reality',
    logo: '🔮',
    project: 'Enterprise AR Platform',
    result: '60% user engagement increase',
    description: 'Built an enterprise AR platform for industrial training simulations that reduced onboarding time by 60%.',
    testimonial: 'The AR experience they created is indistinguishable from reality. Our clients are amazed.',
    author: 'Sarah Mitchell, CEO',
  },
  {
    name: 'Stellar Dynamics',
    industry: 'Aerospace',
    logo: '🚀',
    project: 'Space Station Visualization',
    result: '$2M funding secured',
    description: 'Created photorealistic visualizations of a proposed space habitat that helped secure $2M in Series A funding.',
    testimonial: 'The visualizations were so compelling our investors felt like they were already on the station.',
    author: 'Dr. Marcus Rivera, Founder',
  },
  {
    name: 'Pulse Gaming',
    industry: 'Mobile Games',
    logo: '📱',
    project: 'Quantum Shift Mobile',
    result: '5M+ downloads',
    description: 'Designed and developed Quantum Shift, a puzzle game that reached 5 million downloads and featured in App Store Best of 2023.',
    testimonial: 'From concept to App Store feature in 8 months. Incredible execution.',
    author: 'Amy Park, Product Manager',
  },
  {
    name: 'BioSync Labs',
    industry: 'Biotechnology',
    logo: '🧬',
    project: 'Brand Identity & Motion',
    result: '3x brand recognition',
    description: 'Complete brand overhaul including animated 3D logo, digital brand guidelines, and marketing animations for a biotech startup.',
    testimonial: 'Our brand now looks like a Fortune 500 company. Investors noticed immediately.',
    author: 'Dr. Elena Vasquez, CMO',
  },
  {
    name: 'ImmerseTech',
    industry: 'VR Entertainment',
    logo: '🎭',
    project: 'VR Theme Park Experience',
    result: '95% satisfaction rate',
    description: 'Designed three VR theme park attractions that achieved a 95% customer satisfaction rating in their first year.',
    testimonial: 'Guests come back again and again. The experiences are truly unforgettable.',
    author: 'Robert Kim, Operations Director',
  },
]
