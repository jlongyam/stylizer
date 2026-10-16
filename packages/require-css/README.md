# [requireCSS](https://github.com/jlongyam/require-css)

## Todo

- add arr argument to removeCSS

## Info

This js library use [loadCSS-v3.1.0](https://github.com/filamentgroup/loadCSS/tree/v3.1.0) created by **filamentgroup** as backend.

So that library functions will include as global function as well:

- `loadCSS`
- `onloadCSS`

## function

__`requireCSS( arr = [], cb, option ) `__

where:

- __`arr`__   : array of `href`
- __`cb`__    : call back `function`
- __`option`__:
    * `before`  : default is `document.scripts[0]`
    * `media`   : default is `null` || `media="all"`
    * `property`: default is `{}`

## Example

### 1. Simple

```javascript
requireCSS([
  'css/page.css',
  'css/other.css',
  'css/foo.css'
  ]
)
```

### 2. Callback

```javascript
requireCSS([
  'css/page.css',
  'css/other.css',
  'css/foo.css'
  ],
  ()=> { document.querySelector('h1').textContent = 'It\'s work!' }
)
```
### 3. Property
```javascript
requireCSS(
  [
    'css/page.css',
    'css/other.css',
    'css/foo.css'
  ],
  null,
  { property: { class: 'my-style' } }
) 
```

## Note

`property.id` will lead the same name, if want set `id`, use `loadCSS` manually.

Example:

```javascript
loadCSS(
  'css/page.css',
  document.scripts[0],
  null,
  { id: 'my_id' }
)
```

## Plugin

- `removeCSS`
- `switchCSS`

### Usage example

#### 1. `removeCSS`

```javascript
removeCSS('css/other.css')
// or
removeCSS('css/foo.css', console.log('removed'))
```
#### 2. `switchCSS`

```javascript
switchCSS( 'css/other.css', 'css/page.css' )
// or
switchCSS( 'css/other.css', 'css/page.css', console.log('swiched') )
```

### Note

Those plugins __combined__ together at `requireCSS.js`.

## Browser tested

- [x] chrome-desktop - linux, windows
- [x] firefox-desktop - linux, windows
- [x] midori-desktop - linux

How to contribute, See [CONTRIBUTING](CONTRIBUTING.md)
