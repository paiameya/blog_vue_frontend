<template>
  <div class="search-container">
    <Button
      icon="pi pi-search"
      class="p-button-rounded p-button-secondary p-button-text"
      @click="onClickIcon"
    />
    <div
      class="search-select"
      ref="root"
      :class="{ 'active-search': isVisible }"
    >
      <span class="p-input-icon-right input-container">
        <input
          type="search"
          @input="onChange"
          v-model="search"
          @keydown.down="onArrowDown"
          @keydown.up="onArrowUp"
          @keydown.enter="onEnter"
          ref="inputRef"
          class="search-field"
          :class="{ 'active-input': isVisible }"
        />
        <i v-if="isLoading" class="pi pi-spin pi-spinner" />
      </span>

      <ul
        v-show="isOpen && results.length > 0"
        class="search-select-results"
        ref="containerRef"
        tabindex="1"
      >
        <li class="title">Publications</li>
        <li
          v-for="(result, i) in results"
          :key="i"
          @click="onSearchSelect(result)"
          @mouseover="onMouseHover(i)"
          @mouseleave="onMouseLeave"
          class="search-select-result"
          :class="{ 'is-active': i === arrowCounter }"
          :ref="
            el => {
              listRef[i] = el
            }
          "
        >
          <span class="blog-title">
            {{ optionLabel ? result[optionLabel] : result }}</span
          >
          <span class="published-date" v-if="result.date"
            >{{ getDateFormat(result.date) }}
          </span>
        </li>
        <li class="search-all" @click="searchAll">Search all</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, onBeforeUpdate, watch } from 'vue'
import Button from 'primevue/button'
import getDateFormat from '@/utils/getDateFormat'

export default {
  name: 'search-select',
  components: {
    Button,
  },
  props: {
    options: {
      type: Array,
      required: false,
      default: () => [],
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false,
    },
    optionLabel: String,
  },
  setup(props, context) {
    const isOpen = ref(false)
    const results = ref([])
    const search = ref('')
    const isLoading = ref(false)
    const arrowCounter = ref(-1)
    const root = ref(null)
    const listRef = ref([])
    const containerRef = ref(null)
    const isVisible = ref(false)
    const inputRef = ref(null)

    onBeforeUpdate(() => {
      listRef.value = []
    })
    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    watch(
      () => props.options,
      newValue => {
        if (results.value.length !== newValue.length) {
          results.value = newValue
          isLoading.value = false
        }
      }
    )
    const onClickIcon = () => {
      if (search.value && isVisible.value) {
        return
      }
      isVisible.value = !isVisible.value
      inputRef.value.focus()
    }

    const onSearchSelect = result => {
      context.emit('onSelect', JSON.stringify(result))
      search.value = props.optionLabel ? result[props.optionLabel] : result
      isOpen.value = false
    }

    const filterResults = () => {
      results.value = props.options.filter(item => {
        return props.optionLabel
          ? item[props.optionLabel]
              .toLowerCase()
              .indexOf(search.value.toLowerCase()) > -1
          : item.toLowerCase().indexOf(search.value.toLowerCase()) > -1
      })
    }

    const onChange = () => {
      arrowCounter.value = -1
      context.emit('onSearch', search.value)
      if (props.isAsync) {
        isLoading.value = true
      } else {
        filterResults()
        isOpen.value = true
      }
    }
    const handleClickOutside = event => {
      if (!root.value.contains(event.target)) {
        isOpen.value = false
        isLoading.value = false
        arrowCounter.value = -1
        containerRef.value.scrollTop = 0
      }
    }
    const onArrowDown = () => {
      if (arrowCounter.value < results.value.length - 1) {
        arrowCounter.value = arrowCounter.value + 1
        setFocus()
      }
    }
    const onArrowUp = () => {
      if (arrowCounter.value > 0) {
        arrowCounter.value = arrowCounter.value - 1
        setFocus()
      }
    }
    const onEnter = () => {
      let selectedValue = results.value[arrowCounter.value]
      if (selectedValue) {
        search.value = props.optionLabel
          ? selectedValue[props.optionLabel]
          : selectedValue
      }
      context.emit(
        'onSelect',
        selectedValue ? JSON.stringify(selectedValue) : search.value
      )
      isOpen.value = false
      arrowCounter.value = -1
    }
    const onMouseHover = index => {
      arrowCounter.value = index
    }
    const onMouseLeave = () => {
      arrowCounter.value = -1
    }

    const setFocus = () => {
      const listHeight = listRef.value[arrowCounter.value].clientHeight
      containerRef.value.scrollTop = listHeight * arrowCounter.value
    }

    const searchAll = () => {
      context.emit('searchAll')
    }

    return {
      isOpen,
      results,
      search,
      isLoading,
      arrowCounter,
      root,
      onMouseHover,
      listRef,
      containerRef,
      isVisible,
      inputRef,
      searchAll,

      handleClickOutside,
      onSearchSelect,
      filterResults,
      onChange,
      onArrowDown,
      onArrowUp,
      onEnter,
      onClickIcon,
      onMouseLeave,
      getDateFormat,
    }
  },
}
</script>

<style scoped>
.published-date {
  font-size: 0.8rem;
}
.search-all {
  font-size: 0.89rem;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  margin-top: 1.5rem;
  color: var(--teal-900);
  opacity: 1;
  transition: 0.2s all;
}

.search-all:hover {
  text-decoration: underline;
  opacity: 0.8;
}

.title {
  padding: 0.3rem 0.5rem;
  border-bottom: 1px solid var(--surface-300);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.03rem;
  color: var(--surface-900);
}

.p-button {
  box-shadow: none !important;
  padding: 0;
}
.search-field {
  font-size: 1rem;
  color: var(--text-color);
  background: transparent;
  border: none;
  appearance: none;
  width: 100%;
  height: 100%;
  outline: none;
  padding-right: 0;
}
.input-container {
  width: 100%;
  border: none;
  box-shadow: none !important;
  height: 100%;
}
.active-input {
  padding-right: 2rem;
}

.input-container {
  padding: 0.1rem 0 0;
}

.active-search {
  padding-left: 0.4rem !important;
  width: 300px !important;
}
.search-container {
  display: flex;
  align-items: center;
}
.pi-search {
  cursor: pointer;
}

.search-select {
  position: relative;
  display: inline-block;
  width: 1px;
  height: 37px;
  border: none;
  -webkit-transition: width 0.2s, padding 0.2s;
  transition: width 0.2s, padding 0.2s;
  padding-left: 1px;
  padding-right: 0;
}

.search-select-results {
  list-style: none;
  text-align: left;
  padding: 0.4rem 0;
  margin: 1px 0 0;
  max-height: 17rem;
  min-height: 0rem;
  overflow-y: auto;
  position: absolute;
  left: -23px;
  width: 103%;
  z-index: 10;
  background: var(--surface-0);
  scroll-behavior: smooth;
  box-shadow: 2px 3px 10px var(--surface-300);
}

.search-select-result {
  text-align: left;
  padding: 0.4rem 0.5rem;
  font-size: 0.86rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  line-height: 1.2rem;
  color: var(--surface-600);
}

.blog-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 95%;
}

.search-select-result.is-active,
.search-select-result:focus {
  background-color: var(--bluegray-600);
  color: var(--surface-0);
}
</style>
