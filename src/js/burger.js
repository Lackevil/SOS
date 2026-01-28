export default function initBurger() {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.navigation')
  const body = document.querySelector('#body')
  const links = document.querySelectorAll('.navigation__link')

  burger.addEventListener('click', () => {
    nav.classList.toggle('active')
    burger.classList.toggle('active')
    body.classList.toggle('overflow')

    links.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('active')
        burger.classList.remove('active')
        body.classList.remove('overflow')
      })
    })
  })
}
