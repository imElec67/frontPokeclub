<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/pokeclubLogo.png" alt="PokéClub Logo" />
    </div>
    <nav class="navigation">
      <a href="#avantages" class="nav-link" :class="{ 'active': currentSection === 'hero' || currentSection === 'avantages' }" @click.prevent="scrollToSection('avantages')">AVANTAGES</a>
      <a href="#offres" class="nav-link" :class="{ 'active': currentSection === 'offres' }" @click.prevent="scrollToSection('offres')">NOS OFFRES</a>
      <a href="#succes" class="nav-link" :class="{ 'active': currentSection === 'succes' }" @click.prevent="scrollToSection('succes')">SUCCÈS</a>
      <a href="#avis" class="nav-link" :class="{ 'active': currentSection === 'avis' }" @click.prevent="scrollToSection('avis')">AVIS</a>
      <a href="#faq" class="nav-link" :class="{ 'active': currentSection === 'faq' }" @click.prevent="scrollToSection('faq')">FAQ</a>
    </nav>
    <button class="join-button">REJOINS LE CLUB</button>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSection = ref('hero')

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

const handleScroll = () => {
  const sections = ['hero', 'avantages', 'offres', 'succes', 'avis', 'faq']
  const scrollPosition = window.scrollY + 100 // Offset for better detection

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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
@use '@/variables.scss' as *;

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  z-index: 1000;
}

.logo {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  img {
    height: 92px;
  }
}

.navigation {
  display: flex;
  gap: 32px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-link {
  color: $textColor;
  text-decoration: none;
  font-family: $fontFamilyLuckiestGuy;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: $textColorPop;
  }

  &.active {
    color: $textColorPop;
  }
}

.join-button {
  background-color: rgba(114, 79, 24, 1);
  color: $textColor;
  font-family: $fontFamilyLuckiestGuy;
  border: none;
  border: 1px solid $textColorPop;
  box-shadow: 0px 4px 4px 0px rgba(114, 79, 24, 0.29);
  border-radius: 27px;
  width: 210px;
  height: 54px;
  font-size: 18px;
  margin-right: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  line-height: 54px;
  text-align: center;
  padding: 0;
}

.join-button:hover {
  background-color: $textColorPop;
  color: $textColor;
  box-shadow: 0px 4px 4px 0px rgba(114, 79, 24, 0.5);
}

</style>