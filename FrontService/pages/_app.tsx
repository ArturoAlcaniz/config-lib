import { RouteGuard } from '@components/Guards/RouteGuard'
import '@styles/main.css'
import '@utils/icons.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <RouteGuard>
            <Component {...pageProps} />
        </RouteGuard>
    )
}