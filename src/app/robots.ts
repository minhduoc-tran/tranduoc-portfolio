import type { MetadataRoute } from 'next'

import envConfig from '@/config/env.config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/sitemap.xml`,
  }
}
