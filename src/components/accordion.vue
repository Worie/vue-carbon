<template>
  <ul data-accordion class="bx--accordion">
    <li 
      data-accordion-item
      v-for="(item, index) in data"
      class="bx--accordion__item"
      :class="item.class">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane1">
        <svg class="bx--accordion__arrow" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
          <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
        </svg>
        <p class="bx--accordion__title">
          {{ item.title }}
        </p>
      </button>
      <div :id="`${name}${index}`" class="bx--accordion__content">
        <p>
          {{ item.content}}
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import { Accordion } from 'carbon-components';

export default {
  name: 'c-accordion',
  props: ['data', 'name'],
  data () {
    return {
      modalInstance: {},
    }
  },
  mounted() {
    const carbonInstance = Accordion.create(this.$el);
  }
}
</script>
<style scoped></style>