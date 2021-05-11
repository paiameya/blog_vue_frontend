<template>
  <div class="footer-container">
    <div class="company-wrapper">
      <h2 class="company-name">BLOGANT</h2>
      <div class="icons-list">
        <a
          href="https://primefaces.org/primevue/showcase/#/flexbox"
          target="_blank"
          rel="noopener"
        >
          <twitter-icon />
        </a>

        <a
          href="https://primefaces.org/primevue/showcase/#/flexbox"
          target="_blank"
          rel="noopener"
        >
          <facebook-icon />
        </a>
        <a
          href="https://primefaces.org/primevue/showcase/#/flexbox"
          target="_blank"
          rel="noopener"
        >
          <linked-in-icon />
        </a>
        <a
          href="https://primefaces.org/primevue/showcase/#/flexbox"
          target="_blank"
          rel="noopener"
        >
          <pinterest-icon />
        </a>
      </div>
    </div>

    <div class="copyright">Copyright 2020- Rayabhari Technologies Pvt Ltd</div>
  </div>
</template>

<script>
import FacebookIcon from '../../assets/icons/SocialMediaIcons/Facebook'
import TwitterIcon from '../../assets/icons/SocialMediaIcons/Twitter'
import LinkedInIcon from '../../assets/icons/SocialMediaIcons/LinkedIn'
import PinterestIcon from '../../assets/icons/SocialMediaIcons/Pinterest'

export default {
  name: 'sub-footer',
  components: {
    FacebookIcon,
    TwitterIcon,
    LinkedInIcon,
    PinterestIcon,
  },
}
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: #40565f;
  padding: 1.5rem 0;
}
a:hover {
  opacity: 0.8;
}
.icons-list {
  margin: 0.8rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.company-name {
  font-family: 'Forum', cursive;
  color: var(--surface-100);
  margin: 0;
}
.copyright {
  font-family: 'Lato', sans-serif;
  color: var(--surface-400);
  font-size: 0.8rem;
}
</style>
