document.querySelector('.clear-tasks').addEventListener('click',runEvent);

function runEvent(e){
    // console.log('Clicked');

    let val;
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className; //string
    // val = e.target.classList;

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // coordinate event related to the window
    val = e.clientY;
    val = e.clientX;

    // coordinate related to the element
    val = e.offsetY;
    val = e.offsetX;

    
    console.log(val);
}