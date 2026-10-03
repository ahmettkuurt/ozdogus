import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { absUrl, getMeta } from './meta'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

/** İstemci tarafı gezinmede <head> etiketlerini prerender çıktısıyla aynı tutar. */
export function HeadSync() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getMeta(pathname)
    const url = absUrl(meta.path)
    document.title = meta.title
    setMeta('name', 'description', meta.description)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', meta.title)
    setMeta('name', 'twitter:description', meta.description)

    document.head.querySelector('link[rel="canonical"]')?.remove()
    document.head.querySelector('meta[name="robots"]')?.remove()
    if (meta.noindex) {
      setMeta('name', 'robots', 'noindex, follow')
    } else {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = url
      document.head.appendChild(link)
    }

    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((s) => s.remove())
    for (const j of meta.jsonLd) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.textContent = JSON.stringify(j)
      document.head.appendChild(s)
    }
  }, [pathname])

  return null
}
