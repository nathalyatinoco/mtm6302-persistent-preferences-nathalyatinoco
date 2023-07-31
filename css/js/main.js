const $display = document.getElementById('display')
const $click = document.getElementById('click')
const $reset = document.getElementById('reset')

let count = 0

function save () {
  $display.textContent = count 
  localStorage.setItem('count' , count)
}
$click.addEventListener('click',
  function () {
  count++
  save()
})
$reset.addEventListener('click' , function () {
  count = 0
  save()
})

if (localStorage.getItem('count')) {
  count = localStorage.getItem('count')
  save()
}

