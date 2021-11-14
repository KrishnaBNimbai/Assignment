let contentDiv = document.getElementById("content")
let url = "https://api.github.com/users"
const responseFromFetch = fetch(url).then(reponse =>){
fetch(url).then(response => {
return response.json()
}).then(data => {

    console.log(data)
    contentDiv,innerHTML = data[0].login+ data[0].node_id
})

