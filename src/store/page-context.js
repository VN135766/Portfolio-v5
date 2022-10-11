import React, { useState } from 'react';

export const PageContext = React.createContext({
    pageSelection:'Home Page'
});

const PageContextProvider = (props) => {
    const [pageSelection, setPageSelection] = useState('Home Page')
    return (
        <PageContext.Provider value={[pageSelection, setPageSelection]}>
            {props.children}
        </PageContext.Provider>
    )
}


export default PageContextProvider