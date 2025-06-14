<template>
  <section id="avantages" class="section">
    <div class="titleWrapper">
      <h2 class="sectionTitle">Avantages</h2>
      <h2 class="sectionTitleEffect">Avantages</h2>
    </div>
    <div class="avantagesContainer">
      <div class="avantagesImage">
        <img src="@/assets/phone1.png" alt="Avantages background" class="phone1Picture" />
        <img src="@/assets/phone2.png" alt="Avantages background" class="phone2Picture" />
        <img src="@/assets/phone3.png" alt="Avantages background" class="phone3Picture" />
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
</template>

<script setup>
const avantages = [
  { icon: "fa-solid fa-newspaper", text: "Actus Pokémon exclusives", style: { top: '10%', left: '0%' }, look: "green" },
  { icon: "fa-solid fa-box-open", text: "Neuf & occasion", style: { top: '0%', right: '12%' }, look: "green" },
  { icon: "fa-solid fa-cart-shopping", text: "Achats, ventes et recherches centralisés", style: { top: '20%', right: '-5%' }, look: "modern" },
  { icon: "fa-solid fa-users", text: "Une équipe de développeurs passionnés", style: { top: '45%', left: '-15%' }, look: "modern" },
  { icon: "fa-solid fa-mobile-screen-button", text: "Alertes ultra rapides sur mobile et Pc", style: { top: '50%', right: '0%' }, look: "green" },
  { icon: "fa-solid fa-store", text: "Veille continue sur les boutiques spécialisées", style: { top: '80%', left: '-5%' }, look: "green" },
  { icon: "fa-solid fa-coins", text: "Alertes sur le marché de l'occasion", style: { top: '90%', right: '8%' }, look: "modern" }
]
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

.avantagesContainer {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.avantagesImage {
  position: relative;
  display: flex;
  justify-content: center;

  img {
    height: 760px;
    object-fit: cover;
    border-radius: 10px;
  }
}

.phone1Picture {
  transform: translateX(40px) rotate(-10deg);
  animation: float 3s ease-in-out infinite;
}

.phone2Picture {
  z-index: 1;
  animation: float2 3s ease-in-out infinite;
}

.phone3Picture {
  transform: translateX(-40px) rotate(10deg);
  animation: float3 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(40px) rotate(-10deg);
  }
  50% {
    transform: translateY(70px) translateX(40px) rotate(-10deg);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translateY(70px);
  }
  50% {
    transform: translateY(0);
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translateY(0) translateX(-40px) rotate(10deg);
  }
  50% {
    transform: translateY(70px) translateX(-40px) rotate(10deg);
  }
}

.avantageBox {
  position: absolute;
  height: 70px;
  min-width: 200px;
  padding: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
  font-family: $fontFamilyDMSans;
  font-size: $fontSizeNormal;
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 10;

  i {
    font-size: 24px;
  }

  &.green {
    background-color: $textColorPop;
    color: $textColor;

    i {
      color: white;
    }
  }

  &.modern {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid $textColorPop;
    color: white;

    i {
      color: $textColorPop;
    }
  }
}

.avantageText {
  margin: 0;
  font-size: $fontSizeNormal;
  font-family: $fontFamilyDMSans;
}

// Mobile responsive styles
@media (max-width: 1024px) {
  .avantagesImage {
    img {
      height: 600px;
    }
  }
  
  .phone1Picture {
    transform: translateX(30px) rotate(-8deg);
  }
  
  .phone3Picture {
    transform: translateX(-30px) rotate(8deg);
  }
  
  .avantageBox {
    min-width: 180px;
    padding: 20px;
    font-size: $fontSizeSmall;
    
    i {
      font-size: 20px;
    }
  }
}

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
  
  .avantagesContainer {
    overflow-x: auto;
  }
  
  .avantagesImage {
    flex-direction: column;
    align-items: center;
    min-width: 320px;
    
    img {
      height: 400px;
      margin-bottom: 20px;
    }
  }
  
  .phone1Picture,
  .phone2Picture,
  .phone3Picture {
    transform: none;
    position: relative;
    animation: none;
  }
  
  .avantageBox {
    position: relative;
    margin-bottom: 16px;
    min-width: 280px;
    padding: 16px;
    
    &.green,
    &.modern {
      position: relative;
      top: auto !important;
      left: auto !important;
      right: auto !important;
    }
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
  
  .avantagesImage img {
    height: 300px;
  }
  
  .avantageBox {
    min-width: 260px;
    padding: 12px;
    font-size: 0.8rem;
    
    i {
      font-size: 16px;
    }
  }
}
</style> 