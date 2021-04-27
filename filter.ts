function filter_endpoint(str)
{let url = new URL('https://api.publicapis.org/categories');
    let headers = {
        'Accept': '*'
    };
    fetch(url.toString(), { headers }).then(response => {
        response.json().then(jsonRes => {
            debugger;
            console.log(jsonRes.filter(f => f.startsWith(str)));
        })       
    })   
}