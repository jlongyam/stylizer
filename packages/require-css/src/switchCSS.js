function switchCSS( from_url, to_url, cb ) {
  const links = document.querySelectorAll('link')
  links.forEach(( el )=> {
    let href = el.getAttribute('href')
    if( href === from_url ) {
      el.setAttribute( 'href', to_url )
    }
    if( typeof cb === 'function' ) cb.call()
  })
}