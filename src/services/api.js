import axios from 'axios'

export const getGitHubInfo= async ()=>{
    const url = "https://api.github.com/search/repositories?q=created:>2022-05-30&sort=stars&order=desc"
    const res = await axios.get(url)
    return res.data.items
}

export const getIssues= async (url)=>{
    const res = await axios.get(url)
    return res
}