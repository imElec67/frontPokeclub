<template>
  <div class="homeContainer">
    <Header />
    <main>
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

      <section id="avantages" class="section">
        <div class="titleWrapper">
          <h2 class="sectionTitle">Avantages</h2>
          <h2 class="sectionTitleEffect">Avantages</h2>
        </div>
        <div class="avantagesContainer">
          <div class="avantagesImage">
            <img src="@/assets/avantagesPicture.png" alt="Avantages background" />
            <div class="avantageBox"
              v-for="(avantage, index) in avantages"
              :key="index"
              :style="avantage.style"
              :class="{ 'modern': avantage.look === 'modern', 'green': avantage.look === 'green' }">
              <i :class="avantage.icon"></i>
              <p class="avantageText">{{ avantage.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="offres" class="section">
        <div class="titleWrapper">
          <h2 class="sectionTitle">NOS OFFRES</h2>
          <h2 class="sectionTitleEffect">NOS OFFRES</h2>
        </div>
        <div class="offresContainer">
          <div class="offreBox free">
            <h3>Gratuit</h3>
            <ul>
              <li>
                <i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Accès aux sections gratuites de notre groupe Discord pour toujours</li>
              <li>
                <i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Alertes avec délais sur les nouvelles sorties, réassort</li>
              <li>
                <i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Actualités Pokémon centralisées : jeux, cartes, produits, événements</li>
              <li>
                <i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Achat, vente et échange entre membres</li>
              <li>
                <i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Une communauté active de passionnés comme toi !</li>
            </ul>
            <button class="joinButton">Rejoins le club Gratuit !</button>
          </div>
          <div class="offreBox premium">
            <h3>Premium</h3>
            <ul>
              <li>
                <i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Alertes instantanées sans aucun délai — sois le premier à choper les bons plans !</li>
              <li>
                <i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Accès exclusif au channel premium avec toutes les actu Pokémon en avant-première</li>
              <li>
                <i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Support 24h/24, 7j/7 pour t'accompagner dans ta chasse ou tes achats</li>
              <li>
                <i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Avantages spéciaux réservés aux membres premium</li>
              <li>
                <i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Achat, vente et échange entre membres premium filtrés</li>
              <li>
                <i class="fa-solid fa-circle-check" style="margin-right: 10px;"></i> Et bien plus encore à découvrir en rejoignant le Club !</li>
            </ul>
            <h4>Prix 5,99€/mois seulement avec 7 jours d'essai gratuit !</h4>
            <button class="joinButton premium">Rejoins le club premium !</button>
          </div>
        </div>
        <div class="smoke smoke1"></div>
        <div class="smoke smoke2"></div>
        <div class="smoke smoke3"></div>
      </section>

      <section id="succes" class="section">
        <div class="titleWrapper">
          <h2 class="sectionTitle">SUCCÈS</h2>
          <h2 class="sectionTitleEffect">SUCCÈS</h2>
        </div>
        <div class="succesContainer">
          <div class="succesImages">
            <img v-for="(image, index) in successImages"
                 :key="index"
                 :src="image.src"
                 :alt="image.alt"
                 :style="image.style"
                 class="succesImage" />
          </div>
        </div>
        <div class="succesContent">
          <div class="blurOverlay"></div>
          <div class="contentWrapper">
            <div class="succesContentTitleWrapper">
              <div class="titleWrapper wrapperContent">
                <h3 class="succesContentTitle">+500</h3>
                <h3 class="succesContentTitleEffect">+500</h3>
              </div>
            </div>
            <div class="succesText">
              <h4>Grâce à PokéClub, notre communauté a déjà profité de sorties exclusives, réassorts et ventes Pokémon.</h4>
              <p>Qu'attends-tu pour nous rejoindre et ne plus jamais passer à côté ?</p>
            </div>
          </div>
        </div>
      </section>

      <section id="avis" class="section">
        <div class="titleWrapper">
          <h2 class="sectionTitle">Avis !</h2>
          <h2 class="sectionTitleEffect">Avis !</h2>
        </div>
        <p class="sectionSubtitle">Ils en parlent mieux que nous : découvre les avis de la communauté !</p>
        <div class="avisContainer">
          <swiper
            :modules="[SwiperNavigation, SwiperPagination]"
            :slides-per-view="3"
            :space-between="20"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
            :pagination="{
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets'
            }"
            :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            }"
            class="reviewsSwiper"
          >
            <swiper-slide v-for="(review, index) in reviews" :key="index">
              <div class="reviewCard">
                <div class="reviewCardHeader">
                  <div class="reviewImage">
                    <img v-if="review.avatar" :src="review.avatar" :alt="review.name">
                    <div v-else class="fallbackAvatar">{{ review.name.charAt(0) }}</div>
                  </div>
                  <h3 class="reviewName">{{ review.name }}</h3>
                </div>
                <p class="reviewText">{{ review.text }}</p>
              </div>
            </swiper-slide>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
          </swiper>
        </div>
      </section>

      <section id="faq" class="section">
        <div class="titleWrapper">
          <h2 class="sectionTitle">FAQ</h2>
          <h2 class="sectionTitleEffect">FAQ</h2>
        </div>
        <div class="faqContainer">
          <div v-for="(item, index) in faqItems" :key="index" class="faqItem" :class="{ 'open': item.isOpen }">
            <div class="faqQuestion" @click="toggleFaq(index)">
              <h3>{{ item.question }}</h3>
              <button class="toggleButton" :aria-label="item.isOpen ? 'Fermer' : 'Ouvrir'">
                <span class="toggleIcon"></span>
              </button>
            </div>
            <div class="faqAnswer" v-show="item.isOpen">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footerContent">
        <p class="copyright">© 2025 PokéClub</p>
        <a href="#" class="terms" @click.prevent="showTermsModal = true">Terms & Condition</a>
      </div>
    </footer>

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
  </div>
