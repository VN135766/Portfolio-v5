import React, { useContext } from 'react';
import AboutMe from './components/AboutMe/AboutMe'
import PageContext from './store/page-context'

function App() {
  const pageCtx = useContext(PageContext)
  console.log(pageCtx)
  return (
    <PageContext.Provider>
      <AboutMe />
      </PageContext.Provider>
  );
}

export default App;
