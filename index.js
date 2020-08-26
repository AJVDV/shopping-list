function createItem(){
    /*define a function that will create a new item with the text that was entered in the box*/
    $('#js-shopping-list-form').submit(function(event) {
        //make sure that the form does not try to submit data to server (we don't need that for this)
        event.preventDefault();
        //have the event find the text in the textbox on click
        const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
        //add this item to the list with buttons, with the entered text as the item entry
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${userTextElement.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
      //empty the textbox after new entry is created
      userTextElement.val("");
    });
};
//currently none of this code functions...



/*create a function to cross out the text in an item whose check button is clicked */
function crossOut(){
    /*have jQuery listen for the click on the check button*/
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        /*add the css class to the span with text that puts a strike through the text on that item*/
        //first acknowledge current targeted item (the list item), then toggle the class that does strike through
        $(this).closest('div').siblings('span').toggleClass('shopping-item__checked');
    });
};


/*create a function that will delete an item when the delete button is clicked*/
function removeItem(){
    //have it listen for the click of the delete button
    $('.shopping-list').on('click','.shopping-item-delete', function(event) {
        //remove the item for which the delete button is clicked
        $(this).closest("li").remove();
    });
};

$(createItem); 
$(crossOut);
$(removeItem);