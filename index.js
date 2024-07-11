require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

const githubData = {
    
        "login": "Nanditasharma70",
        "id": 127968870,
        "node_id": "U_kgDOB6CmZg",
        "avatar_url": "https://avatars.githubusercontent.com/u/127968870?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Nanditasharma70",
        "html_url": "https://github.com/Nanditasharma70",
        "followers_url": "https://api.github.com/users/Nanditasharma70/followers",
        "following_url": "https://api.github.com/users/Nanditasharma70/following{/other_user}",
        "gists_url": "https://api.github.com/users/Nanditasharma70/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Nanditasharma70/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Nanditasharma70/subscriptions",
        "organizations_url": "https://api.github.com/users/Nanditasharma70/orgs",
        "repos_url": "https://api.github.com/users/Nanditasharma70/repos",
        "events_url": "https://api.github.com/users/Nanditasharma70/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Nanditasharma70/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 11,
        "public_gists": 0,
        "followers": 1,
        "following": 3,
        "created_at": "2023-03-15T15:01:11Z",
        "updated_at": "2024-06-13T16:39:56Z"
      }


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Nandita sharma')
})
app.get ('/login',(req,res)=>{
    res.send(
        ('<h1>Please login at Nandita sharma Page</h1>')
    )
})
app.get('/youtube', (req, res) => {
    res.send('Nandita sharma')
})
app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})