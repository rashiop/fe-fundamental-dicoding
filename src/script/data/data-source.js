class DataSource {
    searchClub(keyword) {
        const filteredClubs = clubs.filter((club) => club.name.toUpperCase().includes(keyword.toUpperCase()));

        return new Promise((resolve, reject) => {
            if (filteredClubs.length) {
                resolve(filteredClubs)
            } else {
                reject(keyword + " is not found")
            }
        })
    }
}