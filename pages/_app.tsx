import 'node_modules/normalize.css'
import 'styles/globals.scss'
import 'styles/utility/index.scss'

function MyApp({ Component, pageProps }: {
    Component: any,
    pageProps: any,
}) {
    return <Component {...pageProps} />
}

export default MyApp
