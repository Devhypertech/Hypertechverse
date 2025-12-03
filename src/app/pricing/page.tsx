"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("website");

  // Website packages data
  const websitePackages = [
    {
      title: "Startup Website Package",
      price: "$249.99",
      description: "Suitable for Potential super-startups and brand revamps for companies",
      features: [
        "5 Stock Photos",
        "5 Page Website",
        "3 Banner Design",
        "1 jQuery Slider Banner",
        "FREE Google Friendly Sitemap",
        "Complete W3C Certified HTML",
        "48 to 72 hours TAT",
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Page Design",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
        "Mobile Responsive will be Additional $99*",
        "CMS will be Additional $149*",
      ],
    },
    {
      title: "Professional Website Package",
      price: "$599.99",
      description: "Suitable for Potential super-startups and brand revamps for companies",
      features: [
        "10 Unique Pages Website",
        "CMS / Admin Panel Support",
        "8 Stock images",
        "5 Banner Designs",
        "1 jQuery Slider Banner",
        "FREE Google Friendly Sitemap",
        "Complete W3C Certified HTML",
        "48 to 72 hours TAT",
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Page Design",
        "Complete Deployment",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
        "Mobile Responsive will be Additional $99*",
      ],
    },
    {
      title: "Elite Website Package",
      price: "$999.99",
      description: "Suitable for Potential super-startups and brand revamps for companies",
      features: [
        "Upto 15 Unique Pages Website",
        "Conceptual and Dynamic Website",
        "Mobile Responsive",
        "Online Reservation/Appointment Tool (Optional)",
        "Online Payment Integration (Optional)",
        "Custom Forms",
        "Lead Capturing Forms (Optional)",
        "Striking Hover Effects",
        "Newsletter Subscription (Optional)",
        "Newsfeed Integration",
        "Social Media Integration",
        "Search Engine Submission",
        "5 Stock Photos",
        "3 Unique Banner Design",
        "1 jQuery Slider Banner",
        "Complete W3C Certified HTML",
        "48 to 72 hours TAT",
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Page Design",
        "Complete Deployment",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
    {
      title: "Silver Website Package",
      price: "$1599.99",
      description: "Suitable for Potential super-startups and brand revamps for companies",
      features: [
        "15 to 20 Pages Website",
        "Custom Made, Interactive, Dynamic & High End Design",
        "Custom WP (or) Custom PHP Development",
        "1 jQuery Slider Banner",
        "Up to 10 Custom Made Banner Designs",
        "10 Stock Images",
        "Unlimited Revisions",
        "Special Hoover Effects",
        "Content Management System (CMS)",
        "Online Appointment/Scheduling/Online Ordering Integration (Optional)",
        "Online Payment Integration (Optional)",
        "Multi Lingual (Optional)",
        "Custom Dynamic Forms (Optional)",
        "Signup Area (For Newsletters, Offers etc.)",
        "Search Bar",
        "Live Feeds of Social Networks integration (Optional)",
        "Mobile Responsive",
        "FREE 5 Years Domain Name",
        "Free Google Friendly Sitemap",
        "Search Engine Submission",
        "Complete W3C Certified HTML",
        "Industry Specified Team of Expert Designers and Developers",
        "Complete Deployment",
        "Dedicated Accounts Manager",
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Page Design",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
  ];

  // E-Commerce packages data
  const ecommercePackages = [
    {
      title: "Beginner E-Commerce Package",
      price: "$999.99",
      description: "Suitable for Potential super-startups and brand revamps for companies",
      features: [
        "Upto 15 Unique Pages Website",
        "Conceptual and Dynamic Website",
        "Content Management System (CMS)",
        "Mobile Responsive",
        "Easy Product Search",
        "Product Reviews",
        "Up To 100 Products",
        "Up To 7 Categories",
        "Full Shopping Cart Integration",
        "Payment Module Integration",
        "Sales & Inventory Management",
        "Jquery Slider",
        "Free Google Friendly Sitemap",
        "FREE 1 Years Hosting",
        "Custom Email Addresses",
        "Complete W3C Certified HTML",
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Page Design",
        "Complete Deployment",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee",
      ],
    },
    {
      title: "Corporate E-Commerce",
      price: "$1799.99",
      description: "Suitable for Potential super-startups and brand revamps for companies",
      features: [
        "Unlimited Unique Pages Website",
        "Conceptual and Dynamic Website",
        "Content Management System (CMS)",
        "Mobile Responsive",
        "Easy Product Search",
        "Product Reviews",
        "Unlimited Products",
        "Unlimited Categories",
        "Full Shopping Cart Integration",
        "Payment Module Integration",
        "Sales & Inventory Management",
        "Jquery Slider",
        "Free Google Friendly Sitemap",
        "FREE 3 Years Hosting",
        "Custom Email Addresses",
        "Complete W3C Certified HTML",
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Page Design",
        "Instagram Page Design",
        "Complete Deployment",
        "Dedicated Accounts Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee",
        "+$500 for 24 hours rush delivery",
      ],
    },
    {
      title: "Elite E-Commerce Package",
      price: "$3694.00",
      description: "Suitable for Potential super-startups and brand revamps for companies",
      features: [
        "UNLIMITED Logo Design Concepts",
        "By 6 Award Winning Designers",
        "Icon Design",
        "UNLIMITED Revisions",
        "Print Media",
        "Stationary Design (BusinessCard,Letterhead & Envelope)",
        "Invoice Design, Email Signature",
        "Bi-Fold Brochure (OR) 2 Sided Flyer Design",
        "Product Catalog Design",
        "Sign age Design (OR) Label Design",
        "T-Shirt Design (OR) Car Wrap Design",
        "Website",
        "E-Commerce Store Design",
        "Product Detail Page Design",
        "Unique Banner Slider",
        "Featured Products Showcase",
        "Full Shopping Cart Integration",
        "Unlimited Products",
        "Unlimited Categories",
        "Product Rating & Reviews",
        "Easy Product Search",
        "Payment Gateway Integration",
        "Multi-currency Support",
        "Content Management System",
        "Cutomer Log-in Area",
        "Mobile Responsive",
        "Social Media Plugins Integration",
        "Tell a Friend Feature",
        "Social Media Pages",
        "Facebook , Twitter, YouTube, Google+ & Pinterest Page Designs",
        "Value Added Services",
        "Dedicated Account Manager",
        "Unlimited Revisions",
        "All Final File Formats",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
    {
      title: "Automated/Interactive E-Commerce Package",
      price: "$9999.99",
      description: "Suitable for Potential super-startups and brand revamps for companies",
      isWide: true, // Flag to make this one span 3 columns
      features: [
        "Unlimited Page Website",
        "Custom Content Management System (CMS)",
        "Unique Pages and UI Design",
        "Complete Custom Development",
        "Process Automation Tools",
        "Newsfeed Integration",
        "Social Media Plugins Integration",
        "Upto 40 Stock images",
        "10 Unique Banner Designs",
        "JQuery Slider",
        "Search Engine Submission",
        "Free Google Friendly Sitemap",
        "FREE 5 Years Hosting",
        "Custom Email Addresses",
        "Social Media Page Designs (Facebook, Twitter, Instagram)",
        "Complete W3C Certified HTML",
        "Complete Deployment",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "Money Back Guarantee",
        "Automated Inventory/Shipping/Supplier Module:",
        "Manage thousands to millions of inventory with ease and check stock levels in real-time. Receive low inventory notifications and generate purchase orders to replenish your stock.",
        "Suppliers Integration (API NEEDED)",
        "Shipper Integration (API NEEDED)",
        "Order management",
        "LOT numbers and expire date tracking",
        "Transfer stock between warehouses (If Warehouse - API NEEDED)",
        "Receive stock into a specific warehouse (If Warehouse - API NEEDED)",
        "Fulfill orders from a particular warehouse (If Warehouse - API NEEDED)",
        "Stock Management",
        "Actionable Insights",
        "Real- Time Visibility",
        "Inventory Opportunities",
        "Advanced Features: (API Needed For Suppliers/Warehouse)",
        "Speak to suppliers during trivial conversations.",
        "Set and send actions to suppliers regarding governance and compliance materials. Place purchasing requests.",
        "Research and answer internal questions regarding procurement functionalities or a supplier/supplier set.",
        "Receiving/filing/documentation of invoices and payments/order requests",
        "Machine Learning (ML) for Supply Chain Planning (SCP)",
        "Machine Learning for Warehouse Management",
        "Natural Language Processing (NLP) for Data Cleansing and Building Data Robustness",
        "Automated Invoices & Estimates",
        "Create beautiful, professional invoices & estimates in just a few seconds and then instantly email them as PDF's directly to your customers or prospects.",
        "Automated Split invoicing",
        "Automated Combine invoices",
        "Invoice templates",
        "Automated Barcode Scanning",
        "Scan inventory into your orders, generate barcodes for your documents, and search for inventory or documents by scanning barcodes.",
        "Locations and Zones",
        "Have multiple warehouses, offices, or retail stores? No problem. Easily track where all your inventory is by organizing everything into locations and zones. Organize inventory items using custom attributes such as size, color, and location. View how many you have globally or at each location.",
        "Customer Accounts",
        "Performance and analytics",
        "Customization of Personal Details",
        "Process management",
        "Sales Automation",
        "Team Collaboration",
        "Marketing Automation",
        "Security",
        "Integrations",
        "Mobile Notifications",
        "Sales Reports",
        "Trend Analytics",
        "Forecasting",
        "Territory Management",
        "Account Management",
        "Event Integration",
        "Advanced Data Security",
        "Purchase Orders",
        "With integrated purchase orders, you can easily replenish your inventory levels by ordering more stock and even track when those new items will arrive.",
        "Partial orders fulfill",
        "Backordering",
        "Financial Reports",
        "Generate extremely detailed reports for your inventory, sales and services. Filter your reports by date-range and category to see what's making you the most money.",
      ],
    },
  ];

  // Branding packages data
  const brandingPackages = [
    {
      title: "Startup Collateral Package",
      price: "$49.99",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "2 Stationery Design Set",
        "FREE Fax Template",
        "Print Ready Formats",
        "UNLIMITED Revisions",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
    {
      title: "Collateral Classic Package",
      price: "$129.99",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "2 Stationery Design Set",
        "UNLIMITED Revisions",
        "Flyer Design",
        "Brochure Design (Bi-fold/Tri-fold)",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
    {
      title: "Premium Collateral Package",
      price: "$199.99",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "2 Stationery Design Set",
        "Packaging Design",
        "UNLIMITED Revisions",
        "T-Shirt Design",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
    {
      title: "Unlimited Collateral Package",
      price: "$249.99",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "2 Stationery Design Set",
        "Menu Card Design",
        "T-Shirt Design",
        "1 Banner Design",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
  ];

  // Video Animation packages data
  const videoAnimationPackages = [
    {
      title: "Teaser Intro Video Packages",
      price: "$299.00",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "15s Duration - HD 1080",
        "Professional Script",
        "Storyboard",
        "Sample Themes",
        "Custom Setting, Characters & Graphics",
        "Animation Effects & Visualization",
        "Voice - Over & Sound Effects (All accents) (M/F)",
        "Unlimited Revisions",
      ],
    },
    {
      title: "Startup Video Packages",
      price: "$349.00",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "30s Duration - HD 1080",
        "Professional Script",
        "Storyboard",
        "Sample Themes",
        "Custom Setting, Characters & Graphics",
        "Animation Effects & Visualization",
        "Voice - Over & Sound Effects (All accents) (M/F)",
        "Unlimited Revisions",
      ],
    },
    {
      title: "Classic Video Packages",
      price: "$499.00",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "60 Second Video - HD 1080",
        "Professional Script",
        "Sample Theme",
        "Storyboard",
        "Animation",
        "Voice - Over & Sound Effects",
        "5 weeks Delivery",
        "Unlimited Revisions",
      ],
    },
    {
      title: "Premium Video Packages",
      price: "$699.00",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "90 Second Video - HD 1080",
        "Professional Script",
        "Sample Theme",
        "Storyboard",
        "Animation",
        "Voice - Over & Sound Effects",
        "6 weeks Delivery",
        "Unlimited Revisions",
      ],
    },
  ];

  // SEO packages data
  const seoPackages = [
    {
      title: "Startup SEO Package",
      price: "$499.00",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "5 Keywords",
        "Guaranteed Ranking on Google",
        "Off-site Optimization",
        "Link Building",
        "Social Bookmarking",
        "Basic Analytical Report",
        "In-depth Site Analysis",
        "Content Duplicity Check",
        "Initial Backlinks analysis",
        "Google Penalty Check",
        "Mobile Usability Check",
        "Competition Analysis",
        "Keyword Research",
        "Informational Content Writing & Sharing (2 - Per Month)",
        "Blog Writing (1 - Per Month)",
        "Press Release Social Bookmarking (5 - Per Month)",
        "NAP Syndication",
        "Google My Business / Bing Local Listing",
        "Citation Building",
        "Classified Submissions",
        "Google Analytics Analysis Report",
        "SEO Reports",
        "Search Engine Rank Report",
        "Dedicated Accounts Manager",
        "Monthly Action Plan",
        "Activity Report",
      ],
    },
    {
      title: "Identity SEO Package",
      price: "$849.00",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "10 Keywords",
        "Guaranteed Ranking on Google",
        "Off-site Optimization",
        "On-site Optimization",
        "Link Building",
        "Social Bookmarking",
        "In-depth Site Analysis",
        "Content Duplicity Check",
        "Initial Backlinks analysis",
        "Google Penalty Check",
        "Mobile Usability Check",
        "Competition Analysis",
        "Keyword Research",
        "Title & Meta Tags Optimization",
        "Content Optimization",
        "Page Speed Analysis & Optimization",
        "HTML Code Cleanup & Optimization",
        "Internal Link Structuring & Optimization",
        "Pages H tags Optimization",
        "Canonicalization/301 Redirect",
        "Website Page Load Optimization",
        "Schema Markup Implementation",
        "Image & Hyperlink Optimization",
        "Robots.txt Creation/Analysis",
        "Blog Writing (2 - Per Month)",
        "Informational Content Writing & Sharing (1 Per Month)",
        "Press Release Writing & Distribution",
        "Press Release Social Bookmarking",
        "Google Webmaster Tools Setup",
        "Google Analytics Setup & Integration",
      ],
    },
    {
      title: "Elite SEO Package",
      price: "$1549.00",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "20 Keywords",
        "Guaranteed Ranking on Google",
        "Off-site Optimization",
        "On-site Optimization",
        "Link Building",
        "Social Bookmarking",
        "In-depth Site Analysis",
        "Content Duplicity Check",
        "Initial Backlinks analysis",
        "Google Penalty Check",
        "Mobile Usability Check",
        "Competition Analysis",
        "Keyword Research",
        "Page Speed Analysis & Optimization",
        "Title & Meta Tags Optimization",
        "Content Optimization",
        "HTML Code Cleanup & Optimization",
        "Internal Link Structuring & Optimization",
        "Pages H tags Optimization",
        "Canonicalization/301 Redirect",
        "Website Page Load Optimization",
        "Robots.txt Creation/Analysis",
        "Press Release Writing & Distribution",
        "Schema Markup Implementation",
        "Image & Hyperlink Optimization",
        "Google Webmaster Tools Setup",
        "Google Analytics Setup & Integration",
        "Blog Writing (2 - Per Month)",
        "Informational Content Writing & Sharing (1 Per Month)",
        "Link Building",
        "Social Bookmarking",
        "In-depth Site Analysis",
        "Content Duplicity Check",
        "Initial Backlinks analysis",
        "Google Penalty Check",
        "Mobile Usability Check",
        "Competition Analysis",
        "Keyword Research",
        "Page Speed Analysis & Optimization",
        "Title & Meta Tags Optimization",
        "Content Optimization",
        "HTML Code Cleanup & Optimization",
        "Internal Link Structuring & Optimization",
        "Pages H tags Optimization",
        "Canonicalization/301 Redirect",
        "Website Page Load Optimization",
        "Robots.txt Creation/Analysis",
        "Press Release Writing & Distribution",
        "Press Release Social Bookmarking",
        "Schema Markup Implementation",
        "Image & Hyperlink Optimization",
        "Google Webmaster Tools Setup",
        "Google Analytics Setup & Integration",
        "Blog Writing (2 - Per Month)",
        "Informational Content Writing & Sharing (1 Per Month)",
      ],
    },
    {
      title: "Professional SEO Package",
      price: "$2,149.00",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "30 Keywords",
        "Guaranteed Ranking on Google",
        "Off-site Optimization",
        "On-site Optimization",
        "Link Building",
        "Social Bookmarking",
        "In-depth Site Analysis",
        "Content Duplicity Check",
        "Initial Backlinks analysis",
        "Google Penalty Check",
        "Mobile Usability Check",
        "Competition Analysis",
        "Keyword Research",
        "Page Speed Analysis & Optimization",
        "Title & Meta Tags Optimization",
        "Content Optimization",
        "HTML Code Cleanup & Optimization",
        "Internal Link Structuring & Optimization",
        "Pages H tags Optimization",
        "Canonicalization/301 Redirect",
        "Website Page Load Optimization",
        "Robots.txt Creation/Analysis",
        "Press Release Writing & Distribution",
        "Press Release Social Bookmarking",
        "Schema Markup Implementation",
        "Image & Hyperlink Optimization",
        "Google Webmaster Tools Setup",
        "Google Analytics Setup & Integration",
        "Blog Writing (2 - Per Month)",
        "Informational Content Writing & Sharing (1 Per Month)",
      ],
    },
  ];

  // SMM packages data
  const smmPackages = [
    {
      title: "Basic Plan",
      price: "$399",
      description: "Perfect for small businesses getting started with social media.",
      features: [
        "Platforms: 1 Platform",
        "Posts Per Month: 8 Custom Posts",
        "Content Creation: Standard Graphics & Captions",
        "Ad Campaigns: Basic Ads (platform-specific)",
        "Engagement & Community: Community Interaction",
        "Performance Tracking: Basic Analytics & Reporting",
        "Support & Consultation: Email Support & Monthly Consultation",
        "Value-Added Services:",
        "Influencer Outreach",
        "Crisis Management",
        "Video Marketing",
      ],
    },
    {
      title: "Growth Plan",
      price: "$799",
      description: "Ideal for growing businesses looking to expand their social presence.",
      features: [
        "3 Platforms",
        "12 Custom Posts",
        "Custom Graphics, Hashtags, Stories",
        "Facebook & Instagram Ads",
        "Interaction & Engagement Growth",
        "Bi-Weekly Reports",
        "Priority Support",
        "Value-Added Services:",
        "Basic Collaboration",
        "Reputation Monitoring",
        "Short Video Clips",
      ],
    },
    {
      title: "Premium Plan",
      price: "$999",
      description: "Comprehensive solution for established brands with advanced needs.",
      features: [
        "5+ Platforms",
        "20+ Custom Posts",
        "Advanced Branding, Carousels, Video Content",
        "Multi-Platform Ads (Facebook, Instagram, LinkedIn, Twitter)",
        "Advanced Strategy (Influencers, PR)",
        "Real-Time Insights & Strategy Adjustments",
        "Dedicated Social Media Manager",
        "Value-Added Services:",
        "Full Influencer Marketing Strategy",
        "Brand Reputation & PR Handling",
        "Fully Custom Reels & TikTok Videos",
      ],
    },
  ];

  // Combo Packages data
  const comboPackages = [
    {
      title: "Basic Combo Package",
      price: "$499.00",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "5 Custom Logo Design Concepts",
        "By 2 Designers",
        "Icon Design",
        "Business Card, Letterhead, Envelope, Fax Template",
        "MS Word Letterhead",
        "5 Page Website",
        "Mobile Responsive",
        "Team of Expert Designers & Developers",
        "8 Stock images",
        "5 Banner Designs",
        "jQuery Sliders",
        "Free Google Friendly Sitemap",
        "Complete W3C Certified HTML",
        "Complete Deployment",
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Page Design",
        "All Final File Formats",
        "Dedicated Account Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
    {
      title: "Startup Combo Package",
      price: "$999.99",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "Unlimited Logo Design Concepts",
        "+ Social Media Design",
        "Mobile Responsive",
        "3 Dedicated Designers",
        "Icon Design",
        "Business Card, Letterhead, Envelope",
        "MS Word Letterhead",
        "UNLIMITED Pages Website",
        "Content Management System (CMS)",
        "5 Stock Photos + 3 Banner Designs",
        "Complete W3C Certified HTML",
        "Complete Deployment",
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Page Design",
        "All Final File Formats",
        "Dedicated Account Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
    {
      title: "Professional Combo Package",
      price: "$1399.99",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "Unlimited Logo Concepts",
        "8 Dedicated Designers",
        "Icon Design",
        "2 Free Custom Stationary Designs",
        "MS Word Letterhead",
        "Trifold Brochure Design",
        "Presentation Folder Design",
        "Conceptual and Dynamic Liquid Website",
        "Team of Expert Designers & Developers",
        "Mobile Responsive",
        "Online Reservation/Appointment Tool (Optional)",
        "Custom Forms",
        "Lead Capturing Forms (Optional)",
        "Newsfeed Integration",
        "Social Media Integration",
        "Search Engine Submission",
        "15 Stock images",
        "8 Unique Banner Designs",
        "jQuery Sliders",
        "Free Google Friendly Sitemap",
        "Complete W3C Certified HTML",
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Page Design",
        "Google+ Page Design",
        "All Final File Formats",
        "Dedicated Account Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "100% Money Back Guarantee *",
      ],
    },
    {
      title: "Corporate Combo Package",
      price: "$1999.99",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "Unlimited Logo Concepts",
        "8 Dedicated Designers",
        "Icon Design",
        "2 Free Custom Stationary Designs",
        "MS Word Letterhead",
        "Invoice Design",
        "Product Catalog Design",
        "Unlimited Pages Website",
        "Conceptual and Dynamic Website",
        "Content Management System (CMS)",
        "Easy Product Search",
        "Product Reviews",
        "Unlimited Products",
        "Unlimited Categories",
        "Promotional Product Showcase",
        "New Product Showcase",
        "Full Shopping Cart Integration",
        "Payment Module Integration",
        "Sales & Inventory Management",
        "Custom Forms",
        "Lead Capturing Forms (Optional)",
        "Newsfeed Integration",
        "Social Media Integration",
        "Search Engine Submission",
        "Team of Dedicated Designers, Developers and Brand Experts",
        "20 Stock images",
        "6 Unique Banner Designs",
        "jQuery Slider",
        "Free Google Friendly Sitemap",
        "Complete W3C Certified HTML",
        "Facebook Page Design",
        "Twitter Page Design",
        "YouTube Page Design",
        "Google+ Page Design",
        "Pinterest Page Design",
        "All Final File Formats",
        "Dedicated Account Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
      ],
    },
  ];

  // Pricing tiers data
  const pricingTiers: { [key: string]: any } = {
    website: {
      title: "Website Package",
      price: "$200",
      art: "/packages/speaker.png",
      features: [
        "Responsive Design",
        "Custom Development",
        "SEO Optimization",
        "Content Management",
        "Contact Forms",
        "Social Media Integration",
        "Mobile Friendly",
        "Fast Loading",
        "Security Features",
        "Support & Maintenance",
      ],
      services: ["WEB DEVELOPMENT", "RESPONSIVE DESIGN", "SEO OPTIMIZATION", "CMS INTEGRATION"],
      description: "Professional website development services tailored to your business needs...",
    },
    "e-commerce": {
      title: "E-Commerce Package",
      price: "$400",
      art: "/packages/arrowboard.png",
      features: [
        "Online Store Setup",
        "Product Management",
        "Payment Gateway Integration",
        "Shopping Cart",
        "Order Management",
        "Inventory Tracking",
        "Shipping Integration",
        "Customer Accounts",
        "Security & SSL",
        "Analytics Integration",
      ],
      services: ["E-COMMERCE DEVELOPMENT", "PAYMENT GATEWAY", "PRODUCT MANAGEMENT", "ORDER TRACKING"],
      description: "Complete e-commerce solutions to launch and grow your online store...",
    },
    branding: {
      title: "Branding Package",
      price: "$300",
      art: "/packages/speaker.png",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Color Palette",
        "Typography Selection",
        "Brand Identity",
        "Business Cards",
        "Letterhead Design",
        "Social Media Assets",
        "Brand Strategy",
        "Style Guide",
      ],
      services: ["LOGO DESIGN", "BRAND IDENTITY", "BRAND GUIDELINES", "VISUAL ASSETS"],
      description: "Comprehensive branding services to establish your unique brand identity...",
    },
    "video-animation": {
      title: "Video Animation Package",
      price: "$500",
      art: "/packages/trophycupaward.png",
      features: [
        "2D/3D Animation",
        "Explainer Videos",
        "Motion Graphics",
        "Video Editing",
        "Voiceover",
        "Music & Sound Effects",
        "Script Writing",
        "Storyboarding",
        "Multiple Revisions",
        "Final Delivery",
      ],
      services: ["2D ANIMATION", "3D ANIMATION", "EXPLAINER VIDEO", "MOTION GRAPHICS"],
      description: "Professional video animation services to bring your ideas to life...",
    },
    seo: {
      title: "SEO Package",
      price: "$250",
      art: "/packages/arrowboard.png",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Technical SEO",
        "Content Optimization",
        "Link Building",
        "Local SEO",
        "SEO Audit",
        "Performance Tracking",
        "Monthly Reports",
        "Ongoing Support",
      ],
      services: ["SEO OPTIMIZATION", "KEYWORD RESEARCH", "LINK BUILDING", "SEO AUDIT"],
      description: "Comprehensive SEO services to improve your search engine rankings...",
    },
    "smm-package": {
      title: "SMM Package",
      price: "$350",
      art: "/packages/speaker.png",
      features: [
        "Social Media Strategy",
        "Content Creation",
        "Post Scheduling",
        "Community Management",
        "Analytics & Reporting",
        "Ad Campaign Management",
        "Platform Optimization",
        "Engagement Growth",
        "Brand Awareness",
        "Monthly Reports",
      ],
      services: ["SOCIAL MEDIA MANAGEMENT", "CONTENT CREATION", "AD MANAGEMENT", "ANALYTICS"],
      description: "Complete social media management to grow your online presence...",
    },
    "combo-packages": {
      title: "Combo Packages",
      price: "Custom",
      art: "/packages/trophycupaward.png",
      features: [
        "Multiple Services Combined",
        "Custom Package Options",
        "Discounted Pricing",
        "Dedicated Account Manager",
        "Priority Support",
        "Flexible Terms",
        "Scalable Solutions",
        "Comprehensive Strategy",
        "Integrated Services",
        "Best Value",
      ],
      services: ["CUSTOM SOLUTIONS", "MULTI-SERVICE PACKAGES", "DEDICATED SUPPORT", "FLEXIBLE PLANS"],
      description: "Custom combo packages combining multiple services for maximum value...",
    },
  };

  const currentPricing = pricingTiers[activeTab];

  // Growth process steps
  const processSteps = [
    { number: 1, label: "DISCOVERY & BRIEFING" },
    { number: 2, label: "SCRIPTWRITING & STORYBOARDING" },
    { number: 3, label: "VISUAL DESIGN & STYLE FRAMES" },
    { number: 4, label: "VOICEOVER & AUDIO SELECTION" },
    { number: 5, label: "ANIMATION & MOTION EDITING" },
    { number: 6, label: "FINAL REVIEW & DELIVERY" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#EA7BBF]">
        {/* Content container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[40vh] flex flex-col items-center justify-center text-center py-12 md:py-16">
            <h1
              className="leading-[.95] font-black uppercase text-[36px] sm:text-[48px] lg:text-[66px] text-white mb-8"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              Pricing
            </h1>

            <Link
              href="/contact"
              aria-label="Get started"
              className="inline-block rounded-xl px-8 py-4 font-bold text-white bg-[#FFD350] shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-200 text-base sm:text-lg"
            >
              Let's Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-[#1d1d1d] py-8 overflow-hidden">
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
          <div className="relative h-[80px] sm:h-[100px] overflow-hidden">
            <div className="absolute inset-0 flex items-center animate-marquee-x whitespace-nowrap">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#EA7BBF] mr-12 inline-block">
                SOLUTIONS THAT DRIVE{" "}
                <span className="text-[#FFD350]">SUCCESS</span> SMART SOLUTIONS THAT DRIVE SUCCESS
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#EA7BBF] mr-12 inline-block">
                SOLUTIONS THAT DRIVE{" "}
                <span className="text-[#FFD350]">SUCCESS</span> SMART SOLUTIONS THAT DRIVE SUCCESS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="bg-[#1d1d1d] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { key: "website", label: "Website" },
              { key: "e-commerce", label: "E- Commerce" },
              { key: "branding", label: "Branding" },
              { key: "video-animation", label: "Video Animation" },
              { key: "seo", label: "SEO" },
              { key: "smm-package", label: "SMM PACKAGE" },
              { key: "combo-packages", label: "COMBO PACKAGES" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-200 ${activeTab === tab.key
                    ? "bg-[#FFD350] text-black shadow-lg"
                    : "bg-[#EA7BBF] text-white hover:opacity-90"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card and Services Section */}
      <section className="bg-[#1d1d1d] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {activeTab === "website" ? (
            // Website Packages Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {websitePackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-black mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-black">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-black/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-black">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : activeTab === "e-commerce" ? (
            // E-Commerce Packages Grid
            <div className="space-y-8">
              {/* First Row: 3 packages */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {ecommercePackages.slice(0, 3).map((pkg, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col"
                  >
                    {/* Title */}
                    <h2
                      className="text-xl sm:text-2xl font-black uppercase text-center text-black mb-2"
                      style={{ fontFamily: "Recursive, sans-serif" }}
                    >
                      {pkg.title}
                    </h2>

                    {/* Price */}
                    <div className="text-center mb-4">
                      <span className="text-3xl sm:text-4xl font-bold text-black">
                        {pkg.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className="text-black/70 text-sm text-center mb-6 leading-relaxed"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {pkg.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                      {pkg.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start text-black">
                          <svg
                            className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Buy Now Button */}
                    <Link
                      href="/contact"
                      className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                    >
                      Buy Now
                    </Link>
                  </div>
                ))}
              </div>

              {/* Second Row: Automated/Interactive package spanning 3 columns */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {ecommercePackages.slice(3).map((pkg, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col lg:col-span-3"
                  >
                    {/* Title */}
                    <h2
                      className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-center text-black mb-2"
                      style={{ fontFamily: "Recursive, sans-serif" }}
                    >
                      {pkg.title}
                    </h2>

                    {/* Price */}
                    <div className="text-center mb-4">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                        {pkg.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className="text-black/70 text-sm lg:text-base text-center mb-6 leading-relaxed"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {pkg.description}
                    </p>

                    {/* Features List - 3 columns on large screens */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                      {pkg.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-start text-black">
                          <svg
                            className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Buy Now Button */}
                    <Link
                      href="/contact"
                      className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base lg:text-lg mt-auto text-center block"
                    >
                      Buy Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === "branding" ? (
            // Branding Packages Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {brandingPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-black mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-black">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-black/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-black">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : activeTab === "video-animation" ? (
            // Video Animation Packages Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {videoAnimationPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-black mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-black">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-black/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-black">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : activeTab === "seo" ? (
            // SEO Packages Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {seoPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-black mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-black">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-black/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-black">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : activeTab === "smm-package" ? (
            // SMM Packages Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {smmPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-black mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-black">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-black/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-black">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : activeTab === "combo-packages" ? (
            // Combo Packages Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {comboPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col"
                >
                  {/* Title */}
                  <h2
                    className="text-xl sm:text-2xl font-black uppercase text-center text-black mb-2"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-black">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-black/70 text-sm text-center mb-6 leading-relaxed"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8 flex-grow max-h-[500px] overflow-y-auto">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-black">
                        <svg
                          className="w-5 h-5 mr-2 text-[#EA7BBF] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buy Now Button */}
                  <Link
                    href="/contact"
                    className="w-full bg-[#EA7BBF] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-base mt-auto text-center block"
                  >
                    Buy Now
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            // Other tabs - Original layout
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Pricing Card */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
                {/* Illustration */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <Image
                      src={currentPricing.art}
                      alt={currentPricing.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h2
                  className="text-2xl sm:text-3xl font-black uppercase text-center text-black mb-4"
                  style={{ fontFamily: "Recursive, sans-serif" }}
                >
                  {currentPricing.title}
                </h2>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-black">
                    {currentPricing.price}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {currentPricing.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-black">
                      <svg
                        className="w-5 h-5 mr-3 text-[#EA7BBF] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Buy Now Button */}
                <Link
                  href="/contact"
                  className="w-full bg-[#EA7BBF] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#d66aa8] transition-colors duration-200 text-lg text-center block"
                >
                  Buy Now
                </Link>
              </div>

              {/* Right: Services Section */}
              <div className="flex flex-col justify-center">
                {/* Title with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#FFD350] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">•</span>
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-black uppercase text-white"
                    style={{ fontFamily: "Recursive, sans-serif" }}
                  >
                    {currentPricing.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="text-white/80 mb-6 leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {currentPricing.description}
                </p>

                {/* Services List */}
                <div className="space-y-3">
                  {currentPricing.services.map((service: string, index: number) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                    >
                      <span className="text-white uppercase font-semibold text-sm sm:text-base">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Our Smooth Process Section */}
      <section className="bg-[#1d1d1d] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-center mb-12"
            style={{ fontFamily: "Recursive, sans-serif" }}
          >
            Our Smooth Process
          </h2>

          {/* Process Steps Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#FFD350] rounded-full px-4 sm:px-6 py-4 flex items-center gap-4"
                style={{ fontFamily: "Recursive, sans-serif" }}
              >
                {/* Pink circular number badge */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#EA7BBF] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xl sm:text-2xl">
                    {step.number}
                  </span>
                </div>
                {/* Step label */}
                <span className="text-black font-black uppercase text-xs sm:text-sm lg:text-base">
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Description Text */}
          <p
            className="text-white/80 text-center max-w-3xl mx-auto mb-8 leading-relaxed text-sm sm:text-base"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            STARTING WITH THE SIMPLEST ACT OF MAKING SOMETHING BEAUTIFULLY SMOOTH AND COLLABORATIVE, WE BELIEVE GREAT ANIMATION BEGINS WITH A GREAT WORKFLOW. OUR PRODUCTION PROCESS IS DESIGNED FOR CLARITY, CREATION, AND CONSISTENCY. YET, IT INVOLVES THE WAY YOU ARE FROM THE FIRST CONCEPT TO THE FINAL DELIVERY—IT'S JUST AS MUCH FUN GOING AS THE RESULT.
          </p>

          {/* Get Started Button */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block rounded-xl px-8 py-4 font-bold uppercase text-white bg-[#EA7BBF] shadow-[0_10px_0_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-200 text-base sm:text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#1d1d1d] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Phone Illustration */}
            <div className="mb-8">
              <Image
                src="/telephone.png"
                alt="Contact us"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-4"
              style={{ fontFamily: "Recursive, sans-serif" }}
            >
              Get in touch
            </h2>

            {/* Subtext */}
            <p
              className="text-white/80 mb-8 text-sm sm:text-base"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              I'll get back to you within 24hrs
            </p>

            {/* Get Started Button */}
            <Link
              href="/contact"
              className="inline-block rounded-xl px-8 py-4 font-bold text-black bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200 text-base sm:text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

