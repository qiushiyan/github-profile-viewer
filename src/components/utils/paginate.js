const paginate = (followers, followersPerPage = 10) => {
    const followers = followers[0]
    const pages = Math.ceil(followers.length / followersPerPage)
    const followersPaginated = Array.from({ length: pages }, (_, index) => {
        const start = index * followersPerPage;
        return followers.slice(start, start + followersPerPage)
    })
    return followersPaginated
}

export default paginate