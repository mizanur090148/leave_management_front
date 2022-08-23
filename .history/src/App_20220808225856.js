
@import "~bootstrap/scss/bootstrap";
import "./App.css";
import Routes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query-devtools'
const queryClient = new QueryClient(

);

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Routes />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
  );
}

export default App;
