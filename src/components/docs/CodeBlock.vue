<template>
  <div class="codeblock">
    <div class="codeblock__head">
      <span class="codeblock__label">{{ label }}</span>
      <button
        class="codeblock__copy"
        type="button"
        @click="copy">{{ copied ? 'Copied' : 'Copy' }}</button>
    </div>
    <pre class="codeblock__body"><code>{{ code }}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'CodeBlock',

  props: {
    label: {
      type: String,
      default: 'Code',
    },

    code: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      copied: false,
    }
  },

  beforeDestroy() {
    clearTimeout(this.timer)
  },

  methods: {
    copy() {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(this.code)
          .then(this.markCopied)
          .catch(() => {})
        return
      }

      const area = document.createElement('textarea')

      area.value = this.code
      area.setAttribute('readonly', '')
      area.style.position = 'absolute'
      area.style.left = '-9999px'
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
      this.markCopied()
    },

    markCopied() {
      this.copied = true
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.copied = false
      }, 1600)
    },
  },
}
</script>
