<template>
  <section class="services sections-bg">
    <div class="container">
      <div class="section-header">
        <h1>Blog</h1>
      </div>

      <div class="recent-articles">
        <h2>Últimos Artículos</h2>
        <div class="articles-grid">
          <div
            v-for="article in recentArticles"
            :key="article.link"
            class="article-card"
          >
            <img
              v-if="article.image"
              :src="article.image"
              alt="Imagen del artículo"
              class="article-image"
            />
            <div class="article-content">
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-summary">{{ article.summary }}</p>
              <!-- Usamos :to con el enlace dinámico basado en article.link -->
              <RouterLink :to="`/blog/${article.link}`" class="read-more">
                Leer más
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface Article {
  link: string;
  title: string;
  summary: string;
  image?: string;
}

const recentArticles: Article[] = [
  {
    link: "5-errores-comunes-dolores-cervicales-como-evitar",
    title:
      "Los 5 Errores Más Comunes que Provocan Dolores Cervicales y Cómo Evitarlos",
    summary:
      "Aprende a evitar los errores más comunes que provocan dolores cervicales con algunos consejos prácticos.",
    // image: "https://via.placeholder.com/300x200?text=Imagen+1", // Reemplaza con la imagen real
  },
  // Agrega más artículos aquí si es necesario
];
</script>

<style scoped>
.recent-articles {
  margin-bottom: 40px;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.article-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.article-card:hover {
  transform: translateY(-3px);
}

.article-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article-content {
  padding: 20px;
}

.article-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--color-primary);
}

.article-summary {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

.read-more {
  font-size: 1rem;
  color: var(--color-secondary);
  text-decoration: none;
  font-weight: bold;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
