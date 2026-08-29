import { AppRouter } from '@app/providers/AppRouter'
import { AuthProvider } from './providers/AuthProvider'

function App() {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}

export default App
