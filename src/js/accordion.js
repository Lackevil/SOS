export default function initAccordion() {
  const items = document.querySelectorAll('.accordion__item')

  items.forEach((item) => {
    item.addEventListener('click', () => {
      clearActive()
      item.classList.toggle('active')
    })
  })

  function clearActive() {
    items.forEach((item) => {
      item.classList.remove('active')
    })
  }
}
