
import classes from './gitRepoInfo.module.css'
import {RepoCard} from './repoCard'
import { useState, useEffect } from 'react';

import {getGitHubInfo, getIssues} from '../../../services'

export const GitRepoInfo = ()=>{ 

    // call the github api 
    // go through the array and display the info of the repo owners

    const [gitInfo, setGitInfo] = useState([])
    const [issue, setIssue] = useState(0)


    const getGitInfo = async () =>{
       const res = await getGitHubInfo()
       console.log(res)
       setGitInfo(res)
    }

    const getIssue = async(url)=>{
        const issue = await getIssues(url)
        setIssue(issue)
        console.log(issue)
    }

    useEffect(()=>{
        getGitInfo()
    },[])
     
    return (
        
            <ul class ={classes.mealList}>
                {gitInfo.map((repo, idx )=><RepoCard 
                    key = {idx}
                    userName = {repo.owner.login} 
                    repoName = {repo.name.toLowerCase()} 
                    desc = {repo.description}
                    avatar = {repo.owner.avatar_url}
                    stars = {repo.size}
                    issues = {repo.name}
                    days = {repo.days}
                    count ={idx + 1 }
                    />)}
            </ul>
     
    )
}
