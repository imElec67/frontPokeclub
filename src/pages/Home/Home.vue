<template>
  <div class="homeContainer">
    <main>
      <section id="heroSection" aria-label="Hero">
        <div class="backgroundGif" role="presentation"></div>
        <h1 class="heroTitle">PokeClub</h1>
      </section>
      <section id="homeSection" aria-label="About">
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// SEO meta tags
onMounted(() => {
  document.title = 'PokeClub'
  updateMetaTags()
})

const updateMetaTags = () => {
  const meta = {
    description: 'Welcome to PokeClub',
    keywords: 'pokemon, club, community',
    'og:title': 'PokeClub',
    'og:description': 'Welcome to PokeClub',
    'og:image': '/path-to-your-og-image.jpg',
    'og:url': window.location.href,
    'twitter:card': 'summary_large_image',
    'twitter:title': 'PokeClub',
    'twitter:description': 'Welcome to PokeClub',
    'twitter:image': '/path-to-your-og-image.jpg'
  }

  Object.entries(meta).forEach(([name, content]) => {
    let tag = document.querySelector(`meta[name="${name}"]`) ||
              document.querySelector(`meta[property="${name}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute(name.startsWith('og:') ? 'property' : 'name', name)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  })
}
</script>

<style scoped lang="scss">
@use './Home.scss' as *;
</style>