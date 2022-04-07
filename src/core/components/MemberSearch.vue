<template>
  <div class="search">

    <!-- Input Toggle -->
    <div class="input">
      <label
        for="searchInput"
        class="input__label d-flex align-items-center">
        <span>Beneficiary Name</span>
        <sup
          v-if="required"
          class="ml-25">
          <i class="fas fa-asterisk fa-xs opacity-75" />
        </sup>

        <!--
          *** Might be usefull in the future ***
          <button
            v-if="selectedMember.id"
            v-waves
            type="reset"
            class="btn btn-danger-flat ml-1 radius-small"
            @click="clearMember">
            <i class="fal fa-times" />
          </button>
        -->

      </label>
      <div
        ref="searchToggle"
        class="input-group"
        @click="openSearchDropdown(true), clearValidation('selectedMember')">
        <input
          id="resultInput"
          ref="resultInput"
          type="text"
          readonly
          onfocus="this.blur()"
          class="input__field input__field--medium cursor-pointer"
          :class="[searchOpened ? 'radius-bl-zero' : '', isInvalid('selectedMember') ? 'input__field--invalid' : null]"
          placeholder="Select company"
          autocomplete="off"
          v-model="selectedMember.company" />
        <div
          class="input-group__prepend cursor-pointer"
          :class="searchOpened ? 'radius-br-zero' : ''">
          <i class="fas fa-address-card" />
        </div>
      </div>
      <label
        for="searchInput"
        v-for="(error, index) in validations.selectedMember"
        :key="`searchInput-error-${index}`"
        v-show="!error.valid"
        class="input__error">
        <i class="fas fa-exclamation-triangle mr-50" />
        <span>{{ error.message }}</span>
      </label>
    </div>

    <!-- Search Dropdown -->
    <div
      ref="searchDropdown"
      v-if="searchOpened"
      v-outsideClick='{exclude: ["searchDropdown", "searchToggle"], handler: "closeSearchDropdown"}'
      class="search__dropdown m-0 p-0 bg-white radius-bl-base radius-br-base">

      <!-- Search Input -->
      <div
        class="d-flex px-1 py-75 bg-light position-relative"
        :class="searchQuery.length === 0 ? 'radius-bl-base radius-br-base' : ''">
        <div class="input-group">
          <div class="input-group__append">
            <i class="fas fa-search" />
          </div>
          <input
            id="searchInput"
            ref="searchInput"
            type="text"
            class="search__input input__field input__field--small"
            placeholder="Start typing here..."
            autocomplete="off"
            v-model="searchQuery"
            @input="searchMembers" />
        </div>
        <div class="search__preloader d-flex justify-content-center align-items-center">
          <div
            v-show="searchMembersResponse"
            class="spinner spinner-xs spinner-info">
            <div class="spinner__inner">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>

      <!-- Search Results -->
      <VuePerfectScrollbar
        class="search__scrollarea"
        :options="{
          wheelPropagation: true
        }">
        <div v-if="foundMembers.length >= 1 && searchQuery.length > 1">
          <div
            v-for="(member, index) in foundMembers"
            :key="`member-${index}`"
            v-waves
            class="search__item cursor-pointer px-1 no-select w-100 d-flex flex-column justify-content-center"
            :class="member.id === selectedMember.id ? 'search__item--selected' : ''"
            @click="selectMember(member), closeSearchDropdown()">
            <div class="font-weight-500 mb-25 clr-dark text-truncate mw-100">
              <text-highlight :queries="searchQueries">
                {{ member.company }}
              </text-highlight>
            </div>
            <div class="small clr-secondary text-truncate mw-100">
              <i class="fas fa-user-circle fa-sm mr-25" />
              <text-highlight :queries="searchQueries">
                {{ member.fullname }}
              </text-highlight>
            </div>
          </div>
        </div>
        <div
          v-if="foundMembers.length === 0 && searchQuery.length > 1"
          class="search__placeholder py-1 text-center d-flex align-items-center flex-column clr-secondary">
          <i class="fas fa-search-minus fa-2x mb-25 opacity-75" />
          <span class="mt-25">Nothing found</span>
        </div>
      </VuePerfectScrollbar>
    </div>

  </div>
