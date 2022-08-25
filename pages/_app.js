import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import DashboardLayout from '../src/dashboard/layout';
import { ThemeContextProvider } from '../context/themeProvider';

const MyApp = ({ Component, pageProps }) => {
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
