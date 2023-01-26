//Global variable declaration. Getting the container to put the hour by hour layout on and the element which tells me whether something has been saved to local storage.
var mainDivElement = document.querySelector(".container-fluid");
var savedMessageElement = document.getElementById("saved-message");
var now = dayjs(); //Getting the current date from dayjs
//setting up the tracked items abject array
var trackedItems = [{
  hour: 9,
  textValue: ""
}, 
{
  hour: 10,
  textValue: ""
},
{
  hour: 11,
  textValue: ""
},
{
  hour: 12,
  textValue: ""
},
{
  hour: 13,
  textValue: ""
},
{
  hour: 14,
  textValue: ""
},
{
  hour: 15,
  textValue: ""
},
{
  hour: 16,
  textValue: ""
},
{
  hour: 17,
  textValue: ""
}];

//initial function, gets called at the bottom of the js file and sets up the webpage.
function init() {
  // Get stored tracker information from localStorage
  var storedTracker = JSON.parse(localStorage.getItem("trackerItems"));

  // If tracked items were retrieved from localStorage, update the tracker array to it
  if (storedTracker !== null) {
    trackedItems = storedTracker;
  }
  //set up the current day
  $('#currentDay').text(dayjs(now).format("YYYY-MM-DD"));

  //Go through 0 to 8 and create new elements to be displayed in the layout.
  for (var i = 0; i < 9; i++){
    //Create all the new elements for each cycle
    var hourDivElements = document.createElement("div");
    var hourDivTextElements = document.createElement("div");
    var hourTextAreaElements = document.createElement("textarea");
    var hourButtonElements = document.createElement("button");
    var hourButtonTextElements = document.createElement("i");

    //Append the elements to the end of the mainDivElement
    mainDivElement.appendChild(hourDivElements);
    hourDivElements.appendChild(hourDivTextElements);
    hourDivElements.appendChild(hourTextAreaElements);
    hourDivElements.appendChild(hourButtonElements);
    hourButtonElements.appendChild(hourButtonTextElements);
    
    //Set up the class for the hour div elements based on the current hour
    if (dayjs().hour() > (i+9)){
      hourDivElements.setAttribute("class", "row time-block past");
    } else if (dayjs().hour() == (i+9)){
      hourDivElements.setAttribute("class", "row time-block present");
    } else if (dayjs().hour() < (i+9)){
      hourDivElements.setAttribute("class", "row time-block future");
    }
    hourDivElements.setAttribute("id", "hour-"+(i+9));

    //Set up the labels on the left hand side to display the hour.
    hourDivTextElements.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
    hourDivTextElements.setAttribute("data-hour", (i+9));
    if ((i+9) > 12){
      hourDivTextElements.textContent = (i-3) + "PM";
    } else{
      hourDivTextElements.textContent = (i+9) + "AM";
    }
    
    //Set up the area where the user can enter the their appointments and add previously entered in items to the text boxes.
    hourTextAreaElements.setAttribute("class", "col-8 col-md-10 description");
    hourTextAreaElements.setAttribute("id", "textarea-"+(i+9));
    hourTextAreaElements.setAttribute("rows", "3");
    hourTextAreaElements.innerHTML = trackedItems[i].textValue;
    
    //Set up the save buttons and the icons inside them
    hourButtonElements.setAttribute("class", "btn saveBtn col-2 col-md-1");
    hourButtonElements.setAttribute("id", "btn-"+(i+9));
    hourButtonElements.setAttribute("aria-label", "save");
    hourButtonTextElements.setAttribute("class", "fas fa-save");
    hourButtonTextElements.setAttribute("aria-hidden", "true");

    //Add the event listener to each button.
    addEvent(hourButtonElements, hourTextAreaElements, i)
  }
}

//Function to add the event listener to each button. I have this separate from the init function to prevent issues with i constantly being at 17 once the for loop is done. This way, index gets set to i each loop and the events get set up properly.
function addEvent(btn, text, index){
  btn.addEventListener("click", function clicked(){
    console.log(btn);
    console.log(text.value);
    //If the user has not added anything into the text box, an alert will pop up with the message below. It will then exit the function.
    if(text.value === ""){
      window.alert("Please fill out informaiton in the text box before pressing the save button");
      return;
    }
    //Update the trackedItems array with the new values
    trackedItems[index].textValue = text.value;
    //Call the saveEnteredItems function to save the updated items into local storage and display the saved confirmation button on the top of the page.
    saveEnteredItems();
  });
}

//Save the updated items into local storage and display the saved confirmation button on the top of the page.
function saveEnteredItems(){
  localStorage.setItem("trackerItems", JSON.stringify(trackedItems));
  savedMessageElement.textContent = "Appointment added to local storage";
}

//Call init to initalize the web page.
init();