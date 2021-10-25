import Link from 'next/link'
import BasePageLayout from '../../components/BasePageLayout'
import FooterContainer from '../../components/FooterContainer'
import HeadlineContainer from '../../components/HeadlineContainer'

export default function CatalogOptimization() {
  return (
    <BasePageLayout title="Catalog Optimization">
      <HeadlineContainer
        title="Catalog Optimization"
      />
      <Link href='/'>
        <a>Return Home</a>
      </Link>
      <FooterContainer />
    </BasePageLayout>
  )
}