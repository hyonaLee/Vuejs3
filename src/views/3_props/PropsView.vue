<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    여기는 부모 공간<br />
    {{ whoami }}, {{ family }}<br />
    아래는 자식 컴포넌트를 불러옵니다.
    <!-- <PropsCildView v-bind:whoareyou="whoami"></PropsCildView> -->
    <!-- 약어 사용 -->
    <PropsChildView :whoareyou="whoami" :age="age" @child="parents">
      <div>
        <button class="border">슬롯개쩐다</button><br />
        <button class="border">여기는부모버튼</button>
      </div>
    </PropsChildView>
  </div>
</template>
<script>
import PropsChildView from './PropsChildView'
export default {
  components: {
    PropsChildView
  },
  data() {
    // state 저장하는 곳
    return {
      title: 'Props배우기 :부모',
      whoami: '나는 엄마야',
      age: '40',
      family: '우리는 가족이야'
    }
  },
  methods: {
    parents(name) {
      console.log('부모가 받았어', name)
    }
  }
}
</script>
<style>
.border {
  border: 1px solid gray;
}
</style>
