function removeCSS( url, cb ) {
  const links = document.querySelectorAll('link')
  links.forEach(( el )=> {
    let href = el.getAttribute('href')
    if( href === url ) el.parentElement.removeChild( el )
    if( typeof cb === 'function' ) cb.call() 
  })
}