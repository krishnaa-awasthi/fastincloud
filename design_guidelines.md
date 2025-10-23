# MQL Experts Design Guidelines

## Design Approach
**Reference-Based Approach**: Draw inspiration from modern B2B SaaS leaders (ZoomInfo, Apollo.io, Lusha) with a 2025-forward aesthetic. Focus on trust-building, data-driven visuals, and conversion optimization.

## Color System

**Base Colors (HSL format)**:
- Background Primary: 0 0% 100% (White)
- Background Secondary: 220 13% 97% (Light gray)
- Text Primary: 220 25% 10% (Near black)
- Text Secondary: 220 10% 45% (Medium gray)

**Brand Colors**:
- Primary Blue: 217 100% 50% (#0061FF)
- Primary Violet: 243 91% 69% (#6C63FF)
- Gradient: Linear from Primary Blue → Primary Violet

**Accent Colors**:
- Success: 142 71% 45% (For data visualizations)
- Trust Badge: 217 100% 95% (Light blue backgrounds)

All interactive elements use Primary Blue with 10% opacity hover states. Cards use subtle box-shadows with blue tints.

## Typography

**Font Family**: Inter (primary) or Poppins (fallback) - loaded via Google Fonts CDN

**Type Scale**:
- Hero Headline: 3.5rem / 700 weight / -0.02em tracking
- Section Headings: 2.5rem / 700 weight
- Card Titles: 1.5rem / 600 weight
- Body Text: 1rem / 400 weight / 1.6 line-height
- Small Text: 0.875rem / 400 weight

**Treatment**: Bold geometric headlines, generous line-height for readability, tight tracking on large text for modern feel.

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm.

**Section Padding**: py-20 (desktop), py-12 (mobile)

**Container Widths**: 
- Max-width: 1440px with mx-auto
- Content sections: max-w-7xl
- Text content: max-w-4xl

**Grid System**: 12-column grid, Solutions cards use grid-cols-1 md:grid-cols-2 lg:grid-cols-4

## Component Specifications

### Navbar (Sticky)
- Height: 80px, backdrop-blur with white/95% opacity
- Logo: Left-aligned, 40px height
- Navigation: Center, horizontal links with gradient underlines on active state
- CTA: Right-aligned "Book a Demo" button, Primary Blue background

### Hero Section
- Height: min-h-[600px], centered content
- Background: Abstract data-network pattern (dots/lines/nodes visualization in light blue/violet)
- Headline: Hero size, Primary Blue color
- Dual CTAs: Primary button (gradient background) + Outline button (transparent with blur backdrop)
- Spacing: mb-6 between headline/subtext, mb-8 before buttons

### Trusted By Section
- Row layout with 5-6 client logos
- Logo treatment: Grayscale filter with opacity-60, hover to opacity-100 and color
- Background: Light gray (Background Secondary)

### Solutions Section (4 Cards)
- Card design: White background, rounded-xl, p-8, shadow-lg
- Icon: 64px circular container with gradient background
- Hover effect: transform scale-105, shadow-xl, slight blue glow
- Layout: 4-column grid on desktop, 2 on tablet, 1 on mobile

### Why Choose Us Section
- Split layout: 50/50 on desktop (image left, content right)
- Left visual: 3D data visualization or abstract dashboard mockup
- Bullet points: Check icons (Primary Blue), text with mb-4 spacing
- Stack vertically on mobile

### Case Studies/Insights Section
- 3-4 cards in grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Card structure: Image (aspect-ratio-16/9), category tag (Primary Violet badge), title, excerpt
- Hover: Lift effect with shadow increase
- CTA button below: "View All Insights" outline style

### Testimonials Carousel
- 2-3 testimonials visible
- Card: Quote text, circular photo (80px), name, company, role
- Background: Subtle gradient (blue to violet, 10% opacity)
- Navigation: Dots below, auto-rotate every 5 seconds

### CTA Banner
- Full-width section with gradient background (Primary Blue → Primary Violet)
- Text: White color, centered, 2.5rem headline
- Button: White background with Primary Blue text
- Padding: py-16

### Footer (5-Column Grid)
- Columns: Company | Solutions | Resources | Contact | Newsletter
- Newsletter: Input field + Submit button inline
- Social icons: 40px circular, hover to Primary Blue
- Legal links: Small text, bottom row
- Background: Dark (220 25% 10%)

## Responsive Strategy

**Breakpoints**:
- Mobile: 375px (base)
- Tablet: 768px (md:)
- Desktop: 1440px (lg:)

**Mobile Adaptations**:
- Hamburger menu (top-right) with slide-in drawer
- Floating "Book a Demo" button (bottom-right, z-50)
- Stack all multi-column layouts to single column
- Reduce font sizes by 20-30%
- Hero height: min-h-[500px]

## Microinteractions & Animations

**Scroll Animations**: Fade-up on section entrance (using IntersectionObserver or react-intersection-observer)

**Hover States**:
- Buttons: Background darkens 10%, slight scale-105
- Cards: Lift with transform translateY(-4px) and shadow increase
- Links: Gradient underline animation (width 0 → 100%)

**Transitions**: All transitions use duration-300 ease-in-out

**Active States**: Navbar links show 3px gradient bottom border

## Images

**Hero Section**: 
- Large abstract data network visualization as background
- Style: Subtle, non-distracting, uses brand colors (blue/violet nodes and connections)
- Overlay: Dark gradient overlay (bottom) for text readability

**Why Choose Us Section**:
- Left side: 3D illustration or screenshot of data dashboard/analytics interface
- Style: Modern, tech-forward, showing data flows or intelligence graphs

**Case Studies Cards**:
- Each card: Header image showing data visualizations, charts, or abstract tech imagery
- Aspect ratio: 16:9
- Treatment: Slight overlay on hover

**Visual Tone**: Prefer vector illustrations, 3D renders, or interface mockups over stock photography. All visuals should reinforce data intelligence, connectivity, and technology themes.

## Quality Standards

- All interactive elements must have clear hover/focus states
- Maintain 4.5:1 contrast ratio minimum for accessibility
- Loading states for demo form submission
- Smooth page transitions
- Error states for form validation with Primary Blue accent
- Success states use gradient backgrounds

**Component Boundaries**: Each section is a self-contained React component with clear props interface for content management and easy CMS integration.