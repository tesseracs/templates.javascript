# Tesseracs JavaScript template

A small Node.js starter that feels closer to a real product utility than a toy sample.

This template ships a console-based "project brief" generator with:

- a single entry point in `index.js`
- sample business data under `src/`
- analysis and rendering split into separate modules
- zero runtime dependencies

Clone URL: `https://github.com/tesseracs/templates.javascript`

## Quick start

1. Run `npm install`
2. Run `npm start`
3. Or use `./run.sh`

## Project layout

- `index.js` - app entry point
- `src/data.js` - sample project/workstream data
- `src/analysis.js` - summary metrics and prioritization logic
- `src/render.js` - console output formatting
- `run.sh` - installs dependencies and runs the starter

## Extend it

- Replace the sample data with your own domain objects
- Add more derived metrics in `src/analysis.js`
- Swap the renderer if you want JSON output, Markdown, or terminal tables
