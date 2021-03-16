# Diversio FE take-home

This is Diversio's front-end take-home exercise.

## How to run

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Your task: color picker widget

Please create a separate branch off `master` and name it `firstname_lastname`, using your name.

Take a look at `App.js`. You don't need to make any changes here, but your solution should work with any `COLOR_LIST` that contains valid color values.

Please implement the `ColorWidget` so that: 

- [ ] The colors in `colorList` are shown as the available color choices (the small squares) 
- [ ] A user can click one of the small coloured squares, and see the large square box change to that color
- [ ] The selected color is marked (i.e with a black outline)
- [ ] A long `COLOR_LIST` should render in a sensible way (i.e. perhaps not all on a single row). The boxes should not "jiggle" around as a user clicks them.

A working solution will look something like this:

<img src="https://github.com/DiversioTeam/diversio-fe-exercise/blob/master/color_picker_example_solution.png?raw=true" width="200" />

- [ ] Please make at least one commit containing your changes, and write meaningful commit messages.
- [ ] When done, please .zip up the repo and email it back. (Please don't combine it with the backend exercise; this repo should run as a standalone using `yarn start`.)

## Hints / Bonus
The basic functionality of the exercise is straightforward (no gotchas) and can be completed solely with in the `components/ColorWidget` folder. Beyond basic functionality, we would be happy to see the following:

- Organization and readability in your JavaScript, JSX, and CSS changes; well-chosen `camelCase` variable names
- No warnings in the console related to your code

You are welcome to add styling, UI feedback for the user, or new packages. This is not required and you will not be penalized for not doing so.
