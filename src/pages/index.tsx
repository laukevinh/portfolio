import Head from 'next/head';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Kevin's Portfolio</title>
      </Head>

      <main>
        <h1>
          Kevin's Portfolio
        </h1>
        <ul>
          <li>
            <Link href='/details/catalog-optimization'>
              <a>Catalog Optimization</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}