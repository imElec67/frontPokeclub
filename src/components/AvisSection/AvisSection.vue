<template>
  <section id="avis" class="section">
    <div class="titleWrapper">
      <h2 class="sectionTitle">Avis !</h2>
      <h2 class="sectionTitleEffect">Avis !</h2>
    </div>
    <p class="sectionSubtitle">Ils en parlent mieux que nous : découvre les avis de la communauté !</p>
    <div class="avisContainer">
      <div class="reviewContent">
        <h2 class="reviewTitle">NOTE GLOBALE: <span class="boldStyle">4,9/5</span></h2>
        <h3 class="reviewSubTitle">{{ reviews.length }} Reviews</h3>
        <div class="carouselContainer">
          <button class="carouselArrow carouselArrowLeft" @click="prevPage">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <div class="carouselContent">
            <div class="carouselPage" v-for="(page, pageIndex) in reviewPages" :key="pageIndex"
                 :class="{ active: currentPage === pageIndex }">
              <div class="reviewCard" v-for="(review, reviewIndex) in page" :key="reviewIndex">
                <div class="reviewHeader">
                  <div class="reviewImage">
                    <img v-if="review.avatar" :src="review.avatar" :alt="review.name">
                    <div v-else class="fallbackAvatar">{{ review.name.charAt(0) }}</div>
                  </div>
                  <div>
                    <h3 class="reviewName">{{ review.name }}</h3>
                    <div class="reviewStars">
                      <i class="fa-solid fa-star customStar" v-for="n in review.stars" :key="n"></i>
                      <i class="fa-regular fa-star customStar" v-for="n in (5 - review.stars)" :key="'empty-' + n"></i>
                    </div>
                  </div>
                </div>
                <p class="reviewText">{{ review.text }}</p>
              </div>
            </div>
          </div>

          <button class="carouselArrow carouselArrowRight" @click="nextPage">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        <div class="carouselPagination">
          <button v-for="(_, index) in reviewPages" :key="index" class="paginationDot"
                  :class="{ active: currentPage === index }"
                  @click="currentPage = index"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Updated reviews data with star ratings
const reviews = [
  {
    name: "Big-Planet26",
    avatar: "https://img-v2-prod.whop.com/unsafe/rs:fit:96:0/plain/https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F414572650803888139%2F0afb582372ec7e59e1975ec1f707ad53",
    text: "Grâce à PokéClub, j'ai pu obtenir tous les coffrets que je voulais, sans rater une seule sortie. Entre les conseils des membres et les outils proposés, j'ai toujours été bien accompagné. Un grand merci à toute l'équipe PokéClub !",
    stars: 5,
  },
  {
    name: "Atmos",
    avatar: "https://img-v2-prod.whop.com/unsafe/rs:fit:96:0/plain/https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F419604783461302273%2Fa_a3a1cf6a57a02e3e9f7267025cc0d993",
    text: "Super serveur pour se retrouver entre passionnés Pokémon ! Le staff est disponible et très compétant pour vous aider à obtenir les items de vos rêves. Merci d'avoir crée cette communauté !",
    stars: 5,
  },
  {
    name: "Saphism",
    avatar: "https://img-v2-prod.whop.com/unsafe/rs:fit:96:0/plain/https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F283606683609989120%2Ff8e8eb3a2d94d91ab3883339a5e0fffb",
    text: "Certainement le meilleur groupe pour les passionnés Pokémon ! Un staff super disponible et tres competent qui met a jour tous les outils nous permettant de facilement suivre l'acualité et obtenir les sorties les plus compliqués. Merci encore 🙏",
    stars: 5,
  },
  {
    name: "elec",
    avatar: "https://img-v2-prod.whop.com/unsafe/rs:fit:96:0/plain/https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F529082579744194580%2Fa_7d10f91c6b2b2e24acae42ca3350af46",
    text: "Le meilleur serveur pour les collectionneurs de cartes Pokémon ! Un espace d'échange entre passionnés, avec de nombreux outils pratiques comme l'automatisation des annonces de stock. Parfait pour rester informé en temps réel des nouvelles sorties.",
    stars: 5,
  },
  {
    name: "kmZ",
    avatar: "",
    text: "Communauté incroyable ! Fait par des passionnés pour les passionnés. Grâce à Pokéclub tu obtiendras les coffrets et les cartes que tu cherches à des bons prix ! Merci Pokéclub 🏆",
    stars: 4,
  },
  {
    name: "maximetrevet",
    avatar: "",
    text: "Superbe communauté avec de vrais passionnés qui donnent tout pour nous faire obtenir ce qu'on veut : les outils à dispos sont d'une qualité parfaite. Hâte de découvrir la suite avec la commu Pokeclub !",
    stars: 5,
  },
  {
    name: "Eren",
    avatar: "https://img-v2-prod.whop.com/unsafe/rs:fit:96:0/plain/https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F1295361609065299968%2Fe2087f5edd381dbc16e427912d4892b7",
    text: "Communauté très active, que des passionnés. L'Entraide est le mot d'ordre, il m'a jamais été aussi facile d'obtenir mes coffrets grâce aux outils performant mis à notre disposition. Merci Pokeclub ❤️",
    stars: 5,
  },
  {
    name: "RedOctober",
    avatar: "https://img-v2-prod.whop.com/unsafe/rs:fit:96:0/plain/https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F873839243024269332%2F06b4740b2ca0a206e2a06e22d876d965",
    text: "Meilleure commu pokemon française et de loin! Pokéclub m'a vraiment aidé à obtenir tous les coffrets que je voulais sans exception que ce soit grâce aux conseils des autres membres ou grâce aux outils mis à disposition. Merci encore Pokéclub!",
    stars: 5,
  }
]

