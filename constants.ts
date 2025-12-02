
import { ServiceCategory } from './types';

export const SERVICE_DATA: ServiceCategory[] = [
  {
    id: 'foundations',
    name: 'Website Foundations',
    description: 'The core architecture of your digital presence.',
    items: [
      { 
        id: 'portfolio', name: 'Portfolio Website', 
        tiers: [
          { name: 'Basic Portfolio', price: 600, description: 'Simple showcase, basic bio, contact form, clean layout for individuals.' },
          { name: 'Enhanced Portfolio', price: 1200, description: 'CMS integration, animations, project filtering, blog section, SEO optimized.' },
          { name: 'Enterprise Portfolio', price: 3000, description: 'High-end interactive experience, WebGL effects, headless CMS, global CDN.' }
        ]
      },
      { 
        id: 'corporate', name: 'Business Website', 
        tiers: [
          { name: 'Basic Corp Site', price: 1200, description: 'Standard 5-page site, contact info, services overview, responsive design.' },
          { name: 'Enhanced Corp Site', price: 2400, description: 'Advanced CMS, lead generation forms, team profiles, service details, SEO setup.' },
          { name: 'Enterprise Corp Site', price: 6000, description: 'Full global presence, multi-language, investor relations, complex animations, advanced security.' }
        ]
      },
      { 
        id: 'landing', name: 'Landing Page', 
        tiers: [
          { name: 'Basic Landing', price: 450, description: 'Single section, clear CTA, responsive design, fast load speed.' },
          { name: 'Enhanced Landing', price: 900, description: 'Multi-section conversion flow, testimonials, scroll animations, lead capture.' },
          { name: 'Enterprise Landing', price: 2250, description: 'A/B testing ready, dynamic content replacement, heatmap tracking integration.' }
        ]
      },
      { 
        id: 'ecommerce', name: 'E-commerce Store', 
        tiers: [
          { name: 'Basic Store', price: 2500, description: 'Standard Shopify/WooCommerce setup, product listing, basic cart & checkout.' },
          { name: 'Enhanced Store', price: 5000, description: 'Custom product filters, wishlist, user accounts, related products, email integration.' },
          { name: 'Enterprise Store', price: 12500, description: 'High volume architecture, headless commerce, ERP integration, multi-regional tax/shipping.' }
        ]
      },
      { 
        id: 'booking', name: 'Booking System', 
        tiers: [
          { name: 'Basic Booking', price: 1400, description: 'Simple calendar availability, manual confirmation, email notifications.' },
          { name: 'Enhanced Booking', price: 2800, description: 'Multi-staff scheduling, SMS reminders, automated payments, recurring appointments.' },
          { name: 'Enterprise Booking', price: 7000, description: 'Complex logic flow, resource management, waiting lists, API integration.' }
        ]
      },
      { 
        id: 'marketplace', name: 'Marketplace', 
        tiers: [
          { name: 'Basic Marketplace', price: 7500, description: 'MVP Multi-vendor support, basic vendor profiles, admin commission handling.' },
          { name: 'Enhanced Marketplace', price: 15000, description: 'Vendor dashboards, automated payouts, messaging system, dispute resolution.' },
          { name: 'Enterprise Marketplace', price: 37500, description: 'Global scale, advanced fraud detection, escrow payments, real-time analytics.' }
        ]
      },
      { 
        id: 'saas_core', name: 'SaaS Core / Web App', 
        tiers: [
          { name: 'MVP Web App', price: 3500, description: 'Core functional prototype, essential user flows, basic database schema.' },
          { name: 'Growth Web App', price: 7000, description: 'Scalable architecture, subscription management, user onboarding flows.' },
          { name: 'Enterprise SaaS', price: 17500, description: 'Microservices, high availability, advanced security compliance, audit logs.' }
        ]
      },
    ]
  },
  {
    id: 'platform',
    name: 'Platform Modules',
    description: 'Essential business logic modules and tools.',
    items: [
      { 
        id: 'admin_panel', name: 'Admin Panel', 
        tiers: [
          { name: 'Basic Admin', price: 1000, description: 'Standard CRUD dashboard (Create/Read/Update/Delete), simple tables & forms, basic user navigation.' },
          { name: 'Enhanced Admin', price: 2200, description: 'Multiple dashboards, report generation, charts & metrics, filtered views, export options, user-friendly UI.' },
          { name: 'Enterprise Admin', price: 5500, description: 'Fully customized analytics dashboards, real-time monitoring, deep insights, live metrics, intelligent reporting.' }
        ]
      },
      { 
        id: 'client_portal', name: 'Client Portal', 
        tiers: [
          { name: 'Basic Portal', price: 1800, description: 'Basic sign-in/out, encrypted access, profile management.' },
          { name: 'Enhanced Portal', price: 3800, description: 'Role-based access, file/document sharing, request handling.' },
          { name: 'Enterprise Portal', price: 8500, description: 'Advanced dashboards, multi-user management, internal messaging, AI-based insights, reporting.' }
        ]
      },
      { 
        id: 'ai_platform', name: 'AI-Integrated Platform', 
        tiers: [
          { name: 'Light AI', price: 4800, description: 'Basic AI alerts, smart sorting, automated tagging, anomaly detection.' },
          { name: 'Assisted AI', price: 9500, description: 'AI-driven recommendations, workflow automation, real-time optimization.' },
          { name: 'Deep AI', price: 22000, description: 'Predictive analytics, adaptive learning, self-optimizing stock flow, system-wide automation.' }
        ]
      },
      { 
        id: 'inventory', name: 'Inventory System', 
        tiers: [
          { name: 'Basic Inventory', price: 3200, description: 'Stock levels, product listings, low-stock alerts, basic SKU tracking.' },
          { name: 'Enhanced Inventory', price: 6500, description: 'Multi-warehouse support, barcode/QR scanning, purchase order tracking, supplier linkages.' },
          { name: 'Enterprise Inventory', price: 14000, description: 'End-to-end logistics, auto-replenishment suggestions, forecasting, smart demand prediction, warehouse optimization.' }
        ]
      },
    ]
  },
  {
    id: 'platform_system',
    name: 'Platform System',
    description: 'Core enterprise systems and architectures.',
    selectionMode: 'single',
    items: [
      { 
        id: 'crm', name: 'CRM System', 
        tiers: [
          { name: 'Basic CRM', price: 2500, description: 'Single-user workflow dashboard, standard CRUD + analytics widgets, basic filtering, light reporting.' },
          { name: 'Enhanced CRM', price: 5200, description: 'Multi-user access, role permissions, enhanced dashboards, exportable reports, moderate 3rd-party integrations.' },
          { name: 'Enterprise CRM', price: 12000, description: 'Multi-tenant SaaS support, AI-assisted monitoring, real-time data updates, advanced access control layers.' }
        ]
      },
      { 
        id: 'internal_tool', name: 'Internal Company Tool', 
        tiers: [
          { name: 'Basic Tool', price: 2200, description: 'Standard rule-based automation, scheduled tasks, basic event triggers, single user or light internal use.' },
          { name: 'Enhanced Tool', price: 4500, description: 'Multi-user workflow automation, multi-step flows, conditional branching, moderate API/integration compatibility.' },
          { name: 'Enterprise Tool', price: 10500, description: 'Full workflow orchestration, AI recommendation engine, predictive task routing, multi-tenant scaling.' }
        ]
      },
    ]
  },
  {
    id: 'addons',
    name: 'Add-On Features',
    description: 'Essential technical capabilities.',
    items: [
      { 
        id: 'auth', name: 'User Authentication', 
        tiers: [
          { name: 'Simple Auth', price: 400, description: 'Simple login/signup flows (Covers single-user or basic applications with minimal security requirements.)' },
          { name: 'Secure Auth', price: 850, description: 'Multi-role access, enhanced security (password strength checks, optional 2FA), session management.' },
          { name: 'Advanced Auth', price: 2000, description: 'Advanced authentication: multi-factor (SMS/email/Authenticator), AI security for threat detection, SSO.' }
        ]
      },
      { 
        id: 'rbac', name: 'Role-Based Access', 
        tiers: [
          { name: 'Basic RBAC', price: 350, description: 'Basic permissions (1–3 roles)' },
          { name: 'Moderate RBAC', price: 750, description: 'Moderate access rules (4–10 roles)' },
          { name: 'Complex RBAC', price: 1800, description: 'Complex multi-role hierarchies (10–50 roles)' }
        ]
      },
      { 
        id: 'dashboard', name: 'Custom Dashboard UI', 
        tiers: [
          { name: 'Basic Dash', price: 900, description: 'Basic data visualization. Graphs, charts, metric summaries, manual data refresh.' },
          { name: 'Interactive Dash', price: 1900, description: 'Interactive dashboards, moderate metrics. Click-driven panels, filters, drill-down stats.' },
          { name: 'Advanced Dash', price: 4500, description: 'Advanced dashboards with AI insights, real-time updates. Real-time analytics, predictive alerts.' }
        ]
      },
      { 
        id: 'analytics', name: 'Reports & Analytics', 
        tiers: [
          { name: 'Basic Reports', price: 1200, description: 'Basic reports. Exportable reports (PDF/CSV), scheduled reports, summary metrics.' },
          { name: 'Detailed BI', price: 2500, description: 'Detailed BI reports. Custom reporting templates, trend breakdowns, KPI tracking, quarterly analysis.' },
          { name: 'Full BI Suite', price: 6200, description: 'Full BI suite, predictive analytics, AI-assisted insights. Predictive reports, automated analysis.' }
        ]
      },
      { 
        id: 'db_setup', name: 'Database Setup', 
        tiers: [
          { name: 'Core DB', price: 850, description: 'Core database setup, standard tables, basic queries, single-tenant structure, suitable for small apps.' },
          { name: 'Scalable DB', price: 1700, description: 'Scalable schema design, optimized queries, supports moderate data growth, can handle multiple workflows.' },
          { name: 'Complex DB', price: 4000, description: 'Complex database architecture, multi-tenant ready, replication/backup, high concurrency, optimized for SaaS.' }
        ]
      },
      { 
        id: 'dms', name: 'Document Management', 
        tiers: [
          { name: 'Basic DMS', price: 700, description: 'Basic file storage, upload/download, simple folder structure, suitable for small teams.' },
          { name: 'Advanced DMS', price: 1500, description: 'Advanced file handling, versioning, permissions per user/role, search/filter options.' },
          { name: 'Full DMS', price: 3600, description: 'Full-featured DMS with versioning, AI-assisted indexing/search, secure storage, access logs, compliance.' }
        ]
      },
      { 
        id: 'payment', name: 'Payment System', 
        tiers: [
          { name: 'Single Gateway', price: 600, description: 'Single payment gateway integration, basic checkout, standard receipts.' },
          { name: 'Multi Gateway', price: 1200, description: 'Multiple payment gateways, recurring payments/subscriptions, automated receipts, basic fraud checks.' },
          { name: 'Full Processing', price: 3200, description: 'Full payment processing system, multi-gateway + subscriptions, SaaS billing, advanced fraud protection.' }
        ]
      },
      { 
        id: 'multitenant', name: 'Multi-Tenant System', 
        tiers: [
          { name: 'Basic SaaS', price: 2200, description: 'Basic SaaS support, single instance with isolated user groups, limited tenant management.' },
          { name: 'Moderate SaaS', price: 4800, description: 'Moderate multi-tenant support, role separation per tenant, basic analytics, scalable for growing teams.' },
          { name: 'Full Multi-Tenant', price: 11500, description: 'Full multi-tenant SaaS architecture, automated provisioning, tenant-specific analytics, full automation.' }
        ]
      },
    ]
  },
  {
    id: 'ai_automation',
    name: 'AI & Automation',
    description: 'Intelligent agents to power your business.',
    items: [
      { 
        id: 'ai_receptionist', name: 'AI Receptionist', 
        tiers: [
          { name: 'Basic Agent', price: 1200, description: 'Basic voice handling, simple call routing, single-channel voice support, suitable for small businesses.' },
          { name: 'Smart Agent', price: 2500, description: 'Multi-channel voice support, moderate call automation, voicemail transcription, basic integration with CRM.' },
          { name: 'Advanced Agent', price: 6000, description: 'Advanced AI receptionist with NLP, multi-task call handling, automated scheduling, full CRM integration.' }
        ]
      },
      { 
        id: 'ai_chatbot', name: 'AI Chatbot', 
        tiers: [
          { name: 'Basic Bot', price: 400, description: 'Basic 24/7 text support, simple scripted responses, single platform deployment.' },
          { name: 'Smart Bot', price: 850, description: 'Multi-channel chatbot, automated responses, dynamic FAQs, basic CRM integration.' },
          { name: 'Advanced Bot', price: 2000, description: 'Advanced AI chatbot with NLU, multi-task handling, full CRM & database integration, personalized recommendations.' }
        ]
      },
      { 
        id: 'ai_assistant', name: 'AI Task/Email Assistant', 
        tiers: [
          { name: 'Simple Assistant', price: 700, description: 'Automates simple tasks or email responses, single workflow support.' },
          { name: 'Multi-Task', price: 1500, description: 'Multi-task automation, multiple workflow handling, scheduling, and reminders.' },
          { name: 'Full Assistant', price: 3500, description: 'Full AI assistant for complex workflows, automated email handling, integration with CRM, calendar, internal tools.' }
        ]
      },
      { 
        id: 'ai_docs', name: 'AI Document Generator', 
        tiers: [
          { name: 'Basic Gen', price: 500, description: 'Generates simple reports and documents from templates.' },
          { name: 'Automated Gen', price: 1000, description: 'Automated document creation, dynamic templates, moderate formatting options.' },
          { name: 'Full AI Gen', price: 2500, description: 'Full AI-generated reports and documents, advanced templates, analytics-ready output, cross-platform export.' }
        ]
      },
      { 
        id: 'ai_rec', name: 'AI Recommendation', 
        tiers: [
          { name: 'Basic Recs', price: 900, description: 'Basic content or product personalization based on simple rules.' },
          { name: 'Moderate Recs', price: 1800, description: 'Moderate recommendations using user behavior or preferences, integrated with web/app platform.' },
          { name: 'Advanced Recs', price: 4200, description: 'Advanced predictive AI recommendations, cross-system learning, personalized suggestions across platforms.' }
        ]
      },
    ]
  },
  {
    id: 'integrations',
    name: 'Integrations',
    description: 'Connect with the services you use.',
    items: [
      { 
        id: 'gcal', name: 'Google Calendar Sync', 
        tiers: [
          { name: 'Basic Sync', price: 250, description: 'Basic 2-way calendar sync, single user, simple event creation & updates.' },
          { name: 'Multi Sync', price: 550, description: 'Multi-calendar support, multiple users, improved sync speed, conflict handling.' },
          { name: 'Enterprise Sync', price: 1500, description: 'Enterprise-grade sync, real-time updates, multi-user & multi-tenant support, API integration with workflows.' }
        ]
      },
      { 
        id: 'gmaps', name: 'Google Maps', 
        tiers: [
          { name: 'Basic Maps', price: 200, description: 'Basic map embedding, static location markers.' },
          { name: 'Advanced Maps', price: 400, description: 'Advanced mapping, search/filter functionality, dynamic markers, basic routing.' },
          { name: 'Full Location', price: 1000, description: 'Full location services with AI-enhanced features, real-time routing, geolocation analytics, multi-user support.' }
        ]
      },
      { 
        id: 'api_3rd', name: '3rd Party API', 
        tiers: [
          { name: 'Single API', price: 500, description: 'Single external API connection, simple data fetch.' },
          { name: 'Multiple APIs', price: 1200, description: 'Multiple APIs, moderate automation, error handling, periodic sync.' },
          { name: 'Complex APIs', price: 3000, description: 'Complex multi-API integrations, real-time sync, multi-source data processing, enterprise workflows.' }
        ]
      },
      { 
        id: 'zapier', name: 'Zapier / Make', 
        tiers: [
          { name: 'Basic Hooks', price: 150, description: 'Basic workflow hooks, single automation, simple triggers/actions.' },
          { name: 'Enhanced Auto', price: 300, description: 'Enhanced no-code workflow automation, multiple triggers/actions, cross-platform.' },
          { name: 'Full Workflow', price: 750, description: 'Full enterprise workflow automation, multiple workflows, advanced triggers, error handling.' }
        ]
      },
      { 
        id: 'crm_int', name: 'CRM Integration', 
        tiers: [
          { name: 'Single CRM', price: 700, description: 'Single CRM integration, basic data sync, read/write operations.' },
          { name: 'Multi CRM', price: 1500, description: 'Multiple CRM integration, automated sync, mapping fields, moderate workflow automation.' },
          { name: 'Full Data Auto', price: 3500, description: 'Multi-CRM integration, real-time sync, full data automation, cross-platform workflows, enterprise reporting.' }
        ]
      },
    ]
  },
  {
    id: 'branding',
    name: 'Design & Branding',
    description: 'The visual identity of your project.',
    items: [
      { 
        id: 'logo', name: 'Logo + Branding', 
        tiers: [
          { name: 'Basic Logo', price: 150, description: 'Basic logo design, primary colors, simple branding for small projects or startups.' },
          { name: 'Full Branding', price: 350, description: 'Full branding guide including logo, fonts, color palette, and style guidelines for consistent visuals.' },
          { name: 'Complete Package', price: 1000, description: 'Complete branding package with logo, fonts, colors, style guide, AI-assisted design recommendations.' }
        ]
      },
      { 
        id: 'uiux', name: 'UI/UX Design', 
        tiers: [
          { name: 'Basic UI', price: 800, description: 'UI design for 1–3 pages, basic layout, mobile-responsive, clean and functional.' },
          { name: 'Pro UI/UX', price: 1800, description: 'UI/UX for 4–10 pages, interactive elements, moderate animations, user-focused design.' },
          { name: 'Full UX Suite', price: 5000, description: 'Full UI/UX design for 10+ pages, advanced interactivity, polished presentation, AI-assisted UX recommendations.' }
        ]
      },
    ]
  },
];
