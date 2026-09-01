import { NotFoundPage } from '@payloadcms/next/views'
import configPromise from '@/payload.config'
const NotFound = () => NotFoundPage({ config: configPromise })
export default NotFound
