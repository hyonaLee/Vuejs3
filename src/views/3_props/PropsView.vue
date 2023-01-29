<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <h2>{{ who }}</h2>
    <button class="btn" @click="title = '바뀐데이터'">props data change</button>
    <p>자식에게 받은 데이터 : {{ newData }}</p>
    <!-- <PropsCildView v-bind:whoareyou="whoami"></PropsCildView> -->
    <!-- 약어 사용 -->
    <PropsChildView :title="title" @child="getPropsData"> </PropsChildView>
    <PropsChildView @child="getPropsData"></PropsChildView>

    <br />
    <br />
    <br />
    <h1>아래부터는 Slot 연습</h1>
    <!-- 컴포넌트에도 class 상속 됨!! -->
    <SlotTest class="fontColorRed"></SlotTest>
    <SlotTest class="fontColorRed">클릭하기</SlotTest>
    <BaseLayout>
      <template #header>
        <h1>다음은 페이지 제목일 수 있습니다.</h1>
      </template>

      <template #default>
        <p>주요 내용에 대한 단락입니다.</p>
        <p>그리고 또 하나.</p>
        <p>추가하면 추가하는대로 들어가네요</p>
      </template>

      <template #footer>
        <p>다음은 연락처 정보입니다.</p>
      </template>
    </BaseLayout>
    <SlotEx>
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p class="meta">by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </SlotEx>
  </div>
</template>
<script>
import PropsChildView from './PropsChildView'
import SlotTest from '@/views/3_props/SlotTest.vue'
import BaseLayout from '@/views/3_props/BaseLayout.vue'
import SlotEx from '@/views/3_props/SlotEx.vue'
export default {
  components: {
    PropsChildView,
    SlotTest,
    BaseLayout,
    SlotEx
  },
  data() {
    // state 저장하는 곳
    return {
      title: 'Props배우기',
      who: 'Parents',
      newData: ''
    }
  },
  methods: {
    // methods에서 data에 접근하기 위해서는 this 필요.
    getPropsData(name) {
      console.log('부모가 받은 데이터 :', name)
      this.newData = name
    }
  }
}
</script>
<style>
.btn {
  border: 1px solid gray;
  padding: 10px;
}
.fontColorRed {
  color: red;
}
</style>
