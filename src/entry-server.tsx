import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { getMeta, headTags, allRoutes, sitemapRoutes, NOT_FOUND_META } from './seo/meta'
import { company } from './data/company'

export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  const meta = url === '/404' ? NOT_FOUND_META : getMeta(url)
  return { html, head: headTags(meta) }
}

export { allRoutes, sitemapRoutes }
export const siteUrl = company.siteUrl
