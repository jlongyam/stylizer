import fontFamily from "../src/fontStack.js";

document.addEventListener('DOMContentLoaded', ()=> {
  let fonts = Object.keys(fontFamily);
  let select_font = document.getElementById('select_font');
  fonts.forEach(font => {
    let el_option = document.createElement('option');
    el_option.textContent = font;
    el_option.value = font;
    select_font.appendChild(el_option);
  });
  select_font.onchange = function() {
    let output = document.getElementsByTagName('output')[0];
    let root = document.getElementById('root');
    let font_name = `font-stack_${this.value}`
    root.className = font_name ;
    output.value = '.'+font_name;
  }
})
window.addEventListener('DOMContentLoaded', ()=> {
  let h1 = document.getElementsByTagName('h1')[0];
  let h2 = document.getElementsByTagName('h2')[0];
  h1.textContent = h1.textContent.toUpperCase();
  h2.textContent = h2.textContent.toUpperCase();
});
