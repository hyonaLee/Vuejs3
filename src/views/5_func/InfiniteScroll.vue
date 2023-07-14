<template>
  <div id="scroll" class="flex_col scroll" @scroll="scrollHandler()">
    <template v-if="getData.length !== 0">
      <!-- 결과 있는 경우 -->
      <div
        v-for="data in getData"
        :key="data.id"
        style="width: 100%; height: 100%"
      >
        <div class="flex_col">
          <div class="flex_row">
            <div class="fontStyle1">{{ data.title }}</div>
          </div>
          <div class="fontStyle2">
            {{ data.updateAt.slice(0, 16) }}{{ data.updateAt.slice(19) }}
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <!-- 결과 없는 경우 -->
      <div class="flex_col" style="margin-top: 143px; align-items: center">
        <div class="errorInfoFont1">데이터가 없습니다.</div>
      </div>
    </template>
    <div
      v-if="isScrollRoading"
      style="
        display: flex;
        height: 100px;
        justify-content: center;
        align-items: center;
        font-size: 10px;
      "
    >
      로딩중...
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curPage: 1,
      lastPage: 2,
      getData: [],
      isScrollRoading: true
    }
  },
  methods: {
    scrollHandler() {
      const scroller = document.getElementById('scroll')
      const isTotallyScrolled =
        Math.abs(
          scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop
        ) < 1
      if (
        isTotallyScrolled &&
        !this.isScrollRoading &&
        this.curPage < this.lastPage
      ) {
        this.curPage = this.curPage + 1
        this.isScrollRoading = true
      }
    },
    getDocNewList() {
      // 이 곳에서 처음 데이터를 불러옵니다.
      setTimeout(() => {
        const pushData = [
          { id: 1, title: 'title1', updateAt: '2023-07-01' },
          { id: 2, title: 'title2', updateAt: '2023-07-02' },
          { id: 3, title: 'title3', updateAt: '2023-07-03' },
          { id: 4, title: 'title4', updateAt: '2023-07-04' },
          { id: 5, title: 'title5', updateAt: '2023-07-05' },
          { id: 6, title: 'title6', updateAt: '2023-07-06' },
          { id: 7, title: 'title7', updateAt: '2023-07-07' },
          { id: 8, title: 'title8', updateAt: '2023-07-08' },
          { id: 9, title: 'title9', updateAt: '2023-07-09' },
          { id: 10, title: 'title10', updateAt: '2023-07-10' }
        ]
        this.getData = pushData
        this.isScrollRoading = false
      }, 500)
    },
    getDocListScroll() {
      // 이 곳에서 추가 데이터를 불러옵니다.
      setTimeout(() => {
        const pushData = [
          { id: 11, title: 'title11', updateAt: '2023-07-11' },
          { id: 12, title: 'title12', updateAt: '2023-07-12' },
          { id: 13, title: 'title13', updateAt: '2023-07-13' },
          { id: 14, title: 'title14', updateAt: '2023-07-14' },
          { id: 15, title: 'title15', updateAt: '2023-07-15' },
          { id: 16, title: 'title16', updateAt: '2023-07-16' },
          { id: 17, title: 'title17', updateAt: '2023-07-17' },
          { id: 18, title: 'title18', updateAt: '2023-07-18' },
          { id: 19, title: 'title19', updateAt: '2023-07-19' },
          { id: 20, title: 'title20', updateAt: '2023-07-20' }
        ]
        this.getData.push(...pushData)
        this.isScrollRoading = false
      }, 500)
    }
  },
  watch: {
    curPage: {
      handler: function () {
        console.log(
          'curPage 변경을 감지하여 새로운 데이터를 불러옵니다.',
          this.curPage
        )
        this.getDocListScroll()
      }
    }
  },
  created() {
    this.getDocNewList()
  }
}
</script>

<style scoped>
.scroll {
  box-sizing: border-box;
  display: flex;
  height: 300px;
  overflow-y: scroll;
}
.flex_col {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.fontStyle1 {
  color: black;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  letter-spacing: -1.3%;
  margin-bottom: 4px;
}
.fontStyle2 {
  color: gray;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -2%;
}
.errorInfoFont1 {
  color: gray;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  letter-spacing: -1.3%;
  margin-top: 16px;
}
</style>
