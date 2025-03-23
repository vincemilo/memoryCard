# Memory Card Game

How many times can you not select the same image twice?

Live preview: https://vincemilomemcard.netlify.app/

## Features

- Made with React useState and useEffect hooks
- Uses giphy API to fetch the images
- Randomly shuffles the images on click and keeps track of the highest score

### Process

- Started with creating the board and card components
- Used a shuffle algo to randomize the cards on click
- Realized current score state needed to stay on board and just updated score should go to Scoreboard
- Found bug when adding images that they also needed an id for click to work properly
- Changed numbers to animals once API was working properly
