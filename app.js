import '/comps/comp-header.js'
import '/comps/comp-main.js'
import '/comps/comp-footer.js'

const $app = document.querySelector('#app')

$app.innerHTML = `
<big-head></big-head>
<big-main></big-main>
<big-foot class='bg-info' >copyright text</big-foot>`
// $app.innerHTML = '<big-bang></big-bang>'