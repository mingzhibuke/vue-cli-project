<template>
  <div class="box">
    <!-- <input type="text" v-model="myName"> -->
    <span class="title">{{myName}}</span>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <el-slider v-model="value2"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <el-slider v-model="value5" disabled></el-slider>
    </div>
  </div>
</template>

<script>
// import api from '@/api/api';  //引入api 使用接口时 api.post or api.get 
import * as types from '../vuex/mie-types'
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
    }
  },
  // },
  // created() {
  //   // alert(this.myName);
  // },
  computed: {
    ...mapGetters({ myName: 'myName' })
  },
  methods: {
    ...mapMutations({
      revampMyName: types.MY_NAME
    }),
    formatTooltip(val) {
      return val / 100;
    }
  },
  // watch: {
  //   myName: function (newVal, oldVal) {
  //     if (newVal != oldVal) {
  //       this.revampMyName(newVal);
  //     }
  //   }
  // }
}
</script>
<style lang="scss">
.box {
  .title {
    font-size: 16px;
    color: red;
  }
}



/* // @import '../assets/css/style.scss'; */
</style>
