<template>
  <footer class="footer">
    <div class="footerContent">
      <p class="copyright">© 2025 PokéClub</p>
      <a href="#" class="terms" @click.prevent="$emit('openTermsModal')">Terms & Condition</a>
    </div>
  </footer>
</template>

<script setup>
// Define emits
defineEmits(['openTermsModal'])
</script>

<style scoped lang="scss">
@use '@/variables.scss' as *;

.footer {
  padding: 32px;
  padding-top: 0px;
  margin-top: 80px;
}

.footerContent {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: $fontFamilyDMSans;
}

.terms {
  color: $textColor;
  text-decoration: none;

  &:hover {
    color: $textColorPop;
  }
}

// Mobile responsive styles
@media (max-width: 768px) {
  .footer {
    padding: 24px 16px 0;
  }
  
  .footerContent {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style> 