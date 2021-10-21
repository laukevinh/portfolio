import React from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import ContactsContainer from './components/ContactsContainer';
import FooterContainer from './components/FooterContainer';
import HeadlineContainer from './components/HeadlineContainer';
import ProjectsContainer from './components/ProjectsContainer';

function App() {
  return (
    <Container fluid>
      <HeadlineContainer />
      <ProjectsContainer />
      <ContactsContainer />
      <FooterContainer />
    </Container>
  );
}

export default App;
