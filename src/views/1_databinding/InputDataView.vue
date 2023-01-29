<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <!-- v-model을 통해 value값 지정 -->
    <!-- textarea나 select등 input에 사용되며 -->
    <!-- input text 유형 및 textarea 요소는 value 속성 및 input 이벤트를 사용 -->
    <!-- input checkbox 및 radio는 checked 및 change 이벤트를 사용 -->
    <!-- select 는 change 이벤트 -->
    <!-- text 한글의 경우 v-model의 한게점이 있음. -->
    <!-- 따라서 bind:value와 v-on:innput을 직접 연결해서 사용하는 것을 권고하고있음. -->;
    <!-- 매번 bind와 on input 이벤트를 연결시키기 번거롭기때문에 인풋컴포넌트를 별도로 분리하는 것도 방법 -->
    <!-- InputComp 참고 -->
    <input
      type="text"
      v-model="user"
      style="border: 1px solid green"
      @change="changeFunc"
    />
    <br />
    <div>
      <h2>textarea</h2>
      <textarea v-model="texts" style="border: 1px solid black"></textarea
      ><br />
      {{ texts }}
    </div>
    <input type="text" v-model="num1" style="border: 1px solid gray" /> +
    <input type="text" v-model="num2" style="border: 1px solid gray" /> =
    <span>{{ num1 + num2 }}</span>
    <br />
    <input type="text" v-model.number="num3" style="border: 1px solid gray" /> +
    <input type="text" v-model.number="num4" style="border: 1px solid gray" /> =
    <span>{{ num3 + num4 }}</span>
    <br />
    <input type="number" v-model="num5" style="border: 1px solid gray" /> +
    <input type="number" v-model="num6" style="border: 1px solid gray" /> =
    <span>{{ num5 + num6 }}</span>
    <span>{{ textValue }}</span>
    <InputComp :value="textValue" @input="consFunc"></InputComp>
  </div>
</template>
<script>
import InputComp from '@/components/InputComp.vue'
export default {
  components: {
    InputComp
  },
  data() {
    // state 저장하는 곳
    return {
      title: 'InpuData',
      textValue: 'Hello',
      user: 'USER',
      texts: '',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      num6: 0
    }
  },
  methods: {
    // 함수 정의하는 곳
    changeFunc() {
      console.log(this.user)
    },
    consFunc(val) {
      this.textValue = val
    }
  }
}
</script>
<style>
.text-red {
  color: red;
}
</style>
