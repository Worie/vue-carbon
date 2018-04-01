<template>
  <nav class="bx--breadcrumb bx--breadcrumb--no-trailing-slash" aria-label="breadcrumb">
    <!-- this should be a list -->
    <div 
      class="bx--breadcrumb-item"
      v-for="breadcrumb in data">
        <a 
          :href="breadcrumb.url" 
          class="bx--link">
          {{ breadcrumb.content}}  
        </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'c-breadcrumb',
  props: ['data'],
  data () {
    return {
    }
  }
}
</script>
<style scoped></style>