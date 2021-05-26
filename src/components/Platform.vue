<template>
  <div class="platform-section">
    <div class="platform-container">
      <div class="platform-heading">
        <div class="platform-text-container">
          <h2 class="h2">Meet our intuitive platform</h2>
          <p class="lead">
            Self-Service Analytics or ad hoc reporting gives users the ability
            to develop rapid reports, empowering users to analyze their data.
          </p>
        </div>
      </div>
      <div class="row" v-for="(platform, i) in platforms" :key="i">
        <div class="col inline">
          <div
            class="content"
            :class="platform.title === 'Rank Tracker' ? 'rank' : null"
          >
            <h2 class="title">{{ platform.title }}</h2>
            <p class="leads">
              {{ platform.para1 }}
            </p>
            <p class="leads">{{ platform.para2 }}</p>
            <a href="#" class="btn mt-3">
              {{ platform.linkText }}<i :class="platform.icon"></i>
            </a>
          </div>
          <div class="platform-img-container">
            <img :src="platform.imgUrl" alt="Audit" />
          </div>
        </div>
      </div>
      <div class="rows">
        <div class="row" v-for="card in cards" :key="card.title">
          <div class="col1">
            <div class="card border-light p-4">
              <div class="card-body">
                <h2 class="display-2 mb-2">{{ card.title }}</h2>
                <span>{{ card.content }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const platforms = ref([
      {
        title: 'Site Audit',
        para1:
          'Site Audit crawls all the pages it finds on your website – then provides an overall SEO health score, visualises key data in charts,flags all possible SEO issues and provides recommendations on how tofix them.',
        para2: 'Have a huge website? Not an issue.',
        linkText: 'Learn More',
        icon: 'pi pi-external-link',
        imgUrl:
          'https://blog.rayabharitech.com/front/assets/img/illustrations/feature-illustration.svg',
      },
      {
        title: 'Rank Tracker',
        para1:
          'We track your desktop and mobile keyword rankings from any location and plot your full ranking history on a handy graph.',
        para2:
          'You can set up automated ranking reports to be sent to your email address, so you’ll never forget to check your ranking progress.',
        linkText: 'Rank Tracker Tool',
        icon: 'pi pi-external-link',
        imgUrl:
          'https://blog.rayabharitech.com/front/assets/img/illustrations/feature-illustration-2.svg',
      },
    ])
    const cards = ref([
      {
        title: '98%',
        content: 'Average satisfaction rating received in the past year',
      },
      {
        title: '24/7',
        content:
          'Our support team is a quick chat or email away — 24 hours a day',
      },
      {
        title: '220k+',
        content: 'Extension installs from the two major mobile app stores',
      },
    ])
    return {
      platforms,
      cards,
    }
  },
}
</script>

<style scoped>
.platform-section {
  padding-top: 4rem !important;
}
.platform-heading,
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  max-width: 100%;
  margin-left: -15px;
  justify-content: center !important;
  margin-bottom: 3rem !important;
}
.platform-text-container,
.col {
  flex: 0 0 100%;
  max-width: 100%;
  text-align: center !important;
}
.h2 {
  padding: 0 1rem;
  margin-bottom: 1.5rem !important;
}
.lead {
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 1.6;
  padding: 0 2rem;
}

.title {
  font-weight: 700 !important;
  text-align: left;
  padding: 0 2rem;
  margin-bottom: 1.5rem !important;
}

.leads {
  text-align: left;
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 1.6;
  padding: 0 2rem;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.col {
  text-align: left !important;
}

.btn {
  margin: 0 1.5rem;
  color: #ffffff;
  background-color: #0648b3;
  border-color: #0648b3;
  box-shadow: 0 0.125rem 0.25rem rgb(13 20 49 / 7%);
  display: inline-block;
  font-weight: 600;
  vertical-align: middle;
  user-select: none;
  text-decoration: none;
  border: 0.0625rem solid transparent;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.5rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.platform-img-container {
  margin: 3rem auto 0 auto;
}

img {
  max-width: 100%;
}
i {
  margin: 0 0.5rem;
}

.p-4 {
  padding: 1.5rem !important;
}
.border-light {
  border-color: #eaedf2 !important;
}
.card-body {
  padding: 1.5rem;
}
.mb-2 {
  margin-bottom: 0.5rem !important;
}
.display-2 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.3;
}
.card {
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  background-clip: border-box;
  border: 0.0625rem solid rgba(243, 247, 250, 0.05);
  border-radius: 0.5rem;
}
.col1 {
  max-width: 100%;
  margin-left: 2rem;
  text-align: center !important;
}

@media (max-width: 992px) {
  .lead {
    font-size: 1rem;
  }
  .display-2 {
    font-size: 1.875rem;
  }
  .h2 {
    padding: 0 3rem;
  }
  .btn {
    font-size: 0.8rem;
  }
}

@media (min-width: 768px) {
  .h2 {
    padding: 0 8rem;
  }
  .lead {
    font-size: 1rem;
    padding: 0 9rem;
  }

  .inline {
    display: flex;
    width: 50%;
  }
  .content {
    flex: 40%;
    margin-left: 2rem;
  }
  .rank {
    order: 2;
  }
  .platform-img-container {
    flex: 40%;
  }
  /* .rows{
    display: flex;
  }
  .card {
    width: 100%;
    margin: 0 ;
     } */
}
</style>
