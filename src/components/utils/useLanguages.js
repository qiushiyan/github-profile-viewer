const useLanguages = (repos) => {
    // count most used programming languages and their stars
    let languages = repos.reduce((total, repo) => {
        // extract language and stars from repo object
        const { language, stargazers_count } = repo;
        // when language is null, do nothing
        if (!language) return total
        else {
            if (!total[language]) {
                total[language] = { name: language, value: 1, stars: stargazers_count }
            } else {
                total[language] = {
                    ...total[language],
                    value: total[language]["value"] + 1,
                    stars: total[language]["stars"] + stargazers_count
                }
            }
        }
        return total
    }, {})
    // make an array, sort, and only display at most the top 6 languages
    const mostUsedLanguages = Object.values(languages).sort((a, b) => {
        return b.value - a.value
    }).slice(0, 6)

    const mostStarredLanguages = Object.values(languages).sort((a, b) => {
        return b.stars - a.stars
    }).slice(0, 6).map(language => {
        return { ...language, value: language.stars } // rename 'stars' to 'value
    })
    return { mostUsedLanguages, mostStarredLanguages }
}

export default useLanguages