</template>

<script setup>
import Header from '@/components/Header/Header.vue'
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Add Font Awesome CDN
const fontAwesomeLink = document.createElement('link')
fontAwesomeLink.rel = 'stylesheet'
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
document.head.appendChild(fontAwesomeLink)

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

const avantages = [
  { icon: "fa-solid fa-newspaper", text: "Actus Pokémon exclusives", style: { top: '10%', left: '-10%' }, look: "green" },
  { icon: "fa-solid fa-box-open", text: "Neuf & occasion", style: { top: '0%', right: '22%' }, look: "green" },
  { icon: "fa-solid fa-cart-shopping", text: "Achats, ventes et recherches centralisés", style: { top: '20%', right: '5%' }, look: "modern" },
  { icon: "fa-solid fa-users", text: "Une équipe de développeurs passionnés", style: { top: '45%', left: '-15%' }, look: "modern" },
  { icon: "fa-solid fa-mobile-screen-button", text: "Alertes ultra rapides sur mobile et Pc", style: { top: '50%', right: '8%' }, look: "green" },
  { icon: "fa-solid fa-store", text: "Veille continue sur les boutiques spécialisées", style: { top: '80%', left: '-5%' }, look: "green" },
  { icon: "fa-solid fa-coins", text: "Alertes sur le marché de l'occasion", style: { top: '90%', right: '18%' }, look: "modern" }
]

const faqItems = ref([
  {
    question: "Puis-je résilier quand je veux ?",
    answer: "Oui, vous pouvez résilier votre abonnement à tout moment directement depuis votre espace client.",
    isOpen: true
  },
  {
    question: "Y a-t-il un engagement ?",
    answer: "Non, l'abonnement est sans engagement. Vous êtes libre de rester aussi longtemps que vous le souhaitez !",
    isOpen: true
  },
  {
    question: "Que comprend l'abonnement à 5,99€ ?",
    answer: "L'accès complet aux channels privés, alertes en temps réels, actus, marketplace premium …",
    isOpen: true
  },
  {
    question: "Comment puis-je accéder au contenu après mon achat ?",
    answer: "Dès votre inscription, vous recevrez automatiquement vos accès sur notre serveur Discord.",
    isOpen: true
  },
  {
    question: "Comment contacter le support si j'ai un problème ?",
    answer: "Vous pouvez nous contacter directement via le support Discord 24/24 et 7/7 !",
    isOpen: true
  },
  {
    question: "Pourquoi uniquement 5,99€/mois ?",
    answer: "Nous avons voulu rendre PokéClub Premium accessible à tous les fans de Pokémon sans dépenser une fortune !",
    isOpen: true
  }
])

const toggleFaq = (index) => {
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen
}

