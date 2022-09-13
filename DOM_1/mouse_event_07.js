const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click
// clearBtn.addEventListener('click',runEvent);

// Double click
// clearBtn.addEventListener('dblclick',runEvent);

// Mouse down
// clearBtn.addEventListener('mousedown',runEvent);

// Mouse up
// clearBtn.addEventListener('mouseup',runEvent);

// Mouse enter and leave fires off when we (enter and leave the elements)
// mouse enter
// card.addEventListener('mouseenter',runEvent);

// mouse leave
// card.addEventListener('mouseleave',runEvent);

// mouseover and mouse out fires off for nested element
// mouseover
// card.addEventListener('mouseover',runEvent);

// mouseout
// card.addEventListener('mouseout',runEvent);

// mousemove
card.addEventListener('mousemove',runEvent);



// Event handler
function runEvent(e){
    console.log(`Event Type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    
    document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;
}