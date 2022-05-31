import Card from './card';
import classes from './availableMeals.module.css'
import {RepoInfo} from './repoCard'
import { useState, useEffect } from 'react';

import {getGitHubInfo} from '../services'

export const GitRepoInfo = ()=>{ 

    // call the github api 
    // go through the array and display the info of the repo owners

    const [gitInfo, setGitInfo] = useState([])

    const getGitInfo = async () =>{
       const res = await getGitHubInfo()
       console.log(res.data)
       setGitInfo(res.data)
    }

    useEffect(()=>{
        getGitInfo()
    },[])
     
    return (
        
            <ul class ={classes.mealList}>
                {gitInfo.map((repo, idx )=><RepoInfo 
                    key = {idx}
                    name = {repo.name} 
                    desc = {repo.description}
                    avatar = {repo.avatar}
                    stars = {repo.stars}
                    issues = {repo.issues}
                    days = {repo.days}
                    />)}
            </ul>
        </Card>
    )
}
