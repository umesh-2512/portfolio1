# Portfolio

A small, plain HTML / CSS / JS site. No build step, no framework.

## Files

| File            | What it holds                                             |
|-----------------|----------------------------------------------------------|
| `index.html`    | Home — intro, experience, education, skills               |
| `projects.html` | Projects list                                            |
| `gallery.html`  | Image grid with click-to-expand lightbox                  |
| `style.css`     | All styling, commented section by section                 |
| `script.js`     | Auckland clock + footer year + gallery lightbox           |
| `img/`          | Images — `UMESH.jpg` (portrait), `gallery-1.jpg` … etc.   |

## The shared header

The top bar (NZ flag + Auckland clock + nav) is copied into all three
HTML pages. If you change it, change it in each file so they stay in sync.
The clock itself is driven by `script.js` and uses the `Pacific/Auckland`
timezone, so it auto-adjusts for daylight saving.

## Editing

- **Text / links / projects:** edit the relevant `.html` file directly.
- **Gallery:** drop images in `img/` and point each `<img src>` in
  `gallery.html` at them. Any number of images is fine — they flow into
  columns automatically.
- **Colours / spacing:** the `:root` block at the top of `style.css`.

## Viewing

Double-click `index.html`, or run a tiny local server:

```
npx serve .
```
