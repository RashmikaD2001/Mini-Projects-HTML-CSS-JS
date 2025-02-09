const newUser = {
    name: "Maria",
    job: "Teacher"
}

// Post Request
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
}).then(res => {
    if (!res.ok) {
        console.log("Error")
        return
    }
    
})
    .then(data => {
        console.log("Success")
    })
    .catch(error => {
        console.log(error);
    })

// GET Request
fetch('https://reqres.in/api/users')
    .then(res => {
        if (!res.ok) {
            console.log("Error")
            return;
        }
        return res.json();
    })
    .then(data => {
        console.log(data.data[2].first_name)
    })
    .catch(error => {
        console.log(error);
    })

// PUT Request
fetch('https://reqres.in/api/users/1',{
    method:'PUT',
    headers:{
        'Content-Type': 'applicatio/json'
    },
    body: JSON.stringify(newUser)
}).then(res => {
    if(!res.ok){
        console.log("Error");
        return;
    }

    return res.json();
}).then(data => {
    console.log("Success")
}).catch(error => {
    console.log(error)
})

// Delete Request
fetch('https://reqres.in/api/users/1',{
    method: 'DELETE'
}).then(res => {
    if(!res.ok){
        console.log("Error")
        return
    }
    return res.json();
}).then(data => {
    console.log('Sucess');
}).catch(error => {
    console.log(error);
})

