<template>
  <div class="homeContainer">
    <Header />
    <main>
      <HeroSection />
      <AvantagesSection />
      <OffresSection />
      <SuccesSection />
      <AvisSection />
      <FaqSection />
    </main>
    <FooterSection @openTermsModal="showTermsModal = true" />
  </div>
  <!-- Terms & Conditions Modal -->
    <div v-if="showTermsModal" class="modal-overlay" @click="showTermsModal = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>Terms & Conditions</h2>
          <button class="close-button" @click="showTermsModal = false">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="modal-body">
          <h3>Éditeur du site</h3>
          <p>Pseudo: Xzile</p>
          <p>Adresse e-mail : pokeclub.communiction@gmail.com</p>

          <h3>Hébergeur</h3>
          <p>Hébergeur : [Nom de l'hébergeur]</p>
          <p>Adresse : [Adresse de l'hébergeur]</p>
          <p>Téléphone : [Numéro de téléphone de l'hébergeur]</p>
          <p>Site Web : [URL de l'hébergeur]</p>

          <h3>Propriété intellectuelle</h3>
          <p>L'ensemble des contenus présents sur le site (textes, images, graphismes, logos, icônes, etc.) sont protégés par le droit de la propriété intellectuelle. Toute reproduction, distribution, modification ou adaptation, totale ou partielle, est interdite sans l'accord écrit préalable de l'éditeur.</p>

          <h3>Limitations de responsabilité</h3>
          <p>Le site ne saurait être tenu responsable des erreurs rencontrées sur le site, problèmes techniques, interprétation des informations publiées, ou conséquences de leur utilisation.</p>

          <h4>Website made by <a href="https://affluencestore.fr" target="_blank">Elec</a></h4>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header/Header.vue'
import HeroSection from '@/components/HeroSection/HeroSection.vue'
import AvantagesSection from '@/components/AvantagesSection/AvantagesSection.vue'
import OffresSection from '@/components/OffresSection/OffresSection.vue'
import SuccesSection from '@/components/SuccesSection/SuccesSection.vue'
import AvisSection from '@/components/AvisSection/AvisSection.vue'
import FaqSection from '@/components/FaqSection/FaqSection.vue'
import FooterSection from '@/components/FooterSection/FooterSection.vue'

// Add Font Awesome CDN
const fontAwesomeLink = document.createElement('link')
fontAwesomeLink.rel = 'stylesheet'
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
document.head.appendChild(fontAwesomeLink)

// Modal state management
const showTermsModal = ref(false)
</script>

<style scoped lang="scss">
@use './Home.scss' as *;
</style>