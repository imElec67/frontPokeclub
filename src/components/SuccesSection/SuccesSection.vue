<template>
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
</template>

<script setup>
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

.succesContainer {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 0 auto;
  position: relative;
}

.succesImages {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  height: 300px;
}

.succesImage {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid $textColorPop;
  box-shadow: 0px 0px 25px 0px rgba(229, 193, 137, 0.5);
  border-radius: 10px;
  transition: all 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:hover {
    transform: scale(1.05);
    z-index: 10 !important;
  }
}

.succesContent {
  display: flex;
  flex-direction: row;
  gap: 24px;
  text-align: left;
  margin: 0 auto;
  margin-top: -100px;
  position: relative;
  z-index: 20;
  padding: 40px 0;
  padding-bottom: 0px;
  background: linear-gradient(0deg, rgba(2, 5, 15, 0.9) 0%, rgba(2, 5, 15, 0.4) 50%, rgba(2, 5, 15, 0) 100%);
  width: 100%;

  .contentWrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
}

.blurOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba($primaryColor, 0.8) 0%, rgba($primaryColor, 0.4) 50%, rgba($primaryColor, 0) 100%);
  z-index: -1;
  pointer-events: none;
  opacity: 0.9;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba($primaryColor, 0.95) 0%, rgba($primaryColor, 0) 100%);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba($primaryColor, 0.6) 0%, rgba($primaryColor, 0) 100%);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
}

.wrapperContent {
  width: 400px;
  text-align: left;
}

.succesContentTitle {
  font-family: $fontFamilyLuckiestGuy;
  font-size: 150px;
  text-align: left;
  color: $textColor;
  position: relative;
  z-index: 2;
}

.succesContentTitleEffect {
  font-family: $fontFamilyLuckiestGuy;
  font-size: 150px;
  text-align: left;
  color: transparent;
  -webkit-text-stroke: 1.5px $textColor;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(calc(-50% + 5px));
  z-index: 1;
  width: 100%;
  pointer-events: none;
}

.succesText {
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    font-family: $fontFamilyLuckiestGuy;
    font-size: $fontSizeBig;
    color: $textColor;
    margin: 0;
    line-height: 1.4;
  }

  p {
    font-family: $fontFamilyDMSans;
    font-size: $fontSizeNormal;
    color: $textColor;
    margin: 0;
    line-height: 1.4;
  }
}

// Mobile responsive styles
@media (max-width: 1024px) {
  .succesImages {
    height: 250px;
  }
  
  .succesImage {
    width: 250px;
    height: 250px;
  }
  
  .successImages {
    img {
      &:nth-child(1) {
        left: 0%;
      }
      &:nth-child(2) {
        left: 180px;
      }
      &:nth-child(3) {
        left: 360px;
      }
      &:nth-child(4) {
        left: 540px;
      }
      &:nth-child(5) {
        left: 720px;
      }
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
  
  .succesContainer {
    gap: 24px;
  }
  
  .succesImages {
    height: 200px;
    overflow-x: auto;
    padding: 0 16px;
  }
  
  .succesImage {
    width: 200px;
    height: 200px;
    position: relative;
    display: inline-block;
    margin-right: 16px;
    flex-shrink: 0;
  }
  
  .succesContent {
    margin-top: -50px;
    padding: 20px 0;
    
    .contentWrapper {
      flex-direction: column;
      text-align: center;
      gap: 16px;
    }
  }
  
  .wrapperContent {
    width: 100%;
  }
  
  .succesContentTitle,
  .succesContentTitleEffect {
    font-size: 4rem;
    text-align: center;
  }
  
  .succesText {
    h4 {
      font-size: 1.2rem;
    }
    
    p {
      font-size: 1rem;
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
  
  .succesContentTitle,
  .succesContentTitleEffect {
    font-size: 3rem;
  }
}
</style> 