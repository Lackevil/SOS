import Swiper from 'swiper'
import { EffectCards, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function initSlider() {
  const sliderEl = document.querySelector('.slider')

  if (!sliderEl) return

  new Swiper(sliderEl, {
    modules: [Navigation, EffectCards, Pagination],
    loop: true,
    effect: 'creative',
    grabCursor: true,

    navigation: {
      nextEl: '.slider__next',
    },

    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
  })
}
