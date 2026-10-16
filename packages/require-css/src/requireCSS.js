function requireCSS(arr = [], cb, option) {
  const hasLoaded = ()=> {
    let bool = false
    const links = document.querySelectorAll('link')
    links.forEach( el => {
      let href = el.getAttribute('href')
      if( arr.includes(href) ) bool = true
    })
    return bool
  }
  if( hasLoaded() ) return
  const config = {
    before: document.scripts[0],
    media: 'screen', // 'all',
    property: {}
  }
  opt = option || config
  if (typeof arr === 'string') {
    loadCSS(arr, opt.before, opt.media, opt.property)
    return
  }
  for (var i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      if (typeof cb === 'function') {
        const lastStylesheet = loadCSS(arr[arr.length - 1], opt.before, opt.media, opt.property)
        onloadCSS(lastStylesheet, cb)
      }
      else loadCSS(arr[arr.length - 1], opt.before, opt.media, opt.property)
    }
    else loadCSS(arr[i], opt.before, opt.media, opt.property)
  }
}