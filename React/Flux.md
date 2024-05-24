## https://sunscrapers.com/blog/flux-and-redux-differences/#mvc---this-is-where-it-all-began

Model - this part takes care of the application’s data.
View - displays the data from the model in the User Interface.
Controller - this is the interface between the view & model components.
The process is simple - when the controller receives the request from the user, it uses the appropriate model and views with a response it generates.

## Flux is based on the following components:

Store (or Stores) serves as containers for the application state and logic (Model).
Action is a component that passes data to the dispatcher.
The view is similar to MVC - but it’s connected to React components in this context (View).
Dispatcher - as the name may suggest - coordinates actions and stores updates

## Redux

Now let’s take a look at the Redux library. As mentioned, Redux was invented to simplify Flux. It implements Flux concepts but in a bit different way. It introduces new components, such as

Reducer - logic that manages data changes in pure functions. It uses the previous state and actions to return the next state and data.
Centralized store - this is simply a state object that denotes the entire application’s state.

## Redux operates simply:

Action is dispatched to the reducer, which updates the centralized store with the data based on the action used. The store will create a new state and send the updated data to the view, which is being rerendered in order to show the update.
