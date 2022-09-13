// selecting the element
document.getElementById('btn').addEventListener('click',loadDate);

function loadDate(){
    // create the xhr object
    const xhr = new XMLHttpRequest();

    // open method (type of the request. url of data)
    xhr.open('Get','data_02.txt',true);

    // load response
    xhr.onload = function (){
        // console.log(xhr.readyState);
        // // console.log(this.responseText);

        if(this.status ===200){
            document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`
        }
    }
    xhr.send();
}

// ready state value:
// 0. request not initialize
// 1. server connection
// 2. request received
// 3. processing the response
// 4. request finished and response is ready

// HTTP Status:
// 200: ok
// 403: forbidden
// 404: not found
