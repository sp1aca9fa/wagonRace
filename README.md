# Wagon Race

A two-player keyboard racing game set against an animated Tokyo backdrop. Players mash their keys to advance their car across a 50-tile track — first to the finish line wins.

## Features

- Two-player local competition on the same keyboard
- Animated scrolling road and Tokyo cityscape background tied to player input
- Win detection with on-screen result display
- Lightweight — no build step, no dependencies beyond Bootstrap

## Gameplay

| Player | Key | Car |
|--------|-----|-----|
| Player 1 | `p` | Red |
| Player 2 | `q` | Yellow |

Press your key repeatedly to move your car forward. First to the finish tile wins. Reload the page (`F5`) to restart.

## Tech Stack

- HTML5 / CSS3
- Vanilla JavaScript (ES modules)
- CSS animations (`@keyframes`, `animation-play-state`)
- Bootstrap 5

## How It Works

1. The race track is built as an HTML table — each `<td>` is one tile
2. A player's active position is tracked by moving an `.active` class across cells on each keypress
3. The JS checks on every move whether the active tile matches the finish tile
4. When the finish tile is reached, race input is locked and the winner is announced

### Animations

Both the road texture and the Tokyo cityscape scroll horizontally using CSS `@keyframes`. The animations are paused by default and only play for 180ms after each valid keypress — creating the illusion that the world moves in response to the players' inputs rather than on a fixed loop. This was implemented using `animation-play-state` toggled via JavaScript and a `setTimeout` reset.

## Implementation Note

The base challenge provided by Le Wagon focused on the game logic: tracking player positions across table cells and detecting when a player reaches the finish. I extended the project by adding:

- A continuously tiled, scrolling road texture (`slide-road` keyframe animation)
- A parallax-style scrolling Tokyo cityscape background (`slide-tokyo` keyframe animation)
- Input-driven animation playback — animations only run while a player is actively pressing keys, then pause after a short delay

This gives the game a sense of motion and visual feedback that wasn't part of the original brief, and required coordinating CSS animation state with DOM events in JavaScript.

## Setup

```bash
git clone https://github.com/sp1aca9fa/wagonRace.git
cd wagonRace
npx serve
```

Open in your browser: http://localhost:3000

## Learnings

- Manipulating CSS `animation-play-state` from JavaScript to create input-driven animations
- Using `setTimeout` to debounce animation pausing
- Tracking stateful UI position by moving CSS classes across DOM elements
- Layering HTML, CSS, and JS to produce a cohesive interactive experience

## Notes

This project is a solution to a Le Wagon bootcamp coding challenge. The game logic (tile tracking, win detection) forms the original challenge scope. The scrolling road and background animations were added independently as a visual enhancement.
