import React from 'react';

const PageContext = React.createContext({
    selectedPage: 'Home Page',
    cardStyling() {
        switch (this.selectedPage) {
            case 'Home Page':
                return 'card-aboveground';
            case 'About Me':
                return 'card-underground';
            case 'Projects':
                return 'card-underwater'
            case 'Contact Me':
                return 'card-boss';
            default:
                return 'card-aboveground'
        }
    }
});

export default PageContext