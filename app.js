import '/comps/comp-header.js'
import '/comps/comp-main.js'
import '/comps/comp-footer.js'

const $app = document.querySelector('#app')

// $app.innerHTML = `
// <big-head></big-head>
// <big-main></big-main>
// <big-foot class='bg-info' >copyright text</big-foot>`
// $app.innerHTML = '<big-bang></big-bang>'

let df = new DocumentFragment()
let $head = document.createElement('big-head')
let $main = document.createElement('big-main')
let $foot = document.createElement('big-foot')

$foot.classList.add('bg-info')
$foot.textContent = 'Copyright Text'

df.appendChild($head)
df.appendChild($main)
df.appendChild($foot)

$app.appendChild(df)