import Link from 'next/link'
import { Button, Container } from 'semantic-ui-react'
import BasePageLayout from '../../components/BasePageLayout'
import FooterContainer from '../../components/FooterContainer'
import HeadlineContainer from '../../components/HeadlineContainer'

export default function FinDB() {
  return (
    <BasePageLayout title="FinDB">
      <HeadlineContainer
        title="FinDB"
        description="Analyzing Stock and Options Activity of the U.S. House of Representatives"
      >
        <Link href='/'>
          <Button as='a'>Return Home</Button>
        </Link>
      </HeadlineContainer>
      <Container text style={{ paddingTop: 50, paddingBottom: 50 }}>
        <h1>The Smart Money</h1>
        <p>
          Members of the U.S. House of Representatives design policies
          and agendas that significantly affect the broader economy.
          Some also trade stock and options (or their spouse or children),
          with results that outperform benchmark indices like SnP. They
          are required by law to disclose those transactions to the public,
          which might give insights to what the smart money is doing.
        </p>
        <h1>The key problems</h1>
        <ol>
          <li>
            Although available to the public, the financial disclosures data
            isn't in an accessible nor convenient format.
          </li>
        </ol>
        <p>
          I developed a web API service that crawls, ingests, and persists the
          financial disclosures data. This is repackaged and exposed via API
          to a front-end React app, allowing users to easily search and analyze
          what the House Representatives are trading.
        </p>
        <h1>Results</h1>
        <p>
          A REST API web service backend that supports a single page React application.
        </p>
      </Container>
      <FooterContainer />
    </BasePageLayout>
  )
}