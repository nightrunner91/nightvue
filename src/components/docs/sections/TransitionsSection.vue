<template>
  <doc-section id="transitions">
    <demo-panel
      title="Speed and easing"
      note="Hover the row — each bar uses its own tokens">
      <div class="transition-list">
        <div
          v-for="row in rows"
          :key="row.label"
          class="transition-row">
          <div class="transition-row__head">
            <code>{{ row.label }}</code>
            <span>{{ row.speed }} · {{ row.timing }}</span>
          </div>
          <div class="transition-row__track">
            <span
              class="transition-row__bar"
              :class="[`speed-${row.speed}`, `timing-${row.timing}`]" />
          </div>
        </div>
      </div>
    </demo-panel>

    <div class="doc-grid">
      <demo-panel title="Speeds">
        <div class="token-list">
          <div
            v-for="speed in speeds"
            :key="speed.name"
            class="token-row">
            <code>.speed-{{ speed.name }}</code>
            <span>{{ speed.value }}</span>
          </div>
        </div>
      </demo-panel>

      <demo-panel title="Timing functions">
        <div class="token-list">
          <div
            v-for="timing in timings"
            :key="timing.name"
            class="token-row">
            <code>.timing-{{ timing.name }}</code>
            <span>{{ timing.value }}</span>
          </div>
        </div>
      </demo-panel>
    </div>

    <div class="code-grid">
      <code-block
        label="Utility classes"
        :code="snippets.classes" />
      <code-block
        label="transition() function"
        :code="snippets.function" />
      <code-block
        label="complex-transition()"
        :code="snippets.complex" />
      <code-block
        label="Token maps"
        :code="snippets.maps" />
    </div>
  </doc-section>
</template>

<script>
export default {
  name: 'TransitionsSection',

  data() {
    return {
      rows: [
        { label: 'transition(opacity, short, ease-in)', speed: 'short', timing: 'ease-in' },
        { label: 'transition(transform, base, standard)', speed: 'base', timing: 'standard' },
        { label: 'transition(transform, slow, emphasized)', speed: 'slow', timing: 'emphasized' },
        { label: 'transition(transform, lazy, linear)', speed: 'lazy', timing: 'linear' },
      ],
      speeds: [
        { name: 'shortest', value: '.15s' },
        { name: 'shorter', value: '.2s' },
        { name: 'short', value: '.25s' },
        { name: 'base', value: '.3s' },
        { name: 'slow', value: '.375s' },
        { name: 'slower', value: '.5s' },
        { name: 'lazy', value: '.75s' },
      ],
      timings: [
        { name: 'linear', value: 'cubic-bezier(0, 0, 1, 1)' },
        { name: 'ease', value: 'cubic-bezier(0.25, 0.1, 0.25, 1)' },
        { name: 'ease-in', value: 'cubic-bezier(0.42, 0, 1, 1)' },
        { name: 'ease-out', value: 'cubic-bezier(0, 0, 0.58, 1)' },
        { name: 'standard', value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
        { name: 'emphasized', value: 'cubic-bezier(0, 0, 0.2, 1)' },
        { name: 'sharp', value: 'cubic-bezier(0.4, 0, 0.6, 1)' },
      ],
      snippets: {
        classes: `.speed-shortest { transition-duration: .15s }
.speed-shorter  { transition-duration: .2s }
.speed-short    { transition-duration: .25s }
.speed-base     { transition-duration: .3s }
.speed-slow     { transition-duration: .375s }
.speed-slower   { transition-duration: .5s }
.speed-lazy     { transition-duration: .75s }

.timing-linear      { transition-timing-function: cubic-bezier(0, 0, 1, 1) }
.timing-ease        { transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1) }
.timing-ease-in     { transition-timing-function: cubic-bezier(0.42, 0, 1, 1) }
.timing-ease-out    { transition-timing-function: cubic-bezier(0, 0, 0.58, 1) }
.timing-ease-in-out { transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1) }
.timing-standard    { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) }
.timing-emphasized  { transition-timing-function: cubic-bezier(0, 0, 0.2, 1) }
.timing-decelerated { transition-timing-function: cubic-bezier(0, 0, 0.2, 1) }
.timing-sharp       { transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1) }`,
        function: `transition: transition(transform);
// => transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

transition: transition(opacity, short, ease-in);
// => opacity 0.25s cubic-bezier(0.42, 0, 1, 1);

transition: transition(background-color, slow, emphasized);
// => background-color 0.375s cubic-bezier(0, 0, 0.2, 1);

transition: transition(color, lazy, linear, 1s);
// => color 0.75s cubic-bezier(0, 0, 1, 1) 1s;

transition: transition(box-shadow, 2s, cubic-bezier(.08,1.04,.82,-0.73));
// => box-shadow 2s cubic-bezier(.08,1.04,.82,-0.73);`,
        complex: `transition: complex-transition(
  transition(opacity, short, ease-in),
  transition(background-color, slow, emphasized),
  transition(color, lazy, linear, 1s),
);

// => opacity 0.25s cubic-bezier(0.42, 0, 1, 1),
//    background-color 0.375s cubic-bezier(0, 0, 0.2, 1),
//    color 0.75s cubic-bezier(0, 0, 1, 1) 1s;`,
        maps: `$transition-speed: (
  shortest: .15s,
  shorter:  .2s,
  short:    .25s,
  base:     .3s,
  slow:     .375s,
  slower:   .5s,
  lazy:     .75s,
);

$transition-timings: (
  linear:       cubic-bezier(0, 0, 1, 1),
  ease:         cubic-bezier(0.25, 0.1, 0.25, 1),
  ease-in:      cubic-bezier(0.42, 0, 1, 1),
  ease-out:     cubic-bezier(0, 0, 0.58, 1),
  ease-in-out:  cubic-bezier(0.42, 0, 0.58, 1),

  standard:     cubic-bezier(0.4, 0, 0.2, 1),
  emphasized:   cubic-bezier(0, 0, 0.2, 1),
  decelerated:  cubic-bezier(0, 0, 0.2, 1),
  accelerated:  cubic-bezier(0.4, 0, 1, 1),

  sharp:        cubic-bezier(0.4, 0, 0.6, 1)
);`,
      },
    }
  },
}
</script>
