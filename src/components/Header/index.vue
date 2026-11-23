<template>
  <header class="header">
    <div class="container header__inner">
      <router-link
        class="header__brand"
        to="/home">
        <img
          class="header__logo"
          src="@/assets/images/logo.png"
          alt="NightVue logo"
          width="34"
          height="34">
        <span class="header__name">Night<span class="header__name-accent">Vue</span></span>
        <span class="header__status">archive</span>
      </router-link>

      <nav class="header__nav">
        <a
          v-for="item in items"
          :key="item.id"
          class="header__link"
          :href="`#${item.id}`">{{ item.label }}</a>
      </nav>

      <a
        class="header__github"
        href="https://github.com/nightrunner91/nightvue"
        target="_blank"
        rel="noopener">
        GitHub
        <svg-icon
          icon="link"
          size="sm" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      items: [
        { id: 'getting-started', label: 'Start' },
        { id: 'included', label: 'Included' },
        { id: 'structure', label: 'Structure' },
        { id: 'documentation', label: 'Docs' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/@core/globals.scss";

.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: rgba(246, 243, 251, 0.82);
  border-bottom: 1px solid color('primary', $opacity: 1);
  backdrop-filter: blur(14px);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
  }

  &__brand {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: color('gray-10');
  }

  &__logo {
    width: 34px;
    height: 34px;
    margin-right: spacer(2);
    border-radius: radius('circle');
  }

  &__name {
    font-family: map-get($font-families, headings);
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &__name-accent {
    color: color('primary');
  }

  &__status {
    margin-left: spacer(2);
    padding: 2px 8px;
    border: 1px solid color('primary', $opacity: 2);
    border-radius: radius('circle');
    color: color('primary', dark, 2);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__nav {
    display: none;
    align-items: center;
    gap: spacer(6);
  }

  &__link {
    position: relative;
    color: color('gray-8');
    font-size: 0.9375rem;
    text-decoration: none;
    transition: transition(color, short);

    &:hover {
      color: color('primary');
    }
  }

  &__github {
    display: inline-flex;
    align-items: center;
    gap: spacer(1);
    padding: 8px 14px;
    border: 1px solid color('gray-2');
    border-radius: radius('base');
    color: color('gray-9');
    font-size: 0.875rem;
    text-decoration: none;
    transition: transition(all, short);

    &:hover {
      border-color: color('primary');
      color: color('primary');
      background-color: color('primary', $opacity: 1);
    }
  }
}

@media #{$sm-up} {
  .header {
    &__nav {
      display: flex;
    }
  }
}

@media (max-width: 479px) {
  .header {
    &__status {
      display: none;
    }

    &__name {
      font-size: 1.125rem;
    }
  }
}
</style>
