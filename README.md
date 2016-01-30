# Todomvc-embercli

Following the following [todomvc tutorial](http://www.thetechcofounder.com/getting-started-with-ember-js-using-ember-cli/).

The objective is to practice creating a rudimentary app in emberJS with the intention of hooking it up to Rails for persistent data.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

# Todo MVC: Ember Edition

##Generate Ember App
Generate a new `Ember` app:
```zsh
ember new todomvc-embercli
cd todomvc-embercli
```
Open `bower.js` file and change the follwing to version 2.0
```json
"ember": "2.0",
"ember-data": "2.0",
```

In your terminal, in your app root directory, run
```zsh
bundle install
```
Choose the version of Ember that best suits your app.

##Routes
In `app/router.js', add route for home to point to `todos`
```javascript
import Ember from 'ember';  
import config from './config/environment';

var Router = Ember.Router.extend({  
  location: config.locationType
});

Router.map(function() {  
    this.route('todos', { path: '/' });
});

export default Router;  
```

Edit `app/templates/application.hbs` to add a header and a footer
```hbs
<section id="todoapp">  
    <header id="header">
        <h1>todos</h1>
    </header>

    {{outlet}}
</section>

<footer id="info">  
    <p>Double-click to edit a todo</p>
</footer> 
```

###Todo Route
```zsh
touch app/templates/todos.hbs
touch app/routes/todos.js
```
........incomplete
## Styling
Copy the styles from [here](https://raw.githubusercontent.com/brownie3003/ember-cli-todo-mvc/master/app/styles/app.css) and paste them into the `app/styles/app.css` file.

Update the HTMl structure in `app/templates/todos.hbs` to match:
```hbs
<input type="text" id="new-todo" placeholder="What needs to be done?" />

<section id="main">  
    <ul id="todo-list">
        {{#each model as |todo|}}
            <li class="completed">
                <input type="checkbox" class="toggle">
                <label>{{todo.title}}</label><button class="destroy"></button>
            </li>
        {{/each}}
    </ul>

    <input type="checkbox" id="toggle-all">
</section>

<footer id="footer">  
    <span id="todo-count">
        <strong>2</strong> todos left
    </span>
    <ul id="filters">
        <li>
            <a href="all" class="selected">All</a>
        </li>
        <li>
            <a href="active">Active</a>
        </li>
        <li>
            <a href="completed">Completed</a>
        </li>
    </ul>

    <button id="clear-completed">
        Clear completed (1)
    </button>
</footer> 
```

###Planning the routes

##Nested Routes (complete and incomplete)
* install addon [from here](https://github.com/ember-data/ember-data-filter)