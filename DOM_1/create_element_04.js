// we can construct the element from the scrach 

// create element
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Add id
li.id='new-item';

// create text node and append it
li.appendChild(document.createTextNode('New item'));

// create link 
const link = document.createElement('a');

// Add class
link.className = 'delete-item secondary-content';

// Add html icon 
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append the link into li
li.appendChild(link);

// Append the li as child of ul
document.querySelector('ul').appendChild(li);
