<template>
  <!-- ======= Header ======= -->
  <section id="topbar" class="topbar d-flex align-items-center">
    <div
      class="container gap-2 d-flex flex-column flex-md-row justify-content-center justify-content-md-between"
    >
      <div
        class="contact-info d-flex justify-content-center align-items-center"
      >
        <i class="bi bi-envelope d-flex align-items-center"
          ><a href="mailto:annasm96@gmail.com">annasm96@gmail.com</a></i
        >
        <i class="bi bi-phone d-flex align-items-center ms-4"
          ><a href="tel:+34638429316">638429316</a></i
        >
      </div>
      <div
        class="social-links d-flex justify-content-center align-items-center"
      >
        <select
          name="Language Selector"
          id="language-selector"
          v-model="$i18n.locale"
        >
          <option value="cat">Català</option>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
        <a
          href="https://www.instagram.com/anna_fisioosteo/"
          target="_blank"
          class="instagram"
          ><i class="bi bi-instagram"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/anna-s%C3%A0bat-mart%C3%AD-4a7885175/"
          target="_blank"
          class="linkedin"
          ><i class="bi bi-linkedin"></i
        ></a>
      </div>
    </div>
  </section>
  <!-- End Top Bar -->

  <header id="header" class="header d-flex align-items-center">
    <div
      class="container-fluid container-xl d-flex align-items-center justify-content-between"
    >
      <RouterLink to="/" class="logo d-flex align-items-center">
        <img src="../../src/assets/img/logo.png" alt="Logo" />
        <h3>Anna Sàbat<span>.</span></h3>
      </RouterLink>
      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <RouterLink to="/">{{ $t("inici") }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/servicios">{{ $t("serveis") }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/blog">Blog</RouterLink>
          </li>
          <li>
            <a
              href="https://calendar.app.google/m9pTDB2X49ecRyE16"
              target="_blank"
              >{{ $t("reserva") }}</a
            >
          </li>
        </ul>
      </nav>
      <!-- .navbar -->

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    </div>
  </header>
  <!-- End Header -->
  <!-- End Header -->
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
