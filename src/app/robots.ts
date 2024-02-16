import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/en', '/fr', '/fr/about', '/fr/projects', '/fr/contact', '/en/about', '/en/projects', '/en/contact'],
      disallow: '/api',
    },
    sitemap: 'https://jerenie-cyrille.com/sitemap.xml',
  }
}
