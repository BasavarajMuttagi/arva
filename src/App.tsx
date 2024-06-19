import { RouterProvider } from "react-router-dom";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import routes from "./routes/routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <ReactQueryDevtools buttonPosition="bottom-left"/>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