// Carousel pagination
const currentPage = ref(0)

// Split reviews into pages of 3
const reviewPages = computed(() => {
  const pages = []
  for (let i = 0; i < reviews.length; i += 3) {
    pages.push(reviews.slice(i, i + 3))
  }
  return pages
})

const nextPage = () => {
  if (currentPage.value < reviewPages.value.length - 1) {
    currentPage.value++
  } else {
    currentPage.value = 0
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  } else {
    currentPage.value = reviewPages.value.length - 1
  }
}
</script>

<style scoped lang="scss">
@use '@/variables.scss' as *;

.section {
  padding: 80px 32px;
  position: relative;
  padding-top: 0px;
}

.titleWrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 0px;
  z-index: 10;
}

.sectionTitle {
  font-family: $fontFamilyLuckiestGuy;
  font-size: $fontSizeHugest;
  text-align: center;
  color: $textColorPop;
  position: relative;
  z-index: 2;
  margin-bottom: 60px;
}

.sectionTitleEffect {
  font-family: $fontFamilyLuckiestGuy;
  font-size: $fontSizeHugest;
  text-align: center;
  color: transparent;
  -webkit-text-stroke: 1.5px $textColorPop;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(calc(-50% + 5px));
  z-index: 1;
  width: 100%;
  pointer-events: none;
}

.sectionSubtitle {
  font-family: $fontFamilyDMSans;
  font-size: $fontSizeBig;
  text-align: center;
  margin-bottom: 48px;
}

.avisContainer {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  padding: 0 !important;
}

.reviewContent {
  margin: 0 auto;
}

.reviewTitle {
  font-weight: 300;
  font-family: $fontFamilyLuckiestGuy;
  font-size: $fontSizeHuge;
  color: $textColorPop;
  margin: 0;
  text-align: center;
  margin-bottom: 8px;
}

.reviewSubTitle {
  font-family: $fontFamilyLuckiestGuy;
  font-size: $fontSizeMedium;
  text-align: center;
  margin-bottom: 56px;
  color: $textColor;
}

.carouselContainer {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 32px;
  padding: 0;
}

.carouselContent {
  flex: 1;
  overflow: hidden;
  position: relative;
  min-height: 360px;
}

.carouselPage {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 24px;
  opacity: 0;
  position: absolute;
  width: 100%;
  transition: opacity 0.3s ease;
  pointer-events: none;
  padding: 16px;

  &.active {
    opacity: 1;
    position: relative;
    pointer-events: all;
  }
}

.carouselArrow {
  background: none;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: none;
  color: $textColorPop;
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
  padding: 16px;
  transition: transform 0.3s ease;
  z-index: 2;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.3);
  }
}

.carouselPagination {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 32px;
}

.paginationDot {
  width: 12px;
  height: 12px;
  padding: 0;
  border-radius: 50%;
  background-color: rgba($textColorPop, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    background-color: $textColorPop;
  }
  
  &:hover {
    background-color: rgba($textColorPop, 0.5);
  }
}

.reviewCard {
  height: 100%;
  padding: 24px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1.5px solid rgba(229, 193, 137, 0.6);
  box-shadow: 0px 0px 15px 0px rgba(229, 193, 137, 0.25);
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 320px;
}

.reviewHeader {
  display: flex;
  margin-bottom: 16px;
}

.reviewImage {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid $textColorPop;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .fallbackAvatar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(229, 193, 137, 0.2);
    color: $textColorPop;
    font-family: $fontFamilyLuckiestGuy;
    font-size: 24px;
    line-height: 1;
    transform: translateY(1px);
  }
}

.reviewName {
  font-family: $fontFamilyDMSans;
  font-size: $fontSizeBig;
  color: $textColorPop;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.reviewStars {
  margin-top: 8px;
  font-size: 18px;
  display: flex;
  gap: 4px;
}

.customStar {
  color: $textColorPop;
}

.reviewText {
  font-family: $fontFamilyDMSans;
  font-size: $fontSizeNormal;
  line-height: 1.4;
  color: $textColor;
  margin: 0;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  flex: 1;
}

.boldStyle {
  font-weight: 900;
}

// Mobile responsive styles
@media (max-width: 1024px) {
  .carouselPage {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .carouselContent {
    min-height: 400px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 40px 16px;
    padding-top: 0px;
  }
  
  .sectionTitle {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
  
  .sectionTitleEffect {
    font-size: 2.5rem;
  }
  
  .sectionSubtitle {
    font-size: 1.1rem;
    margin-bottom: 32px;
  }

  .carouselPage {
    grid-template-columns: 1fr;
  }
  
  .carouselContent {
    min-height: 360px;
  }
  
  .reviewCard {
    height: 300px;
  }
  
  .carouselContainer {
    padding: 0;
  }
  
  .carouselArrow {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  
  .reviewTitle {
    font-size: 1.8rem;
  }
  
  .reviewSubTitle {
    font-size: 1.1rem;
    margin-bottom: 32px;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 32px 12px;
    padding-top: 0px;
  }
  
  .sectionTitle {
    font-size: 2rem;
  }
  
  .sectionTitleEffect {
    font-size: 2rem;
  }
  
  .reviewTitle {
    font-size: 1.5rem;
  }
}
</style> 