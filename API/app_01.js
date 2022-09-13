// API: APPLICATION PROGRAMMING INTERFACE

// contract provided by one software to another software
// it usually consist of structured request and structured response

// a set of function and procedures that provide access to the data
// of an operating system, application and others

// sync call
let posts = loadPostSync();

// wait till the post fetch
// do something with post
// do the next thing()

// async call
// use call back function: when we pass on function as a parameter to
// another function
// loadPostAsync(function(){
// ...wait till the post fetch
// ...do something with post
// ...do the next thing()
// });

// most of the Async code that you are going to work with are 
// the part of libraries

// 1. XMLHttpRequest and fetch
// 2. callback function
// 3. promises
// 4. async/await

// Ajax: Async Javascript and XML
// It is a set of web technologies
// Send and receive data async
// does not interfer with the current page loading
// Json has replaced XML in most cases nowadays
// no page reload and its very interactive
// XMLHttpRequest: XHR object
