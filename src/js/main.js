// Styles
import '../scss/main.scss'

// Burger menu
import initBurger from './burger'

// Accordion
import initAccordion from './accordion'

// Slider
import initSlider from './slider'

document.addEventListener('DOMContentLoaded', () => {
  initBurger()
  initAccordion()
  initSlider()
})
