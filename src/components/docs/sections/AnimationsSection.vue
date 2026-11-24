<template>
  <doc-section id="animations">
    <demo-panel
      title="Animation playground"
      note="Two bundled keyframes and two custom ones">
      <div class="demo-toolbar">
        <button
          class="demo-button"
          type="button"
          @click="playing = !playing">{{ playing ? 'Pause' : 'Play' }}</button>
        <span class="demo-toolbar__hint">animation-play-state switches at runtime</span>
      </div>

      <div class="animation-grid">
        <div class="animation-card">
          <div class="animation-stage">
            <svg-icon
              icon="link"
              size="2xl"
              class="anim-spin"
              :class="{ 'anim-paused': !playing }" />
          </div>
          <code>spin</code>
          <span>2s · linear · infinite</span>
        </div>

        <div class="animation-card">
          <div class="animation-stage">
            <span class="animation-ghost" />
            <span
              class="anim-fade animation-shape"
              :class="{ 'anim-paused': !playing }" />
          </div>
          <code>fade-in</code>
          <span>1.2s · ease-in-out · alternate</span>
        </div>

        <div class="animation-card">
          <div class="animation-stage">
            <span
              class="anim-pulse animation-shape animation-shape--success"
              :class="{ 'anim-paused': !playing }" />
          </div>
          <code>pulse</code>
          <span>1.4s · emphasized · alternate</span>
        </div>

        <div class="animation-card">
          <div class="animation-stage">
            <span
              class="anim-float animation-shape animation-shape--warning"
              :class="{ 'anim-paused': !playing }" />
          </div>
          <code>float</code>
          <span>2s · standard · alternate</span>
        </div>
      </div>
    </demo-panel>

    <div class="doc-grid">
      <demo-panel title="Mixin parameters">
        <ul class="class-list">
          <li>
            <code>$name</code>
            <span>keyframes name</span>
          </li>
          <li>
            <code>$duration</code>
            <span>speed token or any time value</span>
          </li>
          <li>
            <code>$delay</code>
            <span>defaults to 0s</span>
          </li>
          <li>
            <code>$count</code>
            <span>defaults to 1, accepts infinite</span>
          </li>
          <li>
            <code>$direction</code>
            <span>normal by default</span>
          </li>
          <li>
            <code>$timing</code>
            <span>easing token, ease-in by default</span>
          </li>
          <li>
            <code>$mode</code>
            <span>forwards by default</span>
          </li>
          <li>
            <code>$state</code>
            <span>running by default</span>
          </li>
        </ul>
      </demo-panel>

      <demo-panel title="Bundled keyframes">
        <pre class="demo-pre">@keyframes fade-in {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}</pre>
        <p class="demo-text demo-text--muted">
          Add your own <code>@keyframes</code> next to these in
          <code>src/styles/animations</code> and use them from the same mixin.
        </p>
      </demo-panel>
    </div>

    <code-block
      label="animation() mixin"
      :code="snippets.mixin" />
    <code-block
      label="Generated CSS"
      :code="snippets.output" />
  </doc-section>
</template>

<script>
export default {
  name: 'AnimationsSection',

  data() {
    return {
      playing: true,
      snippets: {
        mixin: `.element {
  @include animation(
    $name: spin,
    $duration: slow,
    $delay: 1s,
    $count: infinite,
    $direction: reverse,
    $timing: emphasized,
    $state: paused
  );
}

.element {
  @include animation(
    $name: spin,
    $duration: 2s
  );
}

// Only $name and $duration are required.`,
        output: `// Full call
animation: spin 0.375s cubic-bezier(0, 0, 0.2, 1) 1s infinite reverse forwards paused;

// Short call
animation: spin 2s cubic-bezier(0.42, 0, 1, 1) 0s 1 normal forwards;

// The mixin resolves speed and timing tokens
// $duration: slow  => 0.375s
// $timing: emphasized => cubic-bezier(0, 0, 0.2, 1)`,
      },
    }
  },
}
</script>
