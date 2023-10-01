import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}
