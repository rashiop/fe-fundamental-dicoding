import '../component/club-list.js';
import '../component/search-bar.js';

import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector( "search-bar" );
    const clubListElement = document.querySelector( "club-list" );

    const onButtonSearchClicked = async () => {
        try {
            const filteredClubs = await DataSource.searchClub( searchElement.value );
            console.log( 'value', filteredClubs )
            renderResult( filteredClubs )
        } catch ( ex ) {
            fallbackResult( ex );
        }
    };

    const fallbackResult = ( message ) => {
        clubListElement.renderError( message )
    };

    const renderResult = results => {
        clubListElement.clubs = results;
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;