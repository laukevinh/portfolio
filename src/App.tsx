import React from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import ContactsContainer from './components/ContactsContainer';
import HeadlineContainer from './components/HeadlineContainer';
import ProjectsContainer from './components/ProjectsContainer';

function App() {
  return (
    <Container fluid>
      <HeadlineContainer />
      <ProjectsContainer />
      <ContactsContainer />
    </Container>
  );
}

export default App;
