# Marketplace

## To run locally:

After cloning and running `npm i`, run

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Process

I chose to use React for a few different reasons. Namely, it's something I'm familiar with, so it saved some time; create-react-app offers scaffolding to minimize effort spent setting up the project; and the framework also provides an efficient way to keep track of state.

For the most part, I stuck with the mock provided. However, because there was no explicit description of what should happen when the `Add member` button is clicked, I chose to create a modal that prompts users for field inputs. This is one area where I would have appreciated design feedback, regarding both the design and placement of the modal, and whether a modal was the best solution. I also would have liked some insight into how many members to display per row (I chose 3 because it seemed to most efficiently use the available real estate without feeling crowded).

## Future Features

In order to allow for removing and editing a member, I would want to redo the way I'm currently setting members in state. Instead of an array, I would use an object, where the key would be the member's name, and the value would be another object with the properties `name`, `description`, and `favoriteFruit`. For example:

```
{
  Jose: {
    name: 'Jose',
    description: 'Household contact',
    favoriteFruit: 'Mango'
  }
}
```

I would add icons to the member cards -- an `x` to remove and a pencil to edit. When removing, an alert would pop up asking the user to either confirm or cancel; if they confirm, it will look up the key (member name) for that card in state and call delete on the entry; the state update should trigger a re-render to remove the corresponding card. When editing, the pencil icon will open a modal identical to the `Add member` modal, but with input values already populated using member details and an `Edit` button (instead of `Add`); the user can either cancel or submit their changes, which will update member's state and card with new values.

##Feedback
The prompt itself felt appropriately scoped for the time given. I ended up having an issue with my Github account that kept me from creating the repository or pushing, so it took longer than the time I had allotted, but otherwise felt this was doable in 2 hours.
