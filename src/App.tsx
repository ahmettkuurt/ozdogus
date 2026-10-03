import { Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { FleetPage } from './pages/FleetPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { AboutPage } from './pages/AboutPage'
import { QuotePage } from './pages/QuotePage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="hizmetler" element={<ServicesPage />} />
        <Route path="hizmetler/:slug" element={<ServiceDetailPage />} />
        <Route path="makine-parki" element={<FleetPage />} />
        <Route path="projeler" element={<ProjectsPage />} />
        <Route path="hakkimizda" element={<AboutPage />} />
        <Route path="teklif-al" element={<QuotePage />} />
        <Route path="iletisim" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
