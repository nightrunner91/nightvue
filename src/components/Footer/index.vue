<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand-block">
        <p class="footer__brand">Night<span class="footer__brand-accent">Vue</span></p>
        <p class="footer__note">
          A Vue 2 boilerplate and SCSS toolkit, built between 2020 and 2023
          and preserved here as a live demo.
        </p>
      </div>

      <nav class="footer__links">
        <a
          class="footer__link"
          href="https://github.com/nightrunner91/nightvue"
          target="_blank"
          rel="noopener">GitHub repository</a>
        <a
          class="footer__link"
          href="https://github.com/nightrunner91/nightvue#documentation"
          target="_blank"
          rel="noopener">Documentation</a>
        <a
          class="footer__link"
          href="https://github.com/nightrunner91/nightvue/blob/master/LICENSE"
          target="_blank"
          rel="noopener">MIT License</a>
      </nav>

      <p class="footer__copy">© 2020—2023 nightrunner91</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import "@/styles/@core/globals.scss";

.footer {
  padding: spacer(12) 0 spacer(8);
  background-color: #15181c;
  color: color('gray-4');

  &__inner {
    display: flex;
    flex-direction: column;
    gap: spacer(6);
  }

  &__brand {
    margin: 0 0 spacer(2);
    color: color('white');
    font-family: map-get($font-families, headings);
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &__brand-accent {
    color: color('success');
  }

  &__note {
    margin: 0;
    max-width: 420px;
    font-size: 0.875rem;
    line-height: 1.6;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: spacer(2) spacer(6);
  }

  &__link {
    color: color('gray-3');
    font-size: 0.875rem;
    text-decoration: none;
    transition: transition(color, short);

    &:hover {
      color: color('white');
    }
  }

  &__copy {
    margin: 0;
    color: color('gray-7');
    font-size: 0.75rem;
  }
}

@media #{$md-up} {
  .footer {
    &__inner {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }

    &__copy {
      margin-left: auto;
    }
  }
}
</style>
