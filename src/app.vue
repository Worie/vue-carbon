<template>
  <div id="app">
    <img src="./assets/logo.png">
    <c-button class="bx--btn--secondary">
      Test
    </c-button>
    <c-accordion name="test" :data="[{
      title: 'test',
      content: 'super sprawa',
    },
    {
      title: 'no i git',
      content: 'działa',
    },
    {
      title: 'spook',
      content: 'jak natura chciała',
    },
    {
      title: 'ddsf',
      content: 'hehesuper sprawa',
    }]">
    </c-accordion>
    <c-breadcrumb :data="[{
      url: '#foo',
      content: 'foo',
    },
    {
      url: '#bar',
      content: 'bar',
    },
    {
      url: '#baz',
      content: 'baz',
    }]">
    </c-breadcrumb>
  </div>
</template>

<script>
import Button from './components/button'
import Accordion from './components/accordion'
import Breadcrumb from './components/breadcrumb'

export default {
  name: 'app',
  components: {
    'c-button': Button,
    'c-accordion': Accordion,
    'c-breadcrumb': Breadcrumb,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
