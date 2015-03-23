Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function() {
    // additional child routes
    this.route('active');
    this.route('completed');
  });
});


Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});