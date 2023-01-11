<template>
  <div>tabbar1</div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {

    }
  },
  onLoad() {
    this.test1()
  },
  methods: {
    test1() {
      _.times(5,function(a){
        console.log(a);
      });
      // console.log(0)
    }
  }
}
</script>

<style>

</style>