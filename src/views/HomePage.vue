<template>
  <div>
    <testing></testing>
  </div>
</template>

<script>


export default {
  name: 'HomePage',
  components: {
    // HelloWorld
    testing: () => import(/* webpackChunkName: "about" */ '../components/testing')
  }
}
</script>
