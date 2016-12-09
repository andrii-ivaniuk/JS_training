var App = {
  todo: {}
}
App.TodoModule = (function () {
  return {
    initListComponent: function (query) {
      var _rootEl;
      var _ul_obj;
      _rootEl = document.getElementById(query);
      content = "<input placeholder='Add item here' type='text' name='item'> " +
      "<button>Add Item</button><div><ul></ul></div>";
      _rootEl.innerHTML = content;
      _ul_obj = _rootEl.getElementsByTagName('ul') [0];
      _ul_obj.addEventListener('click', _removeItem);
      _rootEl.getElementsByTagName('button') [0].addEventListener('click', _addItem)
      function _addItem() {
        var input_el = _rootEl.getElementsByTagName('input') [0];
        if (!input_el.value) {
          alert('Please provide an item.');
        } else {
          var el = document.createElement('li');
          var text_node = document.createTextNode(input_el.value);
          el.appendChild(text_node);
          _rootEl.getElementsByTagName('ul') [0].appendChild(el);
          input_el.value = '';
        }
      }
      function _removeItem(e) {
        this.removeChild(e.target);
      }
    }
  }
}) ()
App.TodoModule.initListComponent('main-container')