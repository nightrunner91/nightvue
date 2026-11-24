<template>
  <doc-section id="utilities">
    <demo-panel
      title="Cursor helpers"
      note="Hover a tile to see the cursor">
      <div class="cursor-grid">
        <div
          v-for="cursor in cursors"
          :key="cursor"
          class="cursor-tile"
          :class="'cursor-' + cursor">
          <span class="cursor-tile__icon">↖</span>
          <code>.cursor-{{ cursor }}</code>
        </div>
      </div>
    </demo-panel>

    <div class="doc-grid">
      <demo-panel
        title="Selection, overflow and events"
        note="Small helpers with a big payoff">
        <div class="utility-row">
          <span class="utility-row__label">.no-select</span>
          <div class="utility-box no-select">
            Try to select this sentence — user-select is disabled.
          </div>
        </div>

        <div class="utility-row">
          <span class="utility-row__label">.no-overflow</span>
          <div class="utility-box no-overflow">
            <div class="utility-overflow">
              This line is intentionally wider than the box and is clipped.
            </div>
          </div>
        </div>

        <div class="utility-row">
          <span class="utility-row__label">.no-events</span>
          <button
            class="demo-button no-events"
            type="button">This button ignores clicks</button>
        </div>
      </demo-panel>

      <demo-panel
        title="Visibility"
        note="visibility, not display">
        <div class="demo-toolbar">
          <button
            class="demo-button"
            type="button"
            @click="visible = !visible">{{ visible ? 'Hide' : 'Show' }}</button>
          <span class="demo-toolbar__hint">Toggles .invisible</span>
        </div>

        <div class="visibility-stage">
          <div class="visibility-box">
            A
            <small>always visible</small>
          </div>
          <div
            class="visibility-box visibility-box--accent"
            :class="visible ? 'visible' : 'invisible'">
            B
            <small>{{ visible ? '.visible' : '.invisible' }}</small>
          </div>
          <div class="visibility-box">
            C
            <small>always visible</small>
          </div>
        </div>

        <p class="demo-text demo-text--muted">
          Invisible elements keep their space in the layout. Use <code>.d-none</code> when
          the element should stop taking up room.
        </p>
      </demo-panel>
    </div>

    <code-block
      label="Utility classes"
      :code="snippets.classes" />
  </doc-section>
</template>

<script>
export default {
  name: 'UtilitiesSection',

  data() {
    return {
      visible: true,
      cursors: ['pointer', 'help', 'wait', 'move', 'not-allowed', 'context-menu', 'alias'],
      snippets: {
        classes: `.cursor-pointer      { cursor: pointer }
.cursor-help         { cursor: help }
.cursor-wait         { cursor: wait }
.cursor-move         { cursor: move }
.cursor-not-allowed  { cursor: not-allowed }
.cursor-context-menu { cursor: context-menu }
.cursor-alias        { cursor: alias }

.no-select   { user-select: none }
.no-overflow { overflow: hidden }
.no-events   { pointer-events: none }

.visible   { visibility: visible }
.invisible { visibility: hidden }`,
      },
    }
  },
}
</script>
