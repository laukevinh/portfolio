import Head from 'next/head';
import { ReactNode } from 'react';
import { Container } from 'semantic-ui-react';

interface IProps {
  title: string;
  children?: ReactNode;
}

function BasePageLayout(props: IProps) {
  const { title, children } = props;
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Container fluid>
          {children}
        </Container>
      </main>
    </div>
  )
}

export default BasePageLayout;