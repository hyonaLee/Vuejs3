<template>
  <div class="flex_col">
    <div class="flex_col" style="padding: 16px">
      <div class="flex_row flex_between" style="margin-bottom: 13px">
        <div class="flex_col">
          <input
            type="file"
            id="dueComLoad"
            multiple
            @change="onFileEvent($event)"
          />
          <div class="titleFont">
            파일 업로드 <span style="color: red">{{ fileList.length }}/5</span>
          </div>
        </div>
        <label class="loadBtn" for="dueComLoad"> 파일찾기 </label>
      </div>
      <template v-if="fileList.length > 0">
        <div
          v-for="(file, index) in fileList"
          :key="file.name"
          class="basicInputStyle"
          style="
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
          "
        >
          <div class="ellipsis">{{ file.name }}</div>
          <div class="delBtn" @click="delFile(index)">삭제</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      newFileList: [],
      deleteFile: []
    }
  },
  methods: {
    onFileEvent(e) {
      const arr = [...this.fileList]
      const newfile = [...this.newFileList]
      const fileData = e.target.files
      for (var i = 0; i < fileData.length; i++) {
        arr.push(fileData[i])
        newfile.push(fileData[i])
      }
      this.fileList = arr
      this.newFileList = newfile
    },
    delFile(index) {
      const prev = this.fileList
      prev.splice(index, 1)
      this.fileList = prev
    }
  }
}
</script>

<style scoped>
input[type='file'] {
  display: none;
}
.flex_col {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.flex_row {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
}
.flex_between {
  justify-content: space-between;
  align-items: center;
}
.titleFont {
  font-size: 12px;
  font-weight: 500;
  line-height: 14.4px;
  color: black;
  letter-spacing: -1.3%;
}
.loadBtn {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  line-height: 15.6px;
  color: black;
  letter-spacing: -2%;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
}
.delBtn {
  cursor: pointer;
  color: red;
  min-width: 30px;
  margin-left: 15px;
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임 적용 */
}

.basicInputStyle {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0 16px;
  height: 42px;
  justify-content: center;
  color: black;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.8px;
  letter-spacing: -1.3%;
  margin-bottom: 24px;
  background-color: white;
}
</style>
