<template>
  <footer class="footer-container">
    <div class="company-wrapper">
      <h2 class="company-name">BLOGANT</h2>
      <ul class="icons-list">
        <li
          v-for="socialMediaList in socialMediaLists"
          :key="socialMediaList.id"
          v-tooltip.bottom="socialMediaList.name"
          v-show="socialMediaList.url"
        >
          <a :href="socialMediaList.url" target="_blank" rel="noopener"
            ><component :is="socialMediaList.icon"></component>
          </a>
        </li>
      </ul>
    </div>
    <div class="copyright">Copyright 2020 - Rayabhari Technologies Pvt Ltd</div>
  </footer>
</template>

<script>
import { ref } from 'vue'

import FacebookIcon from '@/assets/icons/SocialMediaIcons/Facebook'
import TwitterIcon from '@/assets/icons/SocialMediaIcons/Twitter'
import LinkedInIcon from '@/assets/icons/SocialMediaIcons/LinkedIn'
import PinterestIcon from '@/assets/icons/SocialMediaIcons/Pinterest'

export default {
  name: 'footer',
  components: {
    FacebookIcon,
    TwitterIcon,
    LinkedInIcon,
    PinterestIcon,
  },
  setup() {
    const socialMediaLists = ref([
      {
        id: 't1',
        url: 'https://primefaces.org',
        name: 'Twitter',
        icon: 'twitter-icon',
      },
      {
        id: 'f1',
        url: 'https://primefaces.org',
        name: 'Facebook',
        icon: 'facebook-icon',
      },
      {
        id: 'l1',
        url: 'https://primefaces.org',
        name: 'LinkedIn',
        icon: 'linkedIn-icon',
      },
      {
        id: 'p1',
        url: 'https://primefaces.org',
        name: 'pinterest',
        icon: 'pinterest-icon',
      },
    ])
    return { socialMediaLists }
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
  padding: 0;
  list-style: none;
}

.company-name {
  font-family: 'Forum';
  color: var(--surface-100);
  margin: 0;
}
.copyright {
  font-family: 'Lato', sans-serif;
  color: var(--surface-400);
  font-size: 0.8rem;
  font-weight: 600;
}
</style>
