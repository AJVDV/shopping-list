$(function createItem(){
    /*define a function that will create a new item with the text that was entered in the box*/
    $('#js-shopping-list-form').submit(event => {
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
});
//currently none of this code functions...



/*create a function to cross out the text in an item whose check button is clicked */
$(function crossOut(){
    /*have jQuery listen for the click on the check button*/
    $('ul').on('click', '.shopping-item-toggle', event => {
        /*add the css class to the span with text that puts a strike through the text on that item*/
        //first acknowledge current targeted item, there has to be a way to target the list text instead of button :(
        $('.shopping-item').append("*");
        this.closest('span').toggleClass('.shopping-item_checked');
        //const targetItem = $(event.currentTarget.closest('li'));
        //state that other buttons are not targeted
        //const otherItems = $('.shopping-item').not(targetItem);
        //have the aria pressed state change when the button is pressed
        //const pressedBool = $(targetItem).attr('aria-pressed') === 'True';
        //make it so that it toggles both ways
        //$('.shopping-item').toggleClass('shopping-item_checked');
    });
});


/*create a function that will delete an item when the delete button is clicked*/
$(function removeItem(){
    //have it listen for the click of the delete button
    $('.shopping-list').on('click','shopping-item-delete', event => {
        //remove the item for which the delete button is clicked, need to target entire item instead of button :(
        this.closest("li").remove();
    });
});

$(createItem()); 
$(crossOut());
$(removeClick());