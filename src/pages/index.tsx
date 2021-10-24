import Head from 'next/head';
import App from '../app/App';

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Kevin's Portfolio</title>
      </Head>

      <main>
        <App />
      </main>
    </div>
  );
}