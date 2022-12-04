<template>
  <div>
    <h1>Databinding {{ title }}</h1>
    <select
      class="border"
      name="si"
      @change="changeCity"
      v-model="selectedCity"
    >
      <option value="">도시선택</option>
      <option :value="city.code" :key="city.code" v-for="city in cityList">
        {{ city.title }}
      </option>
    </select>
    <!-- <select class="border" name="dong">
      <option value="">동선택</option>
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in dongList.filter((dong) => dong.code === selectedCity)"
      >
        {{ dong.title }}
      </option>
    </select> -->
    <select class="border" name="dong">
      <option value="">동선택</option>
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in selectedDongList"
      >
        {{ dong.title }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    // state 저장하는 곳
    return {
      title: 'ChangeEvent',
      selectedCity: '',
      selectedDongList: [],
      cityList: [
        { code: '02', title: '서울' },
        { code: '031', title: '경기' },
        { code: '064', title: '제주' }
      ],
      dongList: [
        { code: '02', dongCode: '021', title: '서울1동' },
        { code: '02', dongCode: '022', title: '서울2동' },
        { code: '02', dongCode: '023', title: '서울3동' },
        { code: '02', dongCode: '024', title: '서울4동' },
        { code: '031', dongCode: '0311', title: '경기1동' },
        { code: '031', dongCode: '0312', title: '경기2동' },
        { code: '031', dongCode: '0313', title: '경기3동' },
        { code: '031', dongCode: '0314', title: '경기4동' },
        { code: '064', dongCode: '0641', title: '제주1동' },
        { code: '064', dongCode: '0642', title: '제주2동' }
      ]
    }
  },
  methods: {
    changeCity() {
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.code === this.selectedCity
      )
    }
  }
}
</script>
<style>
.border {
  border: 1px solid gray;
}
</style>
