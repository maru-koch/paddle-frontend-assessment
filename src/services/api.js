import axios from 'axios'

const getGitHubInfo= async ()=>{
    const url = "https://api.github.com/search/repositories?q=created:>2022-05-30&sort=stars&order=desc"
    const res = await axios.get(url, payload)
    console.log(res.data)
}