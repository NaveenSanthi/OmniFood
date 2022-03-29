var btn = document.querySelectorAll('.icon-mobile-nav')
var header = document.querySelector('.header')

btn.forEach((item) => {
  item.addEventListener('click', () => {
    header.classList.toggle('nav-open')
  })
})
// btn.addEventListener('click', () => {
//   header.classList.toggle('nav-open')
// })

//To implement scrolling in safari
const link = document.querySelectorAll('a:link')
link.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    // First way to remove menu bar once clicked
    // header.classList.remove('nav-open')
    const li = item.getAttribute('href')
    console.log(li)
    if (li === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
    if (li !== '#' && li.startsWith('#')) {
      const elem = document.querySelector(li)
      elem.scrollIntoView({ behavior: 'smooth' })
    }
    // Another way to remove menu bar once clicked
    if (item.classList.contains('header-link')) {
      header.classList.remove('nav-open')
    }
  })
})
//To perform sicky navigation
const sectionHeroEl = document.querySelector('.section-hero')
const obs = new IntersectionObserver(
  function (events) {
    const eve = events[0]
    console.log(eve)
    if (eve.isIntersecting === false) {
      document.body.classList.add('sticky')
    }
    if (eve.isIntersecting === true) {
      document.body.classList.remove('sticky')
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  },
)
obs.observe(sectionHeroEl)

// To display current Year
const year = document.querySelector('.year')
year.textContent = new Date().getFullYear()

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement('div')
//   flex.style.display = 'flex'
//   flex.style.flexDirection = 'column'
//   flex.style.rowGap = '1px'

//   flex.appendChild(document.createElement('div'))
//   flex.appendChild(document.createElement('div'))

//   document.body.appendChild(flex)
//   var isSupported = flex.scrollHeight === 1
//   flex.parentNode.removeChild(flex)
//   console.log(isSupported)

//   if (!isSupported) document.body.classList.add('no-flexbox-gap')
// }
// checkFlexGap()
