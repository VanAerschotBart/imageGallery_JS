
window.onload = function() {
    
    //alert if JS turned off
	var noScript = document.getElementById('noscript');
    noScript.style.display = "none";
    
    var images = document.getElementsByClassName('screenshot');  //array containing the images
    var blocks = document.getElementsByClassName('toggle');      //array containing the divs containing the images
    var amount = images.length;
    
    //giving every div a button of its own
    for (i = 0; i<amount; i++) {
        images[i].style.display = "block";                       //giving the images a style.display(to work with later on)
        var button = document.createElement('button');           //create a button
        button.innerHTML = "Verberg foto";                       //putting text in the button
        button.id = i;                                           //giving the button an id
        button.className = "knopjes"                             //giving the button a class
        button.addEventListener('click', view);                  //giving the button an event listener
        blocks[i].appendChild(button);                           //button is finished, so we append it to the div
    }
    
    var main = document.getElementById('hoofdknop');             //one button to rule them all
    main.addEventListener('click', viewAll);                     //giving our main button something to do
    var buttons = document.getElementsByClassName('knopjes');    //getting a query of all the created buttons
    var count = 0;                                               //we need something to keep track of the hidden images
    
    //button event listener
    function view() {
        var id = this.id;                                        //getting the id of the clicked button
        var visible = images[id].style.display;                  //getting the current style.display value
        
        if(visible == "block") {                                 
            images[id].style.display = "none";                   //if visible, we hide the image
            buttons[id].innerHTML = "Toon foto";                 //change the text of our button
            count++;                                             //and update te counter, its only purpose of existence
        }
        else {                                                   //or the other way around
            images[id].style.display = "block";
            buttons[id].innerHTML = "Verberg foto";
            count--;
        }
        
        if(count == amount) {                                    //making sure the text of the main button is up to date
            main.innerHTML = "Alle schermen tonen";
        }
        else {
            main.innerHTML = "Alle schermen verbergen";
        }
        
    }
    
    //main button event listener
    function viewAll() {
        
        if(count == amount) {                                    //if count and amount have the same value, it means all images are already hidden
            
            for(i = 0; i<amount; i++) {                          
                images[i].style.display = "block";               //so we make every one of them visible again
                buttons[i].innerHTML = "Verberg foto";           //and change the text of course
            }
            
            count = 0;                                           //since every image is visible again, we need to reset the counter
            main.innerHTML = "Alle schermen verbergen";          //let's not forget about the text of our main button of course  
        }
        else {                                                   //and the other way around
            
           for(i = 0; i<amount; i++) {
                images[i].style.display = "none";
                buttons[i].innerHTML = "Toon foto";
            } 
            
            count = amount;
            main.innerHTML = "Alle schermen tonen";
        }
        
    }
    
}

//VAN AERSCHOT INDUSTRIES JS BRANCH
//ALL COPYRIGHTS RESERVED
//
//Quote of the day:
//Tijd voor ne koffie.
//    -Bjorn-