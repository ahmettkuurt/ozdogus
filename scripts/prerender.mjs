// Build sonrası: her rota için tam içerikli statik HTML, sitemap.xml ve robots.txt üretir.
// Sayfalar "yol.html" olarak yazılır (ör. hizmetler/yikim.html). Cloudflare Pages bunları sondaki "/" olmadan
// (/hizmetler/yikim) sunar; bu da canonical adreslerle birebir aynıdır. "yol/index.html" olsaydı "/" eklenirdi.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const { render, allRoutes, sitemapRoutes, siteUrl } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href)
const template = await readFile(join(dist, 'index.html'), 'utf8')

const page = (url) => {
  const { html, head } = render(url)
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html)
}

const routes = allRoutes()
for (const url of routes) {
  const file = url === '/' ? join(dist, 'index.html') : join(dist, `${url.slice(1)}.html`)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, page(url))
  console.log(`  prerender  ${url}`)
}
await writeFile(join(dist, '404.html'), page('/404'))
console.log('  prerender  /404 (404.html)')

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes()
  .map((u) => {
    const priority = u === '/' ? '1.0' : u === '/teklif-al' || u.startsWith('/hizmetler') ? '0.9' : '0.7'
    return `  <url><loc>${siteUrl}${u === '/' ? '/' : u}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`
  })
  .join('\n')}
</urlset>
`
await writeFile(join(dist, 'sitemap.xml'), sitemap)
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
console.log(`  sitemap.xml (${sitemapRoutes().length} adres), robots.txt`)

await rm(ssrDir, { recursive: true, force: true })
