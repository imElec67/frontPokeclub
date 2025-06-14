<template>
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
</template>

<script setup>
// No script needed for this component as it only contains static content
</script>

<style scoped lang="scss">
@use '@/variables.scss' as *;

.section {
  padding: 80px 32px;
  position: relative;
  contain: layout style;
  isolation: isolate;
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

.offresContainer {
  display: flex;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.offreBox {
  position: relative;
  flex: 1;
  height: 500px;
  background-color: transparent;
  backdrop-filter: blur(10px);
  padding: 32px;
  border-radius: 10px;
  font-family: $fontFamilyDMSans;
  border: 1.5px solid $textColorPop;
  box-shadow: 0px 0px 25px 0px rgba(229, 193, 137, 0.5);

  h3 {
    font-family: $fontFamilyLuckiestGuy;
    font-size: $fontSizeBig;
    margin-bottom: 40px;
    color: $textColor;
  }

  h4{
    font-family: $fontFamilyLuckiestGuy;
    font-size: $fontSizeNormal;
    color: $textColorPop;
    margin-bottom: 22px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 32px;

    li {
      margin-bottom: 16px;
      font-size: $fontSizeNormal;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        color: $textColorPop;
      }
    }
  }
}

.joinButton {
  position: absolute;
  bottom: 0;
  margin-bottom: 30px;
  background-color: rgba(114, 79, 24, 1);
  color: $textColor;
  font-family: $fontFamilyLuckiestGuy;
  border: none;
  border: 1px solid $textColorPop;
  box-shadow: 0px 4px 4px 0px rgba(114, 79, 24, 0.29);
  border-radius: 27px;
  width: calc(100% - 60px);
  height: 54px;
  font-size: 18px;
  margin-right: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  line-height: 54px;
  text-align: center;
  padding: 0;

  &:hover {
    background-color: $textColorPop;
    color: $textColor;
    box-shadow: 0px 4px 4px 0px rgba(114, 79, 24, 0.5);
  }
}

.smoke {
  position: absolute;
  background: $textColorPop;
  border-radius: 50%;
  z-index: 1;
  will-change: transform;
  pointer-events: none;
  contain: strict;
  transform-origin: center center;
}

.smoke1 {
  width: 400px;
  height: 400px;
  filter: blur(55px);
  opacity: 0.24;
  top: 25%;
  left: 10%;
  animation: smokeOffres1 20s linear infinite;
  transform: translateZ(0);
}

.smoke2 {
  width: 550px;
  height: 550px;
  filter: blur(75px);
  opacity: 0.21;
  top: 70%;
  right: 8%;
  animation: smokeOffres2 22s linear infinite;
  transform: translateZ(0);
}

.smoke3 {
  width: 350px;
  height: 350px;
  filter: blur(65px);
  opacity: 0.26;
  top: 40%;
  right: 30%;
  animation: smokeOffres3 24s linear infinite;
  transform: translateZ(0);
}

@keyframes smokeOffres1 {
  0% {
    transform: rotate(45deg) translateX(70px) rotate(-45deg) scale(0.9);
    opacity: 0.24;
    filter: blur(55px);
  }
  30% {
    transform: rotate(153deg) translateX(90px) rotate(-153deg) scale(1.4);
    opacity: 0.30;
    filter: blur(60px);
  }
  55% {
    transform: rotate(243deg) translateX(110px) rotate(-243deg) scale(0.8);
    opacity: 0.26;
    filter: blur(65px);
  }
  80% {
    transform: rotate(333deg) translateX(90px) rotate(-333deg) scale(1.2);
    opacity: 0.33;
    filter: blur(60px);
  }
  100% {
    transform: rotate(405deg) translateX(70px) rotate(-405deg) scale(0.9);
    opacity: 0.24;
    filter: blur(55px);
  }
}

@keyframes smokeOffres2 {
  0% {
    transform: rotate(90deg) translateX(60px) rotate(-90deg) scale(1.3);
    opacity: 0.21;
    filter: blur(75px);
  }
  18% {
    transform: rotate(154deg) translateX(80px) rotate(-154deg) scale(0.9);
    opacity: 0.27;
    filter: blur(80px);
  }
  42% {
    transform: rotate(230deg) translateX(100px) rotate(-230deg) scale(1.6);
    opacity: 0.23;
    filter: blur(85px);
  }
  68% {
    transform: rotate(320deg) translateX(80px) rotate(-320deg) scale(1.0);
    opacity: 0.29;
    filter: blur(80px);
  }
  88% {
    transform: rotate(396deg) translateX(70px) rotate(-396deg) scale(1.4);
    opacity: 0.25;
    filter: blur(77px);
  }
  100% {
    transform: rotate(450deg) translateX(60px) rotate(-450deg) scale(1.3);
    opacity: 0.21;
    filter: blur(75px);
  }
}

@keyframes smokeOffres3 {
  0% {
    transform: rotate(135deg) translateX(50px) rotate(-135deg) scale(1.1);
    opacity: 0.26;
    filter: blur(65px);
  }
  22% {
    transform: rotate(207deg) translateX(70px) rotate(-207deg) scale(0.7);
    opacity: 0.34;
    filter: blur(70px);
  }
  48% {
    transform: rotate(291deg) translateX(90px) rotate(-291deg) scale(1.4);
    opacity: 0.29;
    filter: blur(75px);
  }
  75% {
    transform: rotate(378deg) translateX(70px) rotate(-378deg) scale(0.9);
    opacity: 0.37;
    filter: blur(70px);
  }
  92% {
    transform: rotate(459deg) translateX(55px) rotate(-459deg) scale(1.3);
    opacity: 0.31;
    filter: blur(67px);
  }
  100% {
    transform: rotate(495deg) translateX(50px) rotate(-495deg) scale(1.1);
    opacity: 0.26;
    filter: blur(65px);
  }
}

// Mobile responsive styles
@media (max-width: 1024px) {
  .smoke1 {
    width: 320px;
    height: 320px;
    filter: blur(45px);
  }

  .smoke2 {
    width: 450px;
    height: 450px;
    filter: blur(60px);
  }

  .smoke3 {
    width: 280px;
    height: 280px;
    filter: blur(50px);
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

  .smoke1 {
    width: 250px;
    height: 250px;
    filter: blur(35px);
    opacity: 0.20;
  }

  .smoke2 {
    width: 320px;
    height: 320px;
    filter: blur(50px);
    opacity: 0.18;
  }

  .smoke3 {
    width: 220px;
    height: 220px;
    filter: blur(40px);
    opacity: 0.22;
  }
  
  .offresContainer {
    flex-direction: column;
    gap: 24px;
  }
  
  .offreBox {
    height: auto;
    min-height: 400px;
    padding: 24px;
    
    h3 {
      font-size: 1.4rem;
      margin-bottom: 24px;
    }
    
    ul li {
      font-size: 0.9rem;
      margin-bottom: 12px;
    }
    
    h4 {
      font-size: 1rem;
    }
  }
  
  .joinButton {
    position: relative;
    bottom: auto;
    margin: 20px 0 0 0;
    width: 100%;
    height: 48px;
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

  .smoke1 {
    width: 180px;
    height: 180px;
    filter: blur(25px);
    opacity: 0.18;
  }

  .smoke2 {
    width: 220px;
    height: 220px;
    filter: blur(35px);
    opacity: 0.16;
  }

  .smoke3 {
    width: 160px;
    height: 160px;
    filter: blur(30px);
    opacity: 0.20;
  }
  
  .offreBox {
    padding: 16px;
    
    ul li {
      font-size: 0.8rem;
    }
  }
}
</style> 