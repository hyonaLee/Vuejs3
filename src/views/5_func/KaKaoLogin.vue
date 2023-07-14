<template>
  <div>
    <h2>KaKao Login 성공</h2>
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
      <img
        :src="user.kakao_account.profile.profile_image_url"
        width="50"
        alt="profile"
      />
      <span>{{ user.kakao_account.profile.nickname }}</span>
      <span>{{ user.kakao_account.email }}</span>
      <span>{{ user.kakao_account.gender }}</span>
    </div>
  </div>
</template>

<script>
import { getKakaoToken, getKakaoUserInfo } from '../../api/kakaoLogin'
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
      this.authorizationCode = this.$route.query.code
      this.setKakaoToken()
    },
    async setKakaoToken() {
      console.log('authorizationCode', this.authorizationCode)
      await getKakaoToken(this.authorizationCode)
        .then((res) => {
          console.log('res', res.data)
          this.data = res
          window.Kakao.Auth.setAccessToken(res.data.access_token)
          this.setUserInfo()
        })
        .catch((err) => {
          console.log('err', err)
          alert('카카오톡 로그인 오류입니다.')
          this.$router.go(-1)
        })
    },
    async setUserInfo() {
      await getKakaoUserInfo()
        .then((res) => {
          console.log('RES', res)
          this.user = res
        })
        .catch((err) => {
          console.log('err', err)
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
