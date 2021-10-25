import { Button } from 'semantic-ui-react';
import BasePageLayout from '../components/BasePageLayout';
import ContactsContainer from '../components/ContactsContainer';
import FooterContainer from '../components/FooterContainer';
import HeadlineContainer from '../components/HeadlineContainer';
import ProjectsContainer from '../components/ProjectsContainer';

export default function Home() {

  return (
    <BasePageLayout title="Kevin's Portfolio">
      <HeadlineContainer
        title="Hi, I'm Kevin Lau"
        description="Software Development Engineer"
      >
        <Button
          size='large'
          as='a'
          href='#projects'
        >
          View my work
        </Button>
        <Button
          size='large'
          as='a'
          href='#contacts'
        >
          Contact me
        </Button>
      </HeadlineContainer>
      <ProjectsContainer />
      <ContactsContainer />
      <FooterContainer />
    </BasePageLayout>
  );
}