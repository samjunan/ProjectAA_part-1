const name = 'sara';
const age = 30;
const job = 'actor';
const city = 'Kuala Lumpur';
let output;

// without template literal
output = '<ul>' +
'<li>Name: ' + name + '</li>'+
'<li>Age: ' + age + '</li>'+
'<li>Job: ' + job + '</li>'+
'<li>City: ' + city + '</li>'+
'</ul>'
// template literals
output = `<ul></ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
</ul>`;

document.body.innerHTML=output;