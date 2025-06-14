<template>
  <section id="heroSection" aria-label="Hero">
    <div class="particlesContainer">
      <span
        v-for="n in particleCount"
        :key="'hero-' + n"
        class="particle"
        ref="particlesRefsHero"
      />
    </div>
    <div class="heroContent">
      <h1 class="heroTitle">Bienvenue chez PokéClub</h1>
      <h1 class="heroTitleEffect">Bienvenue chez PokéClub</h1>
      <h2 class="heroSubtitle">Chope du Pokémon sans te ruiner ! Rejoins des fans et des développeurs qui partagent toutes les pépites !</h2>
      <p class="heroDescription">Le groupe discord de PokéClub est fait pour toi, avec son Offre premium à seulement 5,99€/mois sans engagement : réassorts, sorties, actus exclusives et entraide entre fans — tout est réuni pour ne plus rien rater !</p>
    </div>
    <div class="arrowDown" @click="scrollToSection('avantages')">
      <i class="fa-solid fa-arrow-down"></i>
    </div>
    <div class="smoke smoke1"></div>
    <div class="smoke smoke2"></div>
    <div class="smoke smoke3"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 80 // Height of the header
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const particleCount = 20
const particlesRefsHero = ref([])
let animationFrameId
let velocitiesHero = []
let isVisible = true

function animateParticles(particles, velocities) {
  if (!isVisible) return

  particles.forEach((el, index) => {
    if (!el || !el.parentElement) return

    const container = el.parentElement.getBoundingClientRect()
    // Skip animation if container is not visible
    if (container.width === 0 || container.height === 0) return

    const particleWidth = el.offsetWidth
    const particleHeight = el.offsetHeight
    const maxX = container.width - particleWidth
    const maxY = container.height - particleHeight

    if (!el.style.left || !el.style.top) {
      el.style.left = `${Math.random() * maxX}px`
      el.style.top = `${Math.random() * maxY}px`
      const sizeMultiplier = 0.5 + Math.random() * 1.5
      el.style.transform = `scale(${sizeMultiplier})`
    }

    let left = parseFloat(el.style.left)
    let top = parseFloat(el.style.top)

    left += velocities[index].x
    top += velocities[index].y

    if (left <= 0 || left >= maxX) {
      velocities[index].x *= -1
      left = Math.max(0, Math.min(left, maxX))
    }

    if (top <= 0 || top >= maxY) {
      velocities[index].y *= -1
      top = Math.max(0, Math.min(top, maxY))
    }

    el.style.left = `${left}px`
    el.style.top = `${top}px`
  })
}

const startAnimation = () => {
  const baseSpeed = 1.5 / 5

  velocitiesHero = Array.from({ length: particleCount }, () => ({
    x: (Math.random() - 0.5) * baseSpeed,
    y: (Math.random() - 0.5) * baseSpeed
  }))

  const animate = () => {
    animateParticles(particlesRefsHero.value, velocitiesHero)
    animationFrameId = requestAnimationFrame(animate)
  }

  animate()
}

// Add visibility change detection
const handleVisibilityChange = () => {
  isVisible = !document.hidden
}

onMounted(async () => {
  document.addEventListener('visibilitychange', handleVisibilityChange)
  await nextTick()
  startAnimation()
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange)
  cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped lang="scss">
@use '@/variables.scss' as *;

#heroSection {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 32px;
  position: relative;
  contain: layout style;
  isolation: isolate;

  .particlesContainer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
    border-radius: inherit;
  }

  .particle {
    position: absolute;
    width: 4.8px; // Reduced by 20% from 6px
    height: 4.8px; // Reduced by 20% from 6px
    background: $textColorPop;
    border-radius: 50%;
    opacity: 0.3;
    z-index: 0;
  }

  .smoke {
    position: absolute;
    width: 500px;
    height: 500px;
    background: $textColorPop;
    border-radius: 50%;
    z-index: 1;
    will-change: transform;
    pointer-events: none;
    contain: strict;
    transform-origin: center center;
  }

  .smoke1 {
    filter: blur(60px);
    opacity: 0.25;
    top: 30%;
    left: 20%;
    animation: smoke1 15s linear infinite;
    transform: translateZ(0);
  }

  .smoke2 {
    filter: blur(80px);
    opacity: 0.22;
    top: 60%;
    right: 15%;
    width: 600px;
    height: 600px;
    animation: smoke2 17s linear infinite;
    transform: translateZ(0);
  }

  .smoke3 {
    filter: blur(70px);
    opacity: 0.28;
    top: 20%;
    right: 25%;
    width: 400px;
    height: 400px;
    animation: smoke3 19s linear infinite;
    transform: translateZ(0);
  }
}

@keyframes smoke1 {
  0% {
    transform: rotate(0deg) translateX(100px) rotate(0deg) scale(1.2);
    opacity: 0.25;
    filter: blur(60px);
  }
  15% {
    transform: rotate(54deg) translateX(120px) rotate(-54deg) scale(0.9);
    opacity: 0.32;
    filter: blur(65px);
  }
  35% {
    transform: rotate(126deg) translateX(140px) rotate(-126deg) scale(1.4);
    opacity: 0.28;
    filter: blur(70px);
  }
  60% {
    transform: rotate(216deg) translateX(120px) rotate(-216deg) scale(1.0);
    opacity: 0.35;
    filter: blur(65px);
  }
  85% {
    transform: rotate(306deg) translateX(110px) rotate(-306deg) scale(1.3);
    opacity: 0.30;
    filter: blur(62px);
  }
  100% {
    transform: rotate(360deg) translateX(100px) rotate(-360deg) scale(1.2);
    opacity: 0.25;
    filter: blur(60px);
  }
}

