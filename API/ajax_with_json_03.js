// json stands for javascript object notation
// structured format for representing data, so all
// the computers can understand it
// json is a way of cummuncating data
// json is using key value pairs
// json can work with other languages as well

document.getElementById('btn1').addEventListener('click',loadUser);
document.getElementById('btn2').addEventListener('click',loadUsers);

function loadUser(){
    // create xhr object
    const xhr = new XMLHttpRequest();

    // open method 
    xhr.open('Get','user_03.json',true);

    // onload
    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            // convert  the json obj 
            const user = JSON.parse(this.responseText);
            // console.log(user);

            const output = `
            <ul>
            <li>Id: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Age: ${user.age}</li>
            </ul>`;
            document.getElementById('user').innerHTML=output;
        }
    }
    xhr.send()
}

function loadUsers(){
    // create xhr object
    const xhr = new XMLHttpRequest();

    // open method 
    xhr.open('Get','users_03.json',true);
    // onload
    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            // converting to js object
            const users = JSON.parse(this.responseText);
            // console.log(user);
            let output= '';
            // use forEach loop through an array
            users.forEach(function(user){
                output += `
                <ul>
                <li>Id: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Age: ${user.age}</li>
                </ul>`;
            });
            document.getElementById('users').innerHTML=output;
        }
    }
    xhr.send()
}