</template>

<script>
let handleOutsideClick

const initialMember = {
  company: '',
  fullname: '',
  id: '',
}

export default {
  name: 'MemberSearch',
  directives: {
    outsideClick: {
      bind(el, binding, vnode) {
        // Here's the click/touchstart handler
        // (it is registered below)
        handleOutsideClick = e => {
          e.stopPropagation()
          // Get the handler method name and the exclude array
          // from the object used in v-closable
          const { handler, exclude } = binding.value
          // This variable indicates if the clicked element is excluded
          let clickedOnExcludedEl = false
          exclude.forEach(refName => {
            // We only run this code if we haven't detected
            // any excluded element yet
            if (!clickedOnExcludedEl) {
              // Get the element using the reference name
              const excludedEl = vnode.context.$refs[refName]
              // See if this excluded element
              // is the same element the user just clicked on
              clickedOnExcludedEl = excludedEl.contains(e.target)
            }
          })
          // We check to see if the clicked element is not
          // the dialog element and not excluded
          if (!el.contains(e.target) && !clickedOnExcludedEl) {
            // If the clicked element is outside the dialog
            // and not the button, then call the outside-click handler
            // from the same component this directive is used in
            vnode.context[handler]()
          }
        }
        // Register click/touchstart event listeners on the whole page
        document.addEventListener("click", handleOutsideClick)
        document.addEventListener("touchstart", handleOutsideClick)
      },
      unbind() {
        // If the element that has v-closable is removed, then
        // unbind click/touchstart listeners from the whole page
        document.removeEventListener("click", handleOutsideClick)
        document.removeEventListener("touchstart", handleOutsideClick)
      }
    }
  },
  props: {
    required: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  data() {
    return {
      selectedMember: initialMember,
      searchQuery: '',
      searchOpened: false,

      validations: {
        selectedMember: {
          required: {
            valid: true,
            message: 'Beneficiary Name field is required.',
          },
        },
      },
    }
  },
  computed: {
    foundMembers() {
      return this.$store.state.members.foundMembers
    },

    searchMembersResponse() {
      return this.$store.state.members.responses.searchMembers
    },

    searchQueries() {
      return this.searchQuery.length > 1 ? this.searchQuery.split(' ') : []
    },
  },
  mounted() {
    document.addEventListener('keydown', this.processKeydown)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.processKeydown)
  },
  methods: {
    validateForm() {
      const self = this
      let results = []

      return new Promise(resolve => {
        function testBeneficiary() {
          const id = self.selectedMember.id
          const validations = self.validations.selectedMember

          // Required
          if (id) {
            validations.required.valid = true
          } else {
            validations.required.valid = false
          }
        }

        function checkResults() {
          results = []

          Object.keys(self.validations).forEach(type => {
            const target = self.validations[type]

            Object.keys(target).forEach(param => {
              results.push(target[param].valid)
            })
          })
        }

        testBeneficiary()
        checkResults()

        if (results.some(el => !el)) {
          resolve({
            status: false,
          })
        } else {
          resolve({
            status: true,
            data: this.selectedMember
          })
        }
      })
    },

    clearValidation(type) {
      const target = this.validations[type]

      Object.keys(target).forEach(key => {
        target[key].valid = true
      })
    },

    isInvalid(type) {
      const target = this.validations[type]
      const errors = []

      Object.keys(target).forEach(key => {
        errors.push(target[key].valid)
      })

      return errors.some(el => !el)
    },

    searchMembers() {
      if (this.searchQuery.length > 1) {
        this.$store.dispatch('members/searchMembers', this.searchQuery)
      }
    },

    openSearchDropdown() {
      this.searchOpened = true
      this.focusInput()
    },

    closeSearchDropdown() {
      this.searchOpened = false
    },

    focusInput() {
      this.$nextTick()
        .then(() => {
          const input = this.$refs.searchInput
          input.focus()
        })
    },

    processKeydown(event) {
      event && event.keyCode === 27 ? this.closeSearchDropdown() : false
    },

    selectMember(member) {
      this.selectedMember = member
    },

    clearMember() {
      this.selectedMember = initialMember
    },
  },
}
</script>
