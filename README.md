# cardFlipper_WebComponent

## Overview
Card flipper is a simple, single player memory game, where the main purpose is to flip cards and remember their position in order to find all pairs.

The web component has been implemented using HTML, CSS and JS, and this documentation will present its main features.

![image](https://github.com/a-akon-n/cardFlipper_WebComponent/assets/36335591/dc1fabc8-ab74-4239-a6f0-f9e2d5f618e6)

![image](https://github.com/a-akon-n/cardFlipper_WebComponent/assets/36335591/3fef0102-1772-4b14-ace3-2d744fc095f3)

## Features

- The game is made up of 16 hidden card tiles.
- The player can select a card to show the image hidden behind it.
- When a pair is selected they remain visible.
- When all cards are discoverd, the game is won.
- The position of each tile is randomized, with each game.

## Structure

- The structure of the application, the board,, the tiles, image tags are implemented using HTML.
- The style of the application made use of simple CSS, for the interface.
- The functionality of the web component has been implemented using JavaScript. The logic and the interactions are handled by it, such as choosing and revealing the cards, as well as detecting the wins and shuffling the tiles.

## Installation
To be able to use the web component add the following script in the head tag:
```
<script src="cardflip.js"></script>
```
Now you can apply the following tag in any html component:
```
<card-flip></card-flip>
```

## Example

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Flipping Game Game</title>
    <link rel="stylesheet" href="./style.css">
    <script src="cardflip.js"></script>
</head>
<body>
  <card-flip></card-flip>
</body>
</html>
```
