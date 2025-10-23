# MQL Experts - B2B Lead Generation Platform

## Overview

MQL Experts is a B2B lead generation and data intelligence platform designed to help marketing and sales teams prospect smarter, connect faster, and close bigger deals. The application provides verified contact data, sales intelligence, customer profiling, and database management tools targeted at IT and SaaS companies.

The platform features a modern, trust-building design inspired by leading B2B SaaS companies (ZoomInfo, Apollo.io, Lusha) with a marketing-focused landing page that drives demo conversions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing
- Single-page application (SPA) architecture with component-based design

**UI Component System**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component library (New York style variant) for pre-built UI components
- Tailwind CSS for utility-first styling with custom design tokens
- CSS variables for theme customization with HSL color system

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management and caching
- React Hook Form with Zod resolver for form validation
- Custom query client with configured retry logic and stale time settings

**Design System**
- Modern B2B SaaS aesthetic with blue (#0061FF) and violet (#6C63FF) brand colors
- Inter/Poppins typography loaded via Google Fonts CDN
- Component-based sections: Hero, Solutions, Case Studies, Testimonials, CTA Banner, Footer
- Responsive grid layouts with Tailwind breakpoints (mobile-first approach)

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Node.js runtime with ESM module format
- TypeScript for type safety across the entire stack

**API Design**
- RESTful API endpoints under `/api` prefix
- JSON request/response format
- Zod schema validation for request bodies
- Centralized error handling with structured error responses

**Core API Endpoints**
- `POST /api/demo-requests` - Submit demo request forms
- `GET /api/demo-requests` - Retrieve demo requests
- `POST /api/newsletter` - Newsletter subscription with duplicate detection
- `GET /api/newsletter` - Retrieve newsletter signups

**Storage Layer**
- Storage interface abstraction (`IStorage`) for flexible data persistence
- In-memory storage implementation (`MemStorage`) for development/testing
- Database-ready with Drizzle ORM configuration for PostgreSQL migration path
- UUID generation for primary keys

### Data Storage Solutions

**Current Implementation**
- In-memory storage with Map-based collections for demo requests and newsletter signups
- Stateless server architecture suitable for containerized deployments

**Database Schema (Drizzle ORM)**
- PostgreSQL dialect configured via `@neondatabase/serverless` driver
- Two main tables defined in shared schema:
  - `demo_requests`: Stores customer demo inquiries (name, email, company, phone, message)
  - `newsletter_signups`: Tracks newsletter subscriptions with unique email constraint
- Timestamp tracking for all records (`created_at`)
- UUID primary keys with database-generated defaults

**Migration Strategy**
- Drizzle Kit configured for schema migrations in `./migrations` directory
- Environment-based database URL configuration
- Push-based deployment via `db:push` script

### Form Validation & Type Safety

**Schema Definition**
- Shared TypeScript types between frontend and backend via `shared/schema.ts`
- Drizzle Zod integration for automatic schema-to-validation conversion
- Custom validation rules (email format, minimum length requirements)

**Type Inference**
- Insert types derived from schemas (omitting auto-generated fields)
- Select types for database reads
- End-to-end type safety from database to UI

### Development & Build Pipeline

**Development Mode**
- Vite middleware integration with Express for unified dev server
- Hot module replacement for React components
- Source maps for debugging TypeScript
- Custom logging middleware for API request tracking

**Production Build**
- Vite builds frontend to `dist/public`
- esbuild bundles server code to `dist/index.js`
- Separate build outputs for client and server
- Environment-based configuration (NODE_ENV)

**Code Quality**
- TypeScript strict mode enabled
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- Incremental compilation with build cache

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Complete suite of accessible React primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- **shadcn/ui**: Pre-configured component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **cmdk**: Command palette component for keyboard-driven navigation
- **embla-carousel-react**: Carousel/slider functionality
- **vaul**: Drawer component library

### Form & Validation
- **react-hook-form**: Performant form state management
- **@hookform/resolvers**: Resolver integration for Zod validation
- **zod**: Runtime type validation and schema definition
- **zod-validation-error**: User-friendly validation error messages

### Data & API
- **@tanstack/react-query**: Server state management, caching, and synchronization
- **drizzle-orm**: TypeScript ORM for PostgreSQL
- **drizzle-zod**: Bridge between Drizzle schemas and Zod validation
- **drizzle-kit**: Schema migration and management CLI

### Database Driver
- **@neondatabase/serverless**: PostgreSQL driver optimized for serverless/edge environments
- **connect-pg-simple**: PostgreSQL session store (configured but session management not currently implemented)

### Styling & Utilities
- **tailwindcss**: Utility-first CSS framework
- **postcss & autoprefixer**: CSS processing pipeline
- **class-variance-authority**: Type-safe variant styling
- **clsx & tailwind-merge**: Conditional className utilities
- **date-fns**: Date manipulation and formatting

### Development Tools
- **Replit Plugins**: 
  - Runtime error modal overlay
  - Cartographer for code navigation
  - Dev banner for development environment indication
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

### Fonts & Assets
- **Google Fonts**: Inter and Poppins font families loaded via CDN
- **Generated Images**: Placeholder images stored in `attached_assets/generated_images/` for hero backgrounds, testimonials, case studies, and company logos

### Browser APIs
- Intersection Observer for scroll-triggered animations
- Fetch API for HTTP requests
- Local font loading with preconnect hints for performance