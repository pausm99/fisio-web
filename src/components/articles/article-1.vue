<template>
  <Navbar></Navbar>
  <section class="article sections-bg">
    <article class="container" v-html="$t('articles.article-1')"></article>
    <div class="links">
      <div class="visit">
        <RouterLink to="/">{{ $t("visita-lloc") }}</RouterLink>
      </div>
      <div class="cta">
        <a
          target="_blank"
          href="https://calendar.app.google/m9pTDB2X49ecRyE16"
          >{{ $t("cta") }}</a
        >
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
<script setup lang="ts">
import Footer from "../Footer.vue";
import Navbar from "../Navbar.vue";
import { RouterLink } from "vue-router";
</script>

<style lang="scss">
.article {
  .section-header {
    padding: none;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 900px !important;
    margin: auto;
  }

  h1 {
    color: #333;
    text-align: center;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h2 {
    color: var(--color-primary);
    border-left: 5px solid var(--color-primary);
    padding-left: 10px;
    margin-top: 1.5rem;
  }

  h3 {
    color: #0077cc;
    margin-top: 1rem;
  }

  p {
    line-height: 1.6;
    color: #555;
  }

  strong {
    color: var(--color-secondary);
  }

  ul {
    padding-left: 20px;
    list-style-type: disc;
  }

  li {
    margin: 8px 0;
  }

  .section-header {
    text-align: center;
  }

  .links {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 1rem;
    margin-top: 2rem;
  }

  .visit {
    text-decoration: none;
    border: 1px solid var(--color-secondary);
    padding: 10px 15px;
    border-radius: 8px;
  }

  .cta {
    text-decoration: none;
    background: var(--color-primary);
    color: #fff;
    padding: 10px 15px;
    border-radius: 8px;
  }

  .cta a {
    color: #fff;
  }

  /* Responsivo */
  @media (max-width: 768px) {
    article {
      padding: 1.5rem;
    }
  }
}
</style>