const reviews = [
  {
    name: "Big-Planet26",
    avatar: "https://img-v2-prod.whop.com/unsafe/rs:fit:96:0/plain/https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F414572650803888139%2F0afb582372ec7e59e1975ec1f707ad53",
    text: "Grâce à PokéClub, j'ai pu obtenir tous les coffrets que je voulais, sans rater une seule sortie. Entre les conseils des membres et les outils proposés, j'ai toujours été bien accompagné. Un grand merci à toute l'équipe PokéClub !"
  },
  {
    name: "Atmos",
    avatar: "https://img-v2-prod.whop.com/unsafe/rs:fit:96:0/plain/https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F419604783461302273%2Fa_a3a1cf6a57a02e3e9f7267025cc0d993",
    text: "Super serveur pour se retrouver entre passionnés Pokémon ! Le staff est disponible et très compétant pour vous aider à obtenir les items de vos rêves. Merci d'avoir crée cette communauté !"
  },
  {
    name: "Saphism",
    avatar: "https://img-v2-prod.whop.com/unsafe/rs:fit:96:0/plain/https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F283606683609989120%2Ff8e8eb3a2d94d91ab3883339a5e0fffb",
    text: "Certainement le meilleur groupe pour les passionnés Pokémon ! Un staff super disponible et tres competent qui met a jour tous les outils nous permettant de facilement suivre l'acualité et obtenir les sorties les plus compliqués. Merci encore 🙏"
  },
  {
    name: "elec",
    avatar: "https://img-v2-prod.whop.com/unsafe/rs:fit:96:0/plain/https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F529082579744194580%2Fa_7d10f91c6b2b2e24acae42ca3350af46",
    text: "Le meilleur serveur pour les collectionneurs de cartes Pokémon ! Un espace d'échange entre passionnés, avec de nombreux outils pratiques comme l'automatisation des annonces de stock. Parfait pour rester informé en temps réel des nouvelles sorties. Que vous cherchiez à enrichir votre collection ou simplement discuter avec d'autres passionnés, vous y trouverez votre place !"
  },
  {
    name: "kmZ",
    avatar: "",
    text: "Communauté incroyable ! Fait par des passionnés pour les passionnés. Grâce à Pokéclub tu obtiendras les coffrets et les cartes que tu cherches à des bons prix ! Merci Pokéclub 🏆"
  },
  {
    name: "maximetrevet",
    avatar: "",
    text: "Superbe communauté avec de vrais passionnés qui donnent tout pour nous faire obtenir ce qu'on veut : les outils à dispos sont d'une qualité parfaite. Hâte de découvrir la suite avec la commu Pokeclub !"
  },
  {
    name: "Eren",
    avatar: "https://img-v2-prod.whop.com/unsafe/rs:fit:96:0/plain/https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F1295361609065299968%2Fe2087f5edd381dbc16e427912d4892b7",
    text: "Communauté très active, que des passionnés. L'Entraide est le mot d'ordre, il m'a jamais été aussi facile d'obtenir mes coffrets grâce aux outils performant mis à notre disposition. Merci Pokeclub ❤️"
  },
  {
    name: "RedOctober",
    avatar: "https://img-v2-prod.whop.com/unsafe/rs:fit:96:0/plain/https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F873839243024269332%2F06b4740b2ca0a206e2a06e22d876d965",
    text: "Meilleure commu pokemon française et de loin! Pokéclub m'a vraiment aidé à obtenir tous les coffrets que je voulais sans exception que ce soit grâce aux conseils des autres membres ou grâce aux outils mis à disposition. Merci encore Pokéclub!"
  }
]

const showTermsModal = ref(false)

const successImages = [
  {
    src: "/src/assets/successPicture1.jpg",
    alt: "Succès 1",
    style: { top: '3%', left: '0%', zIndex: 2 }
  },
  {
    src: "/src/assets/successPicture2.jpg",
    alt: "Succès 2",
    style: { top: '0%', left: '230px', zIndex: 0 }
  },
  {
    src: "/src/assets/successPicture3.jpg",
    alt: "Succès 3",
    style: { top: '4%', left: '460px', zIndex: 1 }
  },
  {
    src: "/src/assets/successPicture4.jpg",
    alt: "Succès 4",
    style: { top: '2%', left: '680px', zIndex: 2 }
  },
  {
    src: "/src/assets/successPicture5.jpg",
    alt: "Succès 5",
    style: { top: '0%', left: '900px', zIndex: 0 }
  }
]

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
@use './Home.scss' as *;
@use '@/variables.scss' as *;

#heroSection {
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
}

.avisContainer {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding: 0 50px;
}

:deep(.swiper) {
  padding: 10px 0;
  padding-bottom: 50px;
  width: 100%;
  position: relative;
}

:deep(.swiper-wrapper) {
  width: 100%;
}

:deep(.swiper-slide) {
  width: 100%;
  height: auto;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: $textColorPop;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(229, 193, 137, 0.6);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;

  &:after {
    font-size: 18px;
  }

  &:hover:not(.swiper-button-disabled) {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  &.swiper-button-disabled {
    opacity: 0.5;
  }
}

:deep(.swiper-button-next) {
  right: 0;
}

:deep(.swiper-button-prev) {
  left: 0;
}

:deep(.swiper-pagination) {
  position: relative;
  bottom: 0;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 8px;

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: rgba(229, 193, 137, 0.3);
    opacity: 1;
    margin: 0;

    &:hover {
      background: rgba(229, 193, 137, 0.5);
    }
  }

  .swiper-pagination-bullet-active {
    background: $textColorPop;
  }
}
</style>