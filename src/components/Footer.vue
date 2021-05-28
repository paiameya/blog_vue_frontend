<template>
  <div
    class="
      footer
      section
      pt-6 pt-md-8 pt-lg-10
      pb-3
      bg-primary
      text-white
      overflow-hidden
    "
  >
    <div class="pattern pattern-soft top"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <div class="col-l">
            <a href="#" class="footer-brand mr-lg-5 d-flex">
              <img
                src="https://blog.rayabharitech.com/front/assets/img/brand/light.svg"
                alt="logo"
                height="35"
              />
            </a>
            <p class="my-4">
              Create, prototype, collaborate and turn your ideas into incredible
              products with the definitive platform for digital design.
            </p>
            <div class="dropdown mb-4 mb-lg-0">
              <a
                href="#"
                id="langsDropdown"
                data-toggle="dropdown"
                class="dropdown-toggle footer-language-link"
              >
                <img
                  src="https://blog.rayabharitech.com/front/assets/img/flags/united-states-of-america.svg"
                  alt="Flag"
                  class="language-flag"
                />
                English
                <i class="pi pi-angle-down ml-1"></i>
              </a>
            </div>
          </div>
          <div class="ipad-view">
            <div class="cols">
              <div class="col-6 col-sm-3 col-lg-2 mb-4 mb-lg-0">
                <h6>Themesberg</h6>
                <ul class="links-vertical">
                  <li>Blog</li>
                  <li>Themes</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div class="col-6 col-sm-3 col-lg-2 mb-4 mb-lg-0">
                <h6>Creative Tim</h6>
                <ul class="links-vertical">
                  <li>Blog</li>
                  <li>Products</li>
                  <li>Support</li>
                  <li>License</li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <h6>Subscribe</h6>
              <p class="font-small">
                The latest Impact news, articles, and resources, sent straight
                to your inbox every month.
              </p>
              <form action="#">
                <div class="form-row">
                  <div class="col-8">
                    <input
                      type="email"
                      class="form-control mb-2"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div>
                    <button type="submit" class="btn btn-secondary btn-block">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
              <small class="mt-2 form-text">
                We’ll never share your details. See our
                <a href="#" class="font-weight-bold text-underline"
                  >Privacy Policy</a
                >
              </small>
            </div>
          </div>
        </div>
        <hr class="my-4 my-lg-5" />
        <div class="row row1">
          <div class="col pb-4 mb-md-0">
            <div class="d-flex text-center justify-content-center copy-right">
              <p class="font-weight-normal mb-0">
                <a href="#">&copy; Themesberg </a> &
                <a href="#">Creative Tim </a>
                <span>2021</span>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  color: #ffffff;
  position: relative;
}
.section {
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.text-white {
  color: #ffffff !important;
}
.pt-6,
.py-6 {
  padding-top: 5rem !important;
}
.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}
.overflow-hidden {
  overflow: hidden !important;
}
.bg-primary {
  background-color: #0648b3 !important;
}
.pattern.top,
.pattern.top {
  top: -10px;
}
.pattern-soft {
  background-image: url('https://blog.rayabharitech.com/front/assets/img/patterns/wave-soft.svg');
}
.pattern,
.pattern {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-image: url('https://blog.rayabharitech.com/front/assets/img/patterns/wave-soft.svg');
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 1450px 160px;
  height: 0;
  padding: 0;
  padding-bottom: 140px;
}

.container {
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.col-lg-4,
.col-sm-3,
.col-6,
.col-12,
.col-sm-6,
.col-lg-4,
.col-8,
.col-4 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 8px;
}
.footer .footer-brand {
  font-size: 1.25rem;
  font-weight: 600;
}

.d-flex {
  display: flex !important;
}
a,
.text-action {
  color: #0648b3;
  transition: all 0.2s ease;
}
a {
  color: #fff;
  text-decoration: none;
  background-color: transparent;
}

.footer .footer-language-link {
  font-size: 0.875rem;
}

.dropdown-toggle {
  white-space: nowrap;
}
.mr-3 {
  margin-right: 1rem !important;
}
img {
  max-width: 100%;
}
.my-4,
.mb-4 {
  margin-bottom: 1.5rem !important;
  margin-top: 1.5rem !important;
}
.mb-2,
.mt-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}
p,
.p {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}

.dropdown {
  position: relative;
}
.text-white,
.text-white:hover {
  color: #ffffff !important;
}
.text-white {
  color: #ffffff !important;
}
.language-flag {
  width: auto;
  height: 1rem;
  margin-right: 0.4rem;
  position: relative;
  top: 4px;
}
.cols {
  display: flex;
}
.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}
.footer ul {
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
h6 {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  margin: 0;
}
.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
.font-small {
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.6;
}
.col-8 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
}
.form-control {
  font-size: 1rem;
  border-radius: 0.5rem;
  box-shadow: none;
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
}

.col-4 {
  flex: 0 0 33.33333%;
  max-width: 33%;
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-secondary {
  color: #ffffff;
  background-color: #ee5050;
  border-color: #ee5050;
  box-shadow: 0 0.125rem 0.25rem rgb(13 20 49 / 7%);
}
.btn {
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  border: 0.0625rem solid transparent;
  padding: 0.6rem 0.4rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.5rem;
}
.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}
.form-text {
  display: block;
  margin-top: 0.25rem;
}
li {
  margin-bottom: 0.5rem;
}

small,
.small {
  font-size: 80%;
  font-weight: 400;
}
small {
  font-size: 80%;
}
.text-underline {
  text-decoration: underline !important;
}

.font-weight-bold {
  font-weight: 600 !important;
}
hr {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 0;
  border-top: 0.0625rem solid rgba(36, 38, 43, 0.05);
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}
.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.text-center {
  text-align: center !important;
}

.align-items-center {
  align-items: center !important;
}
.justify-content-center {
  justify-content: center !important;
}
.font-weight-normal {
  font-weight: 400 !important;
}
.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}
.copy-right {
  padding: 0 1rem;
}
@media (max-width: 991.98px) {
  .pattern,
  .pattern {
    background-size: 700px 203px;
  }
}

@media screen and (min-width: 768px) {
  .row {
    margin: 5rem 0 0 1rem;
  }
  .cols {
    flex: 1;
  }
  .col-12 {
    flex: 1;
  }
  .ipad-view {
    display: flex;
  }
  .row1 {
    width: 100%;
    margin: 0;
  }
}

@media screen and (min-width: 1024px) {
  .col-lg-4 {
    display: flex;
    justify-content: center;
  }
  .col-12 {
    display: block;
  }
  .col-l {
    width: 25%;
  }
}

@media screen and (width: 1024px) {
  .col-l {
    width: 35%;
  }
}
</style>
