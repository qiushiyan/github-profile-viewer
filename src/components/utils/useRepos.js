const useRepos = (repos) => {
    let { stars, forks } = repos.reduce((total, repo) => {
        const { stargazers_count, name, forks } = repo
        total.stars[stargazers_count] = { label: name, value: stargazers_count }
        total.forks[forks] = { label: name, value: forks }
        return total
    }, { stars: {}, forks: {} })

    stars = Object.values(stars).slice(-6).reverse()
    forks = Object.values(forks).slice(-6).reverse()
    return { stars, forks }
}

export default useRepos