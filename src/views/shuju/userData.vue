<template>
    <div>用户数据
      <el-button type="warning" @click="aaa">警告按钮</el-button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'userData',
  methods: {
    aaa () {
      axios.post('/api/v1/cloudinfos/')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
