import Link from 'next/link'
import { Button, Container } from 'semantic-ui-react'
import BasePageLayout from '../../components/BasePageLayout'
import FooterContainer from '../../components/FooterContainer'
import HeadlineContainer from '../../components/HeadlineContainer'

export default function CatalogOptimization() {
  return (
    <BasePageLayout title="Catalog Optimization">
      <HeadlineContainer
        title="Catalog Optimization"
      >
        <Link href='/'>
          <Button as='a'>Return Home</Button>
        </Link>
      </HeadlineContainer>
      <Container text style={{ paddingTop: 50, paddingBottom: 50 }}>
        <h1>Not all purchases have set pricing</h1>
        <p>
          Most large companies establish an electronic catalog to enforce
          pricing with their suppliers. These catalogs cover most
          or all items, but sometimes they try a new or substitute product.
          These "non-catalog" purchases don't have set pricing, so
          it can change based on market conditions. This is normal!
          It's expected for companies have some "non-catalog" purchases.
        </p>
        <p>
          Now suppose more and more purchases are made "non-catalog",
          reaching millions of dollars. We dive into the details and find
          several line items where the description is very similar to
          descriptions in the catalog. They're not 100% the same so
          we ask to confirm. And yes, they are the same items! Why
          is the company purchasing catalog items as non-catalog?
          They might overpay. Doing spot checking, we find both scenarios
          where the prices do and do not match the catalog.
        </p>
        <h1>The key problems</h1>
        <ol>
          <li>
            Overpaying for some purchases.
          </li>
          <li>
            Don't have the tools to diagnose non-catalog purchases at scale.
          </li>
        </ol>
        <p>
          The first problem was caused by the company's difficult-to-use
          catalog system. It doesn't have a robust search and there aren't
          any pictures, so writing your own description in a non-catalog
          purchase is often easier. I did not focus on solving this issue
          due to the complexity of implemention within several legacy
          systems.
        </p>
        <p>
          The second problem can be solved with text analysis and natural
          language processing. I developed a Python program that identifies
          non-catalog purchases that share a high similarity with existing
          catalog items (i.e. false non-catalog) and flagged them for
          further review.
        </p>
        <h1>Results</h1>
        <p>
          An MVP solution was deployed to analyze one supplier, which resulted
          in 30% increase in catalog utilization. Estimated savings were 2%.
        </p>
      </Container>
      <FooterContainer />
    </BasePageLayout>
  )
}