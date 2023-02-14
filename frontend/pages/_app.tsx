import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { WeatherProvider } from "@/lib/context";
import "@/styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <Component {...pageProps} />
      </WeatherProvider>
    </QueryClientProvider>
  );
}
