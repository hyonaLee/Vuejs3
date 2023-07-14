<template>
  <div>
    <h2>네이버로그인성공</h2>
    <span class="token"> 카카오 계정으로 로그인되었습니다.</span>
    <div
      v-if="user"
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <!-- <img
        :src="user.kakao_account.profile.profile_image_url"
        width="50"
        alt="profile"
      />
      <span>{{ user.kakao_account.profile.nickname }}</span>
      <span>{{ user.kakao_account.email }}</span>
      <span>{{ user.kakao_account.gender }}</span> -->
    </div>
  </div>
</template>

<script>
import { getNaverToken } from '../../api/naverLogin'
export default {
  data() {
    return {
      authorizationCode: null,
      data: null,
      user: null
    }
  },
  methods: {
    getToken() {
      console.log(this.$route.query)
      this.authorizationCode = this.$route.query.code
      this.authorizationState = this.$route.query.state
      this.setNaverToken()
    },
    async setNaverToken() {
      getNaverToken(this.authorizationCode, this.authorizationState)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created() {
    this.getToken()
  }
}
</script>
<style scoped>
.token {
  font-size: 11px;
  color: gray;
}
</style>
