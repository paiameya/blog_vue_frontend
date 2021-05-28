<template>
  <transition name="fade">
    <Preloader />
  </transition>
  <Header />

  <section class="banner-section">
    <div class="container">
      <div class="banner-outer">
        <div class="banner-content">
          <h1 class="banner-title">Tools to grow your traffic</h1>
          <p class="lead">
            Impact helps you learn why your competitors rank so high and what
            you need to do to outrank them.
          </p>
          <div class="mt-4">
            <form action="#" class="subsribe-form">
              <input
                class="form-control name"
                type="text"
                name="full-name"
                placeholder="Full name"
                required=""
              />
              <input
                class="form-control email"
                type="email"
                name="email"
                placeholder="Your email"
                required=""
              />
              <button class="btn btn-primary create-acc" type="submit">
                Create your account
              </button>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  class="form-check-label form-check-sign-white"
                  for="exampleCheck1"
                  >I agree to the <a href="#">Terms &amp; Conditions</a></label
                >
              </div>
            </form>
          </div>
        </div>

        <div class="banner-img">
          <img
            class="hero-img"
            :src="bannerImage"
            alt="banner-image"
            @click="goHomePage"
          />
        </div>
      </div>
    </div>
    <div class="pattern" :style="{ backgroundImage: `url(${wave})` }"></div>
  </section>
  <section class="meet">
    <div class="container">
      <div class="meet-content">
        <h2 class="meet-title">Meet our intuitive platform</h2>
        <p class="lead">
          Self-Service Analytics or ad hoc reporting gives users the ability to
          develop rapid reports, empowering users to analyze their data.
        </p>
      </div>
    </div>
  </section>
  <section class="services">
    <div class="container">
      <Services title="Site Audit" :image="serviceImage1">
        <p class="lead">
          Site Audit crawls all the pages it finds on your website – then
          provides an overall SEO health score, visualises key data in charts,
          flags all possible SEO issues and provides recommendations on how to
          fix them.
        </p>
        <p class="lead">Have a huge website? Not an issue.</p>
      </Services>
      <Services title="Rank Tracker" :image="serviceImage2">
        <p class="lead">
          We track your desktop and mobile keyword rankings from any location
          and plot your full ranking history on a handy graph.
        </p>
        <p class="lead">
          You can set up automated ranking reports to be sent to your email
          address, so you’ll never forget to check your ranking progress.
        </p></Services
      >
    </div>
  </section>
  <section class="achievement">
    <div class="container">
      <div class="achievement-outer">
        <Achievement
          title="98%"
          content="Average satisfaction rating received in
      the past year"
        />
        <Achievement
          title="24/7"
          content="Our support team is a quick chat or email away — 24 hou rs a day"
        />
        <Achievement
          title="220k+"
          content="Extension installs from the two major mobile app stores"
        />
      </div>
    </div>
  </section>
  <section class="seo-section">
    <div class="container">
      <div class="top-content-outer">
        <div class="top-content">
          <h2 class="seo-title">SEO solutions for every need</h2>
          <p class="lead">
            We build best-in-class SEO software for every situation, from our
            all-in-one SEO platform to tools for local SEO, enterprise SERP
            analytics, and a powerful API.
          </p>
        </div>
      </div>
      <div class="seocard-outer">
        <Seocard
          :image="seo1"
          title="Impact Local"
          content="Moz Local distributes your business information across the web
                for maximum search engine visibility."
          :items="[
            'Real-time distribution',
            'Duplicate closure',
            'Review management',
          ]"
        />
        <Seocard
          :image="seo2"
          title="Impact Pro"
          content="Our SEO solution to help you rank higher, drive qualified
                traffic to your website, and run high-impact SEO campaigns."
          :items="[
            'Keyword &amp; link research',
            'Technical site audits',
            'SEO insights &amp; reporting',
          ]"
        />
        <Seocard
          :image="seo3"
          title="Impact STAT"
          content="STAT offers serious SERP tracking for experts. Track thousands
                to millions of keywords across any location."
          :items="[
            'Daily tracking',
            'Local and mobile SERPs',
            'Competitor intelligence',
          ]"
        />
      </div>
    </div>
  </section>
  <section class="seodata-section">
    <div class="container">
      <div class="seodata-outer">
        <div class="seocard">
          <h1 class="card-title">The world's most accurate SEO data.</h1>
          <div class="card-content">
            <Datacard
              title="36.5 trillion"
              content="links indexed by Link Explorer with our tools"
            />
            <Datacard
              title="500 million"
              content="keyword suggestions in Keyword Explorer"
            />
            <Datacard
              title="250,000"
              content="local business listings optimized with Moz Local"
            />
          </div>
        </div>
      </div>
      <div class="seodata-lower">
        <div class="seodata-lowercontainer">
          <Search />
          <span class="small"
            >Impact also offers access to our best-in-class proprietary metrics
            including Keyword Difficulty, Spam Score, Page Authority, and Domain
            Authority — the most highly correlated metric with actual Google
            rankings available today.</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import SlideUpDown from 'vue-slide-up-down'
