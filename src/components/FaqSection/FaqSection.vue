 <template>
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
        <div class="faqAnswer">
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

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
  const item = faqItems.value[index]
  item.isOpen = !item.isOpen
  
  nextTick(() => {
    const faqItems = document.querySelectorAll('.faqItem')
    const faqAnswers = document.querySelectorAll('.faqAnswer')
    
    faqAnswers.forEach((answer, i) => {
      if (i === index) {
        // Get the height of the answer content
        const answerContent = answer.querySelector('p')
        if (item.isOpen) {
          // If opening, set height to the content's scroll height
          answer.style.height = answerContent.offsetHeight + 'px'
        } else {
          // If closing, set height to 0
          answer.style.height = '0px'
        }
      }
    })
  })
}

onMounted(() => {
  // Initialize FAQ answer heights
  const faqAnswers = document.querySelectorAll('.faqAnswer')
  faqAnswers.forEach((answer, index) => {
    const answerContent = answer.querySelector('p')
    if (faqItems.value[index].isOpen) {
      answer.style.height = answerContent.offsetHeight + 'px'
    } else {
      answer.style.height = '0px'
    }
  })
})
</script>

<style scoped lang="scss">
@use '@/variables.scss' as *;

.section {
  padding: 80px 32px;
  position: relative;
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

.faqContainer {
  max-width: 1200px;
  margin: 0 auto;
}

.faqItem {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 16px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  
  &.open {
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 5px 15px rgba(229, 193, 137, 0.15);
  }
}

.faqQuestion {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  h3 {
    font-family: $fontFamilyDMSans;
    font-size: $fontSizeBig;
    margin: 0;
    color: $textColor;
    transition: all 0.3s ease;
  }
}

.faqItem.open .faqQuestion h3 {
  color: $textColorPop;
}

.toggleButton {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.toggleIcon {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-right: 2px solid $textColorPop;
  border-bottom: 2px solid $textColorPop;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

.faqItem.open .toggleIcon {
  transform: rotate(-135deg);
}

.faqAnswer {
  height: 0;
  overflow: hidden;
  transition: height 0.4s ease;

  p {
    padding: 0 24px 24px;
    margin: 0;
    font-family: $fontFamilyDMSans;
    font-size: $fontSizeNormal;
    color: $textColor;
    line-height: 1.6;
  }
}

// Mobile responsive styles
@media (max-width: 768px) {
  .section {
    padding: 40px 16px;
  }
  
  .sectionTitle {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
  
  .sectionTitleEffect {
    font-size: 2.5rem;
  }
  
  .faqItem {
    margin-bottom: 12px;
  }
  
  .faqQuestion {
    padding: 16px;
    
    h3 {
      font-size: 1.1rem;
    }
  }
  
  .faqAnswer p {
    padding: 0 16px 16px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 32px 12px;
  }
  
  .sectionTitle {
    font-size: 2rem;
  }
  
  .sectionTitleEffect {
    font-size: 2rem;
  }
  
  .faqQuestion h3 {
    font-size: 1rem;
  }
}
</style>