@keyframes smoke2 {
  0% {
    transform: rotate(60deg) translateX(80px) rotate(-60deg) scale(0.8);
    opacity: 0.22;
    filter: blur(80px);
  }
  20% {
    transform: rotate(132deg) translateX(100px) rotate(-132deg) scale(1.5);
    opacity: 0.28;
    filter: blur(85px);
  }
  40% {
    transform: rotate(204deg) translateX(120px) rotate(-204deg) scale(1.1);
    opacity: 0.25;
    filter: blur(90px);
  }
  65% {
    transform: rotate(294deg) translateX(100px) rotate(-294deg) scale(1.3);
    opacity: 0.30;
    filter: blur(85px);
  }
  90% {
    transform: rotate(378deg) translateX(90px) rotate(-378deg) scale(0.9);
    opacity: 0.26;
    filter: blur(82px);
  }
  100% {
    transform: rotate(420deg) translateX(80px) rotate(-420deg) scale(0.8);
    opacity: 0.22;
    filter: blur(80px);
  }
}

@keyframes smoke3 {
  0% {
    transform: rotate(180deg) translateX(60px) rotate(-180deg) scale(1.0);
    opacity: 0.28;
    filter: blur(70px);
  }
  25% {
    transform: rotate(270deg) translateX(80px) rotate(-270deg) scale(0.7);
    opacity: 0.35;
    filter: blur(75px);
  }
  45% {
    transform: rotate(342deg) translateX(100px) rotate(-342deg) scale(1.3);
    opacity: 0.30;
    filter: blur(80px);
  }
  70% {
    transform: rotate(432deg) translateX(80px) rotate(-432deg) scale(1.5);
    opacity: 0.38;
    filter: blur(75px);
  }
  95% {
    transform: rotate(513deg) translateX(70px) rotate(-513deg) scale(0.8);
    opacity: 0.32;
    filter: blur(72px);
  }
  100% {
    transform: rotate(540deg) translateX(60px) rotate(-540deg) scale(1.0);
    opacity: 0.28;
    filter: blur(70px);
  }
}

.heroContent {
  max-width: 1200px;
  position: relative;
  z-index: 10;
}

.heroTitle {
  margin: auto;
  font-family: $fontFamilyLuckiestGuy;
  color: $textColorPop;
  font-size: $fontSizeGigantic;
  text-align: center;
  position: relative;
  margin-top: 170px;
  margin-bottom: 30px;
  z-index: 2;
}

.heroTitleEffect {
  font-family: $fontFamilyLuckiestGuy;
  color: transparent;
  -webkit-text-stroke: 1.5px $textColorPop;
  font-size: $fontSizeGigantic;
  text-align: center;
  position: absolute;
  top: 175px;
  left: 5px;
  right: 0;
  margin: 0;
  z-index: 1;
}

.heroSubtitle {
  font-family: $fontFamilyLuckiestGuy;
  font-size: $fontSizeHuge;
  margin-bottom: 30px;
}

.heroDescription {
  font-family: $fontFamilyDMSans;
  font-size: $fontSizeMedium;
  margin-bottom: 140px;
}

.arrowDown{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid $textColor;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;

  &:hover {
    border-color: $textColorPop;
    
    i {
      color: $textColorPop;
    }
  }

  i {
    font-size: 24px;
    color: $textColor;
    transition: color 0.3s ease;
    animation: dive 1.5s ease-in-out infinite;
  }
}

@keyframes dive {
  0%, 100% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
}

// Mobile responsive styles
@media (max-width: 1024px) {
  #heroSection {
    .smoke1 {
      width: 400px;
      height: 400px;
      filter: blur(50px);
    }

    .smoke2 {
      width: 500px;
      height: 500px;
      filter: blur(65px);
    }

    .smoke3 {
      width: 320px;
      height: 320px;
      filter: blur(55px);
    }
  }
}

@media (max-width: 768px) {
  #heroSection {
    padding: 16px;
    
    .smoke1 {
      width: 300px;
      height: 300px;
      filter: blur(40px);
      opacity: 0.20;
    }

    .smoke2 {
      width: 380px;
      height: 380px;
      filter: blur(55px);
      opacity: 0.18;
    }

    .smoke3 {
      width: 250px;
      height: 250px;
      filter: blur(45px);
      opacity: 0.22;
    }
    
    .heroContent {
      margin-top: 0;
    }
    
    .heroTitle {
      font-size: 2.5rem;
      margin-top: 60px;
      margin-bottom: 20px;
    }
    
    .heroTitleEffect {
      font-size: 2.5rem;
      top: 65px;
    }
    
    .heroSubtitle {
      font-size: 1.4rem;
      margin-bottom: 20px;
    }
    
    .heroDescription {
      font-size: 1rem;
      margin-bottom: 60px;
    }
    
    .arrowDown {
      width: 70px;
      height: 70px;
      
      i {
        font-size: 18px;
      }
    }
  }
}

@media (max-width: 480px) {
  #heroSection {
    .smoke1 {
      width: 200px;
      height: 200px;
      filter: blur(30px);
      opacity: 0.18;
    }

    .smoke2 {
      width: 260px;
      height: 260px;
      filter: blur(40px);
      opacity: 0.16;
    }

    .smoke3 {
      width: 180px;
      height: 180px;
      filter: blur(35px);
      opacity: 0.20;
    }
    
    .heroTitle {
      font-size: 2rem;
    }
    
    .heroTitleEffect {
      font-size: 2rem;
    }
    
    .heroSubtitle {
      font-size: 1.2rem;
    }
    
    .heroDescription {
      font-size: 0.9rem;
      margin-bottom: 40px;
    }
  }
}
</style>