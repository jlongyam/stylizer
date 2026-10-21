import fontStack from "../src/fontStack.js";

let css = '';
for( let i in fontStack) {
  css += `.font-stack_${i} { font-family: ${fontStack[i]};}\n`
}

console.log(css);