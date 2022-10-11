import React, { useContext, Fragment } from 'react';
import AboutMe from './components/AboutMe/AboutMe'
import Homepage from './components/Homepage/Homepage';
import { PageContext } from './store/page-context'
import ContactMe from './components/ContactMe/ContactMe'
import Projects from './components/Projects/Projects'

function App() {
  const [pageSelection] = useContext(PageContext)
  return (
    <Fragment>
      {pageSelection === 'Home Page' && <Homepage />}
      {pageSelection === 'About Me' && <AboutMe />}
      {pageSelection === 'Projects' && <Projects />}
      {pageSelection === 'Contact Me' && <ContactMe />}
    </Fragment>
  );
}

export default App;
