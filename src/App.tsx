import { RouterProvider } from "react-router-dom";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import routes from "./routes/routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
