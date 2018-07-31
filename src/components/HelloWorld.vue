<template>
  <div>
    <h1>My&nbsp;Vue</h1>
    <Test2></Test2>
    <h4>这里是第一个视图</h4>
    <el-button type="primary" @click="goToFirstChild">GoTo->FirstChild</el-button>
    <router-view />
  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    created() {
    },
    data() {
      return {
        which_to_show:'Test'
      }
    },
    methods: {
      goToFirstChild() {
        this.$router.push({path: 'sss', query: { info: 'dddd'}})
      }
    },
    watch: {
    },
    components: {
      'Test2': () => import('./testComponents/test')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
