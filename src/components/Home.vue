<template>
  <section id="hero" class="hero">
    <div class="container position-relative">
      <div class="row gy-5" data-aos="fade-in">
        <div
          class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start"
        >
          <h1>{{ $t("titol") }}</h1>
          <p>{{ $t("descripcio") }}</p>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <a
              href="https://calendar.app.google/m9pTDB2X49ecRyE16"
              target="_blank"
              class="btn-get-started"
              >{{ $t("reserva-cita") }}</a
            >
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2">
          <img
            src="../../src/assets/img/consulta.webp"
            class="img-fluid rounded-4"
            alt="Consulta"
            data-aos="zoom-out"
            data-aos-delay="100"
          />
        </div>
      </div>
    </div>

    <div class="icon-boxes position-relative">
      <div class="container position-relative">
        <div class="row gy-4 mt-5">
          <div
            class="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-user-tie"></i></div>
              <h4 class="title">{{ $t("professionalitat") }}</h4>
            </div>
          </div>
          <!--End Icon Box -->

          <div
            class="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="fa-solid fa-hand-holding-heart"></i>
              </div>
              <h4 class="title">{{ $t("dedicacio") }}</h4>
            </div>
          </div>
          <!--End Icon Box -->

          <div
            class="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="icon-box">
              <div class="icon">
                <i class="fa-solid fa-handshake-simple"></i>
              </div>
              <h4 class="title">{{ $t("empatia") }}</h4>
            </div>
          </div>
          <!--End Icon Box -->

          <div
            class="col-xl-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="icon-box">
              <div class="icon"><i class="fa-solid fa-puzzle-piece"></i></div>
              <h4 class="title">{{ $t("personalitzacio") }}</h4>
            </div>
          </div>
          <!--End Icon Box -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero Section -->

  <main id="main">
    <!-- ======= About Us Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>{{ $t("sobre-nosaltres") }}</h2>
          <p id="section-header-text">{{ $t("sobre-nosaltres-text-1") }}</p>
        </div>

        <div class="row gy-4">
          <div class="col-lg-6">
            <h3>{{ $t("vitalitat-benestar") }}</h3>
            <img
              loading="lazy"
              src="../../src/assets/img/lloc1.webp"
              class="img-fluid rounded-4 mb-4"
              alt="Consulta salón"
            />
            <p>{{ $t("sobre-nosaltres-text-2") }}</p>
            <p>{{ $t("sobre-nosaltres-text-3") }}</p>
          </div>
          <div class="col-lg-6">
            <div class="content ps-0 ps-lg-5">
              <p class="fst-italic">{{ $t("sobre-nosaltres-text-4") }}</p>
              <ul>
                <li>
                  <i class="bi bi-check-circle-fill"></i
                  >{{ $t("fisioterapia") }}
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>{{ $t("osteopatia") }}
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i
                  >{{ $t("readaptacio-esportiva") }}
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i
                  >{{ $t("ecografia-diatermia") }}
                </li>
              </ul>
              <p>{{ $t("sobre-nosaltres-text-5") }}</p>
              <p>{{ $t("sobre-nosaltres-text-6") }}</p>
              <div class="position-relative mt-4">
                <img
                  loading="lazy"
                  src="../../src/assets/img/fisio1.webp"
                  class="img-fluid rounded-4 vertical-image"
                  alt="Fisioterapia sessión"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Us Section -->

    <!-- ======= Our Team Section ======= -->
    <section id="team" class="team">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>{{ $t("equip") }}</h2>
        </div>

        <div class="row gy-4 justify-content-center">
          <div
            class="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="member">
              <img
                loading="lazy"
                src="../../src/assets/img/team/team.webp"
                class="img-fluid"
                alt="Anna Sàbat miembro"
              />
              <h4>Anna Sàbat</h4>
              <span>{{ $t("fisio-osteo") }}</span>
              <div class="social">
                <a
                  href="https://www.instagram.com/anna_fisioosteo/"
                  target="_blank"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
                <a
                  href="https://www.linkedin.com/in/anna-s%C3%A0bat-mart%C3%AD-4a7885175/"
                  target="_blank"
                  ><i class="fa-brands fa-linkedin"></i
                ></a>
              </div>
            </div>
          </div>
          <!-- End Team Member -->
        </div>
      </div>
    </section>
    <!-- End Our Team Section -->

    <!-- ======= Our Services Section ======= -->
    <section id="services" class="services sections-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>{{ $t("serveis") }}</h2>
        </div>

        <div class="text-center mb-3">
          <RouterLink class="know-more" to="/servicios">{{
            $t("saber-mes")
          }}</RouterLink>
        </div>

        <div class="row gy-4 mt-2" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fa-solid fa-hands-holding"></i>
              </div>
              <h3>{{ $t("fisioterapia") }}</h3>
              <p>{{ $t("serveis-1") }}</p>
              <!-- <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> -->
            </div>
          </div>
          <!-- End Service Item -->

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fa-solid fa-bone"></i>
              </div>
              <h3>{{ $t("osteopatia") }}</h3>
              <p>{{ $t("serveis-2") }}</p>
              <!-- <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> -->
            </div>
          </div>
          <!-- End Service Item -->

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fa-solid fa-person-running"></i>
              </div>
              <h3>{{ $t("readaptacio") }}</h3>
              <p>{{ $t("serveis-3") }}</p>
              <!-- <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> -->
            </div>
          </div>
          <!-- End Service Item -->

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fa-solid fa-clipboard-check"></i>
              </div>
              <h3>{{ $t("ecografia") }}</h3>
              <p>{{ $t("serveis-4") }}</p>
              <!-- <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> -->
            </div>
          </div>
          <!-- End Service Item -->

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fa-solid fa-fire-flame-simple"></i>
              </div>
              <h3>{{ $t("diatermia") }}</h3>
              <p>{{ $t("serveis-5") }}</p>
              <!-- <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> -->
            </div>
          </div>
          <!-- End Service Item -->

          <div class="col-lg-4 col-md-6">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="fa-solid fa-dumbbell"></i>
              </div>
              <h3>{{ $t("entrenament") }}</h3>
              <p>{{ $t("serveis-6") }}</p>
              <!-- <a href="#" class="readmore stretched-link">Read more <i class="bi bi-arrow-right"></i></a> -->
            </div>
          </div>
          <!-- End Service Item -->
        </div>
      </div>
    </section>
    <!-- End Our Services Section -->

    <!-- ======= Pricing Section ======= -->
    <section id="pricing" class="pricing sections-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>{{ $t("tarifes") }}</h2>
          <p>{{ $t("tarifes-text") }}</p>
        </div>

        <div class="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay="100">
          <div class="container">
            <div class="row g-5 justify-content-center">
              <div class="col-12 col-lg-6">
                <h3 class="mb-3 text-center">{{ $t("fisioterapia") }}</h3>
                <div class="table-responsive bg-white">
                  <table class="mb-0">
                    <thead>
                      <th scope="col">{{ $t("tractament") }}</th>
                      <th scope="col">{{ $t("servei") }}</th>
                      <th scope="col">{{ $t("preu") }}</th>
                      <th scope="col">{{ $t("durada") }}</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ $t("fisioterapia") }}</td>
                        <td>1 {{ $t("sessio") }}</td>
                        <td>45€</td>
                        <td>50min</td>
                      </tr>
                      <tr>
                        <td>{{ $t("fisioterapia") }}</td>
                        <td>
                          <strong
                            >{{ $t("bono") }} 4 {{ $t("sessions") }}</strong
                          >
                        </td>
                        <td>170€</td>
                        <td>50min</td>
                      </tr>
                      <tr>
                        <td>{{ $t("fisioterapia") }}</td>
                        <td>
                          <strong
                            >{{ $t("bono") }} 10 {{ $t("sessions") }}</strong
                          >
                        </td>
                        <td>400€</td>
                        <td>50min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="col-12 col-lg-6">
                <h3 class="mb-3 text-center">{{ $t("osteopatia") }}</h3>
                <div class="table-responsive bg-white">
                  <table class="table mb-0">
                    <thead>
                      <th scope="col">{{ $t("tractament") }}</th>
                      <th scope="col">{{ $t("servei") }}</th>
                      <th scope="col">{{ $t("preu") }}</th>
                      <th scope="col">{{ $t("durada") }}</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ $t("osteopatia") }}</td>
                        <td>1 {{ $t("sessio") }}</td>
                        <td>60€</td>
                        <td>50min</td>
                      </tr>
                      <tr>
                        <td>{{ $t("osteopatia") }}</td>
                        <td>
                          <strong
                            >{{ $t("bono") }} 4 {{ $t("sessions") }}</strong
                          >
                        </td>
                        <td>220€</td>
                        <td>50min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="col-12 col-lg-6">
                <h3 class="mb-3 text-center">
                  {{ $t("fisioterapia") }} + {{ $t("ecografia") }}
                </h3>
                <div class="table-responsive bg-white">
                  <table class="table mb-0">
                    <thead>
                      <th scope="col">{{ $t("tractament") }}</th>
                      <th scope="col">{{ $t("servei") }}</th>
                      <th scope="col">{{ $t("preu") }}</th>
                      <th scope="col">{{ $t("durada") }}</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {{ $t("fisioterapia") }} + {{ $t("ecografia") }}
                        </td>
                        <td>1 {{ $t("sessio") }}</td>
                        <td>60€</td>
                        <td>50min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="col-12 col-lg-6">
                <h3 class="mb-3 text-center">
                  {{ $t("entrenament-personal") }}
                </h3>
                <div class="table-responsive bg-white">
                  <table class="table mb-0">
                    <thead>
                      <th scope="col">{{ $t("tractament") }}</th>
                      <th scope="col">{{ $t("servei") }}</th>
                      <th scope="col">{{ $t("preu") }}</th>
                      <th scope="col">{{ $t("durada") }}</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ $t("entrenament-personal") }}</td>
                        <td>1 {{ $t("sessio") }}</td>
                        <td>40€</td>
                        <td>50min</td>
                      </tr>
                      <tr>
                        <td>{{ $t("entrenament-personal") }}</td>
                        <td>
                          <strong
                            >{{ $t("bono") }} 4 {{ $t("sessions") }}</strong
                          >
                        </td>
                        <td>145€</td>
                        <td>50min</td>
                      </tr>
                      <tr>
                        <td>{{ $t("entrenament-personal") }}</td>
                        <td>
                          <strong
                            >{{ $t("bono") }} 10 {{ $t("sessions") }}</strong
                          >
                        </td>
                        <td>340€</td>
                        <td>50min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="col-12 col-lg-6">
                <h3 class="mb-3 text-center">{{ $t("diatermia") }}</h3>
                <div class="table-responsive bg-white">
                  <table class="table mb-0">
                    <thead>
                      <th scope="col">{{ $t("tractament") }}</th>
                      <th scope="col">{{ $t("servei") }}</th>
                      <th scope="col">{{ $t("preu") }}</th>
                      <th scope="col">{{ $t("durada") }}</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ $t("diatermia") }}</td>
                        <td>1 {{ $t("sessio") }}</td>
                        <td>35€</td>
                        <td>30min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="col-12 col-lg-6">
                <h3 class="mb-3 text-center">{{ $t("ecografia") }}</h3>
                <div class="table-responsive bg-white">
                  <table class="table mb-0">
                    <thead>
                      <th scope="col">{{ $t("tractament") }}</th>
                      <th scope="col">{{ $t("servei") }}</th>
                      <th scope="col">{{ $t("preu") }}</th>
                      <th scope="col">{{ $t("durada") }}</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ $t("ecografia") }}</td>
                        <td>1 {{ $t("sessio") }}</td>
                        <td>30€</td>
                        <td>25min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Pricing Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>{{ $t("opinions") }}</h2>
        </div>

        <swiper
          class="swiper"
          data-aos="fade-up"
          data-aos-delay="100"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
          }"
          space-between="30"
          :loop="true"
          :slides-per-view="1"
          :navigation="true"
          :centered-slides="true"
          :modules="[Autoplay, Navigation]"
          :initial-slide="1"
          :breakpoints="{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }"
        >
          <swiper-slide class="swiper-slide">
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <div class="d-flex align-items-center">
                  <img
                    loading="lazy"
                    src="../../src/assets/img/testimonials/testimonial.svg"
                    class="testimonial-img flex-shrink-0"
                    alt="User Icon"
                  />
                  <div>
                    <h3>Gerard</h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  {{ $t("opinio-3") }}
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div> </swiper-slide
          ><!-- End testimonial item -->

          <swiper-slide class="swiper-slide">
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <div class="d-flex align-items-center">
                  <img
                    loading="lazy"
                    src="../../src/assets/img/testimonials/testimonial.svg"
                    class="testimonial-img flex-shrink-0"
                    alt="User Icon"
                  />
                  <div>
                    <h3>Pau</h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  {{ $t("opinio-1") }}
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div> </swiper-slide
          ><!-- End testimonial item -->

          <swiper-slide class="swiper-slide">
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <div class="d-flex align-items-center">
                  <img
                    loading="lazy"
                    src="../../src/assets/img/testimonials/testimonial.svg"
                    class="testimonial-img flex-shrink-0"
                    alt="User Icon"
                  />
                  <div>
                    <h3>Clara</h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  {{ $t("opinio-2") }}
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div> </swiper-slide
          ><!-- End testimonial item -->

          <swiper-slide class="swiper-slide">
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <div class="d-flex align-items-center">
                  <img
                    loading="lazy"
                    src="../../src/assets/img/testimonials/testimonial.svg"
                    class="testimonial-img flex-shrink-0"
                    alt="User Icon"
                  />
                  <div>
                    <h3>Lourdes</h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  {{ $t("opinio-4") }}
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div> </swiper-slide
          ><!-- End testimonial item -->
          <swiper-slide class="swiper-slide">
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <div class="d-flex align-items-center">
                  <img
                    loading="lazy"
                    src="../../src/assets/img/testimonials/testimonial.svg"
                    class="testimonial-img flex-shrink-0"
                    alt="User Icon"
                  />
                  <div>
                    <h3>Assumpta</h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  {{ $t("opinio-5") }}
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div> </swiper-slide
          ><!-- End testimonial item -->
          <swiper-slide class="swiper-slide">
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <div class="d-flex align-items-center">
                  <img
                    loading="lazy"
                    src="../../src/assets/img/testimonials/testimonial.svg"
                    class="testimonial-img flex-shrink-0"
                    alt="User Icon"
                  />
                  <div>
                    <h3>Joan</h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  {{ $t("opinio-6") }}
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div> </swiper-slide
          ><!-- End testimonial item -->
          <swiper-slide class="swiper-slide">
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <div class="d-flex align-items-center">
                  <img
                    loading="lazy"
                    src="../../src/assets/img/testimonials/testimonial.svg"
                    class="testimonial-img flex-shrink-0"
                    alt="User Icon"
                  />
                  <div>
                    <h3>Oscar</h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  {{ $t("opinio-7") }}
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div> </swiper-slide
          ><!-- End testimonial item -->
          <swiper-slide class="swiper-slide">
            <div class="testimonial-wrap">
              <div class="testimonial-item">
                <div class="d-flex align-items-center">
                  <img
                    loading="lazy"
                    src="../../src/assets/img/testimonials/testimonial.svg"
                    class="testimonial-img flex-shrink-0"
                    alt="User Icon"
                  />
                  <div>
                    <h3>Laura</h3>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i
                      ><i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  {{ $t("opinio-8") }}
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div> </swiper-slide
          ><!-- End testimonial item -->
        </swiper>
      </div>
    </section>
    <!-- End Testimonials Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>{{ $t("contacte") }}</h2>
        </div>

        <div class="row gx-lg-0 gy-4">
          <div class="col-lg-4">
            <div
              class="info-container d-flex flex-column align-items-center justify-content-center"
            >
              <div class="info-item d-flex">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>{{ $t("adreca") }}</h4>
                  <p>C/ de Muntaner, 48, 4rt 1a, 08011 Barcelona</p>
                </div>
              </div>
              <!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email</h4>
                  <a style="color: #fff" href="mailto:contact@example.com"
                    >annasm96@gmail.com</a
                  >
                </div>
              </div>
              <!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>{{ $t("telefon") }}</h4>
                  <a style="color: #fff" href="tel:+34619629025">619629025</a>
                </div>
              </div>
              <!-- End Info Item -->
            </div>
          </div>

          <div class="col-lg-8">
            <div class="maps-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.44025300286!2d2.155259290979024!3d41.386244497299245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a383deb46c01%3A0x6fc5691789491f56!2sFisioter%C3%A0pia%20i%20Osteopatia%20Anna%20S%C3%A0bat!5e0!3m2!1ses!2ses!4v1704214417888!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <!-- End Contact Form -->
        </div>
      </div>
    </section>
    <!-- End Contact Section -->
  </main>
  <!-- End #main -->
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
</script>
