// Using jQuery
var App = {
  todo: {}
}

App.TodoModule = (function () {
  return {
    initListComponent: function (query) {
      var _rootEl = $('div'+query);
      content = "<input placeholder='Add item here' type='text' name='item'> " +
      "<button class='add'>Add Item</button><div><ul class='w3-ul'></ul></div>";
      _rootEl[0].innerHTML = content;

      // Attaching handler for 'click' event to list element
      _rootEl.on('click', 'li', function () {
        $(this).remove();
      });

      // Attaching 'click' handler to the button
      _rootEl.on('click', 'button', _addItem);

      function _addItem() {

      }
    }
  }
}) ();

$(document).ready(function(){
  App.TodoModule.initListComponent('#main-container')
});