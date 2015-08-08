import DS from 'ember-data';

var Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
	
});

export default Todo;