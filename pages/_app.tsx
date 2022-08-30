import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import DashboardLayout from '../src/dashboard/layout';
import { ThemeContextProvider } from '../context/themeProvider';
import type { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next JS</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <ThemeContextProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </ThemeContextProvider>
    </>
  );
};

export default MyApp;
