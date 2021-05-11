
class DataSource {
    static searchClub ( keyword ) {
        const baseUrl = 'https://www.thesportsdb.com/api/v1/json/1';

        return fetch( `${baseUrl}/searchteams.php?t=${keyword}` )
            .then( response => response.json() )
            .then( responseJson => {
                if ( responseJson.teams ) {
                    Promise.resolve( responseJson.teams )
                } else {
                    Promise.reject( `${keyword} is not a function` )
                }
            } )
            .catch( () => `${keyword} is not found` )
    }
}

export default DataSource