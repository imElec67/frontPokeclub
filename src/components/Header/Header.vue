<template>
  <header class="header">
    <div class="headerContent">
      <div class="logoContainer">
        <div class="particlesContainer">
          <span
            v-for="n in particleCount"
            :key="'logo-' + n"
            class="particle"
            ref="particlesRefsLogo"
          />
        </div>
        <img src="@/assets/pokeclubLogo.png" alt="PokéClub Logo" />
      </div>

      <nav class="navigation">
        <a href="#avantages" class="navLink" :class="{ 'active': currentSection === 'hero' || currentSection === 'avantages' }" @click.prevent="scrollToSection('avantages')">AVANTAGES</a>
        <a href="#offres" class="navLink" :class="{ 'active': currentSection === 'offres' }" @click.prevent="scrollToSection('offres')">NOS OFFRES</a>
        <a href="#succes" class="navLink" :class="{ 'active': currentSection === 'succes' }" @click.prevent="scrollToSection('succes')">SUCCÈS</a>
        <a href="#avis" class="navLink" :class="{ 'active': currentSection === 'avis' }" @click.prevent="scrollToSection('avis')">AVIS</a>
        <a href="#faq" class="navLink" :class="{ 'active': currentSection === 'faq' }" @click.prevent="scrollToSection('faq')">FAQ</a>
      </nav>

      <div class="buttonContainer">
        <div class="particlesContainer">
          <span
            v-for="n in particleCount"
            :key="'button-' + n"
            class="particle"
            ref="particlesRefsButton"
          />
        </div>
        <button class="joinButton">REJOINS LE CLUB</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const currentSection = ref('hero')
const particleCount = 15 // reduced from 20 to 15

const particlesRefsLogo = ref([])
const particlesRefsButton = ref([])

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  const sections = ['hero', 'avantages', 'offres', 'succes', 'avis', 'faq']
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        currentSection.value = section
        break
      }
    }
  }
}

let animationFrameId
let velocitiesLogo = []
let velocitiesButton = []
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
  // ↓ speed divided by 5 (was 3)
  const baseSpeed = 1.5 / 5

  velocitiesLogo = Array.from({ length: particleCount }, () => ({
    x: (Math.random() - 0.5) * baseSpeed,
    y: (Math.random() - 0.5) * baseSpeed
  }))
  velocitiesButton = Array.from({ length: particleCount }, () => ({
    x: (Math.random() - 0.5) * baseSpeed,
    y: (Math.random() - 0.5) * baseSpeed
  }))

  const animate = () => {
    animateParticles(particlesRefsLogo.value, velocitiesLogo)
    animateParticles(particlesRefsButton.value, velocitiesButton)
    animationFrameId = requestAnimationFrame(animate)
  }

  animate()
}

// Add visibility change detection
const handleVisibilityChange = () => {
  isVisible = !document.hidden
}

onMounted(async () => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('visibilitychange', handleVisibilityChange)
  handleScroll()
  await nextTick()
  startAnimation()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('visibilitychange', handleVisibilityChange)
  cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped lang="scss">
@use '@/variables.scss' as *;

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: transparent;
  z-index: 1000;
  height: 152px;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.headerContent {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin: 0 auto;
  box-sizing: border-box;
}

.logoContainer {
  position: relative;
  height: 100%;
  display: flex;
  z-index: 10;
  padding-left: 30px;
  padding-right: 30px;
  flex-shrink: 0;

  img {
    width: 90px;
    height: 90px;
    margin: auto;
    object-fit: contain;
  }
}

.buttonContainer {
  position: relative;
  width: 250px;
  height: 100%;
  z-index: 1;
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  flex-shrink: 0;
}

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
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  opacity: 0.3;
  z-index: 0;
}

.navigation {
  display: flex;
  gap: 32px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  white-space: nowrap;
}

.navLink {
  color: $textColor;
  text-decoration: none;
  font-family: $fontFamilyLuckiestGuy;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 16px;
  cursor: pointer;

  &:hover,
  &.active {
    color: $textColorPop;
  }
}

.joinButton {
  background-color: rgba(114, 79, 24, 1);
  color: $textColor;
  font-family: $fontFamilyLuckiestGuy;
  border: 1px solid $textColorPop;
  box-shadow: 0px 4px 4px 0px rgba(114, 79, 24, 0.29);
  border-radius: 27px;
  width: 100%;
  height: 54px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  line-height: 54px;
  text-align: center;
  margin: auto;
  z-index: 1;

  &:hover {
    background-color: $textColorPop;
    color: $textColor;
    box-shadow: 0px 4px 4px 0px rgba(114, 79, 24, 0.5);
  }
}

// Mobile responsive styles
@media (max-width: 768px) {
  .header {
    height: 100px;
  }
  
  .navigation {
    display: none;
  }
  
  .logoContainer {
    padding-left: 16px;
    padding-right: 16px;
    
    img {
      width: 70px;
      height: 70px;
    }
  }
  
  .buttonContainer {
    width: 180px;
    padding-left: 16px;
    padding-right: 16px;
  }
  
  .joinButton {
    height: 45px;
    font-size: 14px;
    line-height: 45px;
  }
}

@media (max-width: 480px) {
  .header {
    height: 80px;
  }
  
  .logoContainer {
    padding-left: 12px;
    padding-right: 8px;
    
    img {
      width: 60px;
      height: 60px;
    }
  }
  
  .buttonContainer {
    width: 160px;
    padding-left: 8px;
    padding-right: 12px;
  }
  
  .joinButton {
    height: 40px;
    font-size: 12px;
    line-height: 40px;
  }
}
</style>