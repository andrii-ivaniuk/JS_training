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
      _rootEl.on('click', 'a', function (e) {
        e.preventDefault();
        $(this).parent().remove();
      });

      // Attaching 'click' handler to the button
      _rootEl.on('click', 'button', _addItem);

      function _addItem() {
        var input_el = _rootEl.find('input');
       if (!/^[a-z0-9]+$/i.test(input_el.val())) {
          input_el.addClass('empty');
          $('#invalid_input').show();
        } else {
          input_el.removeClass('empty');
          _rootEl.find('ul').append('<li>' + input_el.val() +
            '<a href="" class="w3-right w3-margin-right">x</a></li>');
          input_el.val('');
          $('#invalid_input').hide();
        }
      }
    }
  }
}) ();

$(document).ready(function(){
  App.TodoModule.initListComponent('#main-container')
});