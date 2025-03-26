import { NavigationContainer } from '@react-navigation/native'
import { Router } from './Router'
import { QueryClient, QueryClientProvider } from 'react-query'

export const App = () => (
  <QueryClientProvider client={new QueryClient()}>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  </QueryClientProvider>
)
