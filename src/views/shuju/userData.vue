<template>
    <div>
      <el-button type="warning" @click="aaa">用户数据</el-button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'userData',
  methods: {
    aaa () {
      axios.get('/api/v1/cloudinfos/')
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped>

</style>
