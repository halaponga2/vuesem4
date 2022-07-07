<template>
  <header><HeaderContent/></header>
  <main><router-view/></main>
</template>

<script>
import HeaderContent from './components/HeaderContent.vue';

export default {
  name: 'App',
  components: {
    HeaderContent
}
}
</script>

<style>
main {
  margin-left: 10px;
  margin-right: 10px;
  
}
body {
  background: linear-gradient(90deg, #ffefdb 0%, #ffecd5 100%);
  
}
h1, h2, h3, h4, h5 {
  font-weight: 700;
}

</style>
