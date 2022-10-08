import React, { useContext } from 'react';
import AboutMe from './components/AboutMe/AboutMe'
import Homepage from './components/Homepage/Homepage';
import PageContext from './store/page-context'

import ContactMe from './components/ContactMe/ContactMe'

function App() {
  const pageCtx = useContext(PageContext)
  console.log(pageCtx)
  return (
    <PageContext.Provider>
{pageCtx.selectedPage === 'Home Page' && <Homepage />}
      {pageCtx.selectedPage === 'About Me' && <AboutMe />}
      {pageCtx.selectedPage === 'Projects' && <AboutMe />}
      {pageCtx.selectedPage === 'Contact Me' && <ContactMe />}
      </PageContext.Provider>
  );
}

export default App;
