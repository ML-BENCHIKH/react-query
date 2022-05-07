import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Characters from "./components/Characters";
const queryclient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryclient}>
        <Characters />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
