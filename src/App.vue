<template>
  <header><HeaderContent/></header>
  <main><router-view/></main>
  <footer><footer-content/></footer>
</template>

<script>
import HeaderContent from './components/HeaderContent.vue';
import FooterContent from './components/FooterContent.vue';

export default {
  name: 'App',
  components: {
    HeaderContent,
    FooterContent
}
}
</script>

<style>

html{
  height:100%;
}

#app{
  height:100%;
  display:flex;
  flex-direction: column;

}

main {
  margin-left: 10px;
  margin-right: 10px;
  flex: 1 0 auto;
  
}
body {
  background: linear-gradient(90deg, #ffefdb 0%, #ffecd5 100%);
  height:100%;
  
}
h1, h2, h3, h4, h5 {
  font-weight: 700;
}
footer {
  box-shadow: 4px 0px 15px rgba(0, 0, 0, 0.25);
  background: #ffcf97;
  margin-top: 20px;
  flex: 0 0 auto;
  padding-left: 10px;
  padding-right: 10px;

}



</style>
