import { AppRouter } from '@app/providers/AppRouter'
import { AuthProvider } from './providers/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <AppRouter />
            </QueryClientProvider>
        </AuthProvider>
    )
}

export default App