import Preloader from '@/components/Preloader.vue'
import bannerImage from '@/assets/hero-illustration.svg'
import serviceImage1 from '@/assets/feature-illustration.svg'
import serviceImage2 from '@/assets/feature-illustration-2.svg'
import seo1 from '@/assets/saas-platform-1.jpg'
import seo2 from '@/assets/saas-platform-2.jpg'
import seo3 from '@/assets/saas-platform-3.jpg'
import wave from '@/assets/wave.svg'
import Header from '@/components/Header'
import Services from '@/components/Services'
import Achievement from '@/components/Achievement'
import Seocard from '@/components/Seocard'
import Datacard from '@/components/Datacard'
import Search from '@/components/Search'

export default {
  components: {
    Header,
    Services,
    Achievement,
    Seocard,
    Datacard,
    Search,
    Preloader,

    // SlideUpDown,
  },
  setup() {
    return {
      bannerImage,
      wave,
      serviceImage1,
      serviceImage2,
      seo1,
      seo2,
      seo3,
    }
  },
}
</script>
<style>
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.banner-section {
  padding-top: 2.5rem;
  background-color: #f4f6fc !important;
}
.banner-img {
  order: 2;
  padding-top: 3.5rem;
}

.banner-title {
  margin-bottom: 1rem !important;
  font-weight: 700;
  line-height: 1.3;
  color: #24262b;
}
.lead {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  color: #4a5073;
  margin-bottom: 1rem;
}
.create-acc {
  width: -webkit-fill-available;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 1.4rem);
  padding: 0.6rem 0.75rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: #4a5073;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 0.0625rem solid #eaedf2;
  border-radius: 0.5rem;
  box-shadow: 0 4px 30px rgb(0 0 0 / 5%);
  transition: all 0.3s ease-in-out;
  font-size: 1rem;
  border-radius: 0.5rem;
  box-shadow: none;
  margin-bottom: 1rem !important;
  margin-top: 1rem !important;
}
.name {
  margin-top: 1.5rem !important;
}
.form-check {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.form-check .form-check-label {
  font-size: 0.875rem;
  display: inline-block;
  position: relative;
  padding-left: 0.375rem;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 0;
  transition: all 0.2s ease;
  color: #4a5073;
}
.subscribe-form {
  display: flex;
  flex-direction: column;
}
.banner-img {
  width: 100%;
}
.banner-content {
  width: 100%;
}
.pattern {
  /* bottom: -10px; */
  transform: rotate(180deg);
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 1450px 160px;
  height: 0;
  padding: 0;
  padding-bottom: 140px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  height: 0px;
  transition: all 0.7s ease-in-out;
}
.meet {
  margin-bottom: 3rem !important;
}
.meet-title,
.seo-title {
  font-weight: 700;
}
.meet-content {
  text-align: center;
}
.achievement {
  margin-top: 3rem;
  margin-bottom: 4rem;
}
.seo-section {
  background-color: #f4f6fc !important;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.top-content-outer {
  text-align: center;
}
.achievement .card-title {
  margin-bottom: 0rem;
  font-size: 3.5rem;
}
.seocard-outer {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.seocard-outer .card-title {
  font-weight: 600;
  font-size: 1.75rem;
}
.seodata-section {
  background-color: #0648b3;
  display: flex;
  text-align: center;
  color: #ffffff;
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.datacard-title {
  font-size: 2.5rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
}
.datacard-content {
  font-weight: 400 !important;
  font-size: 1.25rem;
}
.seodata-lowercontainer {
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
}
.seodata-lower {
  display: flex;
  flex-wrap: wrap;

  justify-content: center !important;
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  .banner-outer {
    display: flex;
    justify-content: space-between;
  }
  .banner-content {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .banner-img {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .meet-content {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .services-outer {
    display: flex;
    justify-content: space-between;
  }
  .services-outer:last-child {
    flex-direction: row-reverse;
  }

  .services-img {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .services-content {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .achievement .card-outer,
  .seocard-outer .card-outer {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .achievement {
    display: flex;
  }
}
@media (max-width: 991.98px) {
  .lead {
    font-size: 1rem;
  }
  .banner-title,
  .achievement .card-title,
  .seocard .card-title {
    font-size: 1.875rem;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
  .achievement,
  .seo-section {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  .achievement .card-outer,
  .seocard-outer .card-outer {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
}

@media (max-width: 1200px) {
  .banner-title,
  .achievement .card-title {
    font-size: calc(1.475rem + 2.7vw);
  }

  .meet-title,
  .seo-title,
  .datacard-title {
    font-size: calc(1.375rem + 1.5vw);
  }
  .seocard-outer .carditle {
    font-size: calc(1.3rem + 0.6vw);
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
