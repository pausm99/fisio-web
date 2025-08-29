<style scoped>
    ul {
        list-style: none;
    }

    li {
        padding: 0 0 10px 30px;
        position: relative;
    }

    ul i {
        position: absolute;
        font-size: 20px;
        left: 0;
        top: -3px;
        color: var(--color-primary);
    }

    .service-item {
        position: relative;
        padding-bottom: 4.5rem !important;
    }

    .know-more {
        width: fit-content;
        position: absolute;
        right: 1rem;
        bottom: 1rem;
    }
</style>

<template>
    <section class="services sections-bg">
        <div class="container">
            <div class="section-header">
                <h1>{{ $t("serveis") }}</h1>
                <p id="section-header-text">{{ $t("serveis-descripcio") }}</p>
            </div>

            <div class="row gy-4">
                <div class="row gy-4 mt-2">

                    <div class="col-lg-4 col-md-6">
                    <div class="service-item  position-relative">
                        <div class="icon">
                        <i class="fa-solid fa-hands-holding"></i>
                        </div>
                        <h3>{{ $t("fisioterapia") }}</h3>
                        <p>{{ $t("serveis-1") }}</p>
                        <!-- <RouterLink to="/" class="know-more stretched-link">{{ $t("saber-mes") }} <i class="bi bi-arrow-right"></i></RouterLink> -->
                    </div>
                    </div><!-- End Service Item -->

                    <div class="col-lg-4 col-md-6">
                    <div class="service-item position-relative">
                        <div class="icon">
                        <i class="fa-solid fa-bone"></i>
                        </div>
                        <h3>{{ $t("osteopatia") }}</h3>
                        <p>{{ $t("serveis-2") }}</p>
                        <!-- <RouterLink to="/" class="know-more stretched-link">{{ $t("saber-mes") }} <i class="bi bi-arrow-right"></i></RouterLink> -->
                    </div>
                    </div><!-- End Service Item -->

                    <div class="col-lg-4 col-md-6">
                    <div class="service-item position-relative">
                        <div class="icon">
                        <i class="fa-solid fa-person-running"></i>
                        </div>
                        <h3>{{ $t("readaptacio") }}</h3>
                        <p>{{ $t("serveis-3") }}</p>
                        <!-- <RouterLink to="/" class="know-more stretched-link">{{ $t("saber-mes") }} <i class="bi bi-arrow-right"></i></RouterLink> -->
                    </div>
                    </div><!-- End Service Item -->

                    <div class="col-lg-4 col-md-6">
                    <div class="service-item position-relative">
                        <div class="icon">
                        <i class="fa-solid fa-clipboard-check"></i>
                        </div>
                        <h3>{{ $t("ecografia") }}</h3>
                        <p>{{ $t("serveis-4") }}</p>
                        <!-- <RouterLink to="/" class="know-more stretched-link">{{ $t("saber-mes") }} <i class="bi bi-arrow-right"></i></RouterLink> -->
                    </div>
                    </div><!-- End Service Item -->

                    <div class="col-lg-4 col-md-6">
                    <div class="service-item position-relative">
                        <div class="icon">
                        <i class="fa-solid fa-fire-flame-simple"></i>
                        </div>
                        <h3>{{ $t("diatermia") }}</h3>
                        <p>{{ $t("serveis-5") }}</p>
                        <!-- <RouterLink to="/" class="know-more stretched-link">{{ $t("saber-mes") }} <i class="bi bi-arrow-right"></i></RouterLink> -->
                    </div>
                    </div><!-- End Service Item -->

                    <div class="col-lg-4 col-md-6">
                    <div class="service-item position-relative">
                        <div class="icon">
                        <i class="fa-solid fa-dumbbell"></i>
                        </div>
                        <h3>{{ $t("entrenament") }}</h3>
                        <p>{{ $t("serveis-6") }}</p>
                        <!-- <RouterLink to="/" class="know-more stretched-link">{{ $t("saber-mes") }} <i class="bi bi-arrow-right"></i></RouterLink> -->
                    </div>
                    </div><!-- End Service Item -->
                </div>
            </div>
        </div>
    </section>
</template>
