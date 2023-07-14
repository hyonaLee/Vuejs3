<template>
  <div class="loginBG">
    <div>
      <label class="relative">
        <input
          class="loginInputStyle"
          type="text"
          placeholder="아이디(사번)"
          :value="account"
          @input="inputHandler('account', $event.target.value)"
          style="border-radius: 8px 8px 0 0"
        />
        <img
          v-if="valiAccount === false"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuOTU0IDIxLjAzbC05LjE4NC05LjA5NSA5LjA5Mi05LjE3NC0yLjgzMi0yLjgwNy05LjA5IDkuMTc5LTkuMTc2LTkuMDg4LTIuODEgMi44MSA5LjE4NiA5LjEwNS05LjA5NSA5LjE4NCAyLjgxIDIuODEgOS4xMTItOS4xOTIgOS4xOCA5LjF6Ii8+PC9zdmc+"
          width="20"
          alt="Not Valid Icon"
          style="position: absolute; top: 18px; right: 18px"
        />
      </label>
      <label class="relative">
        <input
          class="loginInputStyle"
          :type="isShowPwd ? 'text' : 'password'"
          placeholder="비밀번호"
          :value="pwd"
          ref="pwdRef"
          @input="inputHandler('pwd', $event.target.value)"
          style="
            border-radius: 0 0 8px 8px;
            border-top: 1px solid rgba(0, 0, 0, 0.16);
          "
        />
        <div
          style="
            display: flex;
            position: absolute;
            top: 18px;
            right: 18px;
            gap: 10px;
          "
        >
          <img
            v-if="pwd.length > 0"
            src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIuMDAyIDIuMDA1YzUuNTE4IDAgOS45OTggNC40OCA5Ljk5OCA5Ljk5NyAwIDUuNTE4LTQuNDggOS45OTgtOS45OTggOS45OTgtNS41MTcgMC05Ljk5Ny00LjQ4LTkuOTk3LTkuOTk4IDAtNS41MTcgNC40OC05Ljk5NyA5Ljk5Ny05Ljk5N3ptMCA4LjkzMy0yLjcyMS0yLjcyMmMtLjE0Ni0uMTQ2LS4zMzktLjIxOS0uNTMxLS4yMTktLjQwNCAwLS43NS4zMjQtLjc1Ljc0OSAwIC4xOTMuMDczLjM4NC4yMTkuNTMxbDIuNzIyIDIuNzIyLTIuNzI4IDIuNzI4Yy0uMTQ3LjE0Ny0uMjIuMzQtLjIyLjUzMSAwIC40MjcuMzUuNzUuNzUxLjc1LjE5MiAwIC4zODQtLjA3My41My0uMjE5bDIuNzI4LTIuNzI4IDIuNzI5IDIuNzI4Yy4xNDYuMTQ2LjMzOC4yMTkuNTMuMjE5LjQwMSAwIC43NS0uMzIzLjc1LS43NSAwLS4xOTEtLjA3My0uMzg0LS4yMi0uNTMxbC0yLjcyNy0yLjcyOCAyLjcxNy0yLjcxN2MuMTQ2LS4xNDcuMjE5LS4zMzguMjE5LS41MzEgMC0uNDI1LS4zNDYtLjc1LS43NS0uNzUtLjE5MiAwLS4zODUuMDczLS41MzEuMjJ6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="
            alt="Delete Password Button"
            width="20"
            @click="pwd = ''"
          />
          <img
            v-if="pwd.length > 0 && isShowPwd"
            src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTcuMDY5IDYuNTQ2IDIuNjg0LTIuMzU5Yy4xNDMtLjEyNS4zMi0uMTg3LjQ5Ny0uMTg3LjQxOCAwIC43NS4zNC43NS43NSAwIC4yMDctLjA4Ni40MTQtLjI1NC41NjJsLTE2LjUgMTQuNTAxYy0uMTQyLjEyNi0uMzE5LjE4Ny0uNDk2LjE4Ny0uNDE1IDAtLjc1LS4zMzQtLjc1LS43NSAwLS4yMDcuMDg2LS40MTQuMjUzLS41NjJsMi40MzgtMi4xNDNjLTEuNDE0LTEuMTMyLTIuNjI3LTIuNTUyLTMuNTQ3LTQuMDI4LS4wOTYtLjE1OS0uMTQ0LS4zMzgtLjE0NC0uNTE3cy4wNDktLjM1OC4xNDUtLjUxN2MyLjExMS0zLjM5IDUuNzc1LTYuNDgzIDkuODUzLTYuNDgzIDEuODE1IDAgMy41MzYuNTkzIDUuMDcxIDEuNTQ2em0yLjMxOSAxLjgzYy45NjYuOTQzIDEuODAzIDIuMDE0IDIuNDc0IDMuMTE3LjA5Mi4xNTYuMTM4LjMzMi4xMzguNTA3cy0uMDQ2LjM1MS0uMTM4LjUwN2MtMi4wNjggMy40MDMtNS43MjEgNi40OTMtOS44NjQgNi40OTMtMS4yOTcgMC0yLjU1My0uMzEzLTMuNzI5LS44NDlsMS4yNDctMS4wOTZjLjc5NS4yODUgMS42MjYuNDQ1IDIuNDgyLjQ0NSAzLjUxNiAwIDYuNTc2LTIuNjIyIDguNDEzLTUuNS0uNTk1LS45MzItMS4zMTgtMS44MzgtMi4xNDUtMi42Mzd6bS0zLjQzNCAzLjAxOWMuMDMuMTk3LjA0Ni4zOTkuMDQ2LjYwNSAwIDIuMjA4LTEuNzkyIDQtNCA0LS4zODQgMC0uNzU2LS4wNTQtMS4xMDctLjE1NmwxLjU4LTEuMzg5Yy44OTUtLjE3MSAxLjYyMS0uODIxIDEuOTAxLTEuNjcxem0tLjA1OC0zLjgxOGMtMS4xOTctLjY3LTIuNTEyLTEuMDc3LTMuODk4LTEuMDc3LTMuNDY1IDAtNi41MzMgMi42MzItOC40MDQgNS41Ljg1MyAxLjMwOCAxLjk1NSAyLjU2NyAzLjIzMSAzLjU0OWwxLjcyOC0xLjUxOWMtLjM1MS0uNTk1LS41NTMtMS4yODktLjU1My0yLjAzIDAtMi4yMDggMS43OTItNCA0LTQgLjkyNSAwIDEuNzc3LjMxNSAyLjQ1NS44NDN6bS0yLjYgMi4yODVjLS4zNzgtLjIzLS44MjItLjM2Mi0xLjI5Ni0uMzYyLTEuMzggMC0yLjUgMS4xMi0yLjUgMi41IDAgLjM2LjA3Ni43MDEuMjEzIDEuMDExeiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+"
            alt="Show Password Button"
            width="20"
            @click="focusinControll"
          />
          <img
            v-else-if="pwd.length > 0 && isShowPwd === false"
            src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTEuOTk4IDVjLTQuMDc4IDAtNy43NDIgMy4wOTMtOS44NTMgNi40ODMtLjA5Ni4xNTktLjE0NS4zMzgtLjE0NS41MTdzLjA0OC4zNTguMTQ0LjUxN2MyLjExMiAzLjM5IDUuNzc2IDYuNDgzIDkuODU0IDYuNDgzIDQuMTQzIDAgNy43OTYtMy4wOSA5Ljg2NC02LjQ5My4wOTItLjE1Ni4xMzgtLjMzMi4xMzgtLjUwN3MtLjA0Ni0uMzUxLS4xMzgtLjUwN2MtMi4wNjgtMy40MDMtNS43MjEtNi40OTMtOS44NjQtNi40OTN6bTguNDEzIDdjLTEuODM3IDIuODc4LTQuODk3IDUuNS04LjQxMyA1LjUtMy40NjUgMC02LjUzMi0yLjYzMi04LjQwNC01LjUgMS44NzEtMi44NjggNC45MzktNS41IDguNDA0LTUuNSAzLjUxOCAwIDYuNTc5IDIuNjI0IDguNDEzIDUuNXptLTguNDExLTRjMi4yMDggMCA0IDEuNzkyIDQgNHMtMS43OTIgNC00IDQtNC0xLjc5Mi00LTQgMS43OTItNCA0LTR6bTAgMS41Yy0xLjM4IDAtMi41IDEuMTItMi41IDIuNXMxLjEyIDIuNSAyLjUgMi41IDIuNS0xLjEyIDIuNS0yLjUtMS4xMi0yLjUtMi41LTIuNXoiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg=="
            width="20"
            alt="Blind Password Button"
            @click="focusinControll"
          />
          <img
            v-if="valiPWD === false"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuOTU0IDIxLjAzbC05LjE4NC05LjA5NSA5LjA5Mi05LjE3NC0yLjgzMi0yLjgwNy05LjA5IDkuMTc5LTkuMTc2LTkuMDg4LTIuODEgMi44MSA5LjE4NiA5LjEwNS05LjA5NSA5LjE4NCAyLjgxIDIuODEgOS4xMTItOS4xOTIgOS4xOCA5LjF6Ii8+PC9zdmc+"
            width="20"
            alt="Not Valid Icon"
          />
        </div>
      </label>
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          width: 100%;
          border-radius: 8px;
          margin-top: 40px;
        "
      >
        <button class="baseBtn fill" :disabled="!isValid" @click="submitForm">
          로그인
        </button>
        <button class="baseBtn kakao" @click="loginForKakao">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkuNjE5IDIxLjY3MWMtNS4wMzggMS4yMjctOC43MTEtMS44NjEtOC43MTEtNS4xNjcgMC0zLjE3NSAzLjExLTUuNDY3IDYuNTQ2LTUuNDY3IDMuNDU3IDAgNi41NDYgMi4zMDkgNi41NDYgNS40NjcgMCAxLjEyLS40MDMgMi4yMi0xLjExNyAzLjA3My0uMDI5IDEgLjU1OCAyLjQzNSAxLjA4OCAzLjQ3OS0xLjQxOS0uMjU3LTMuNDM4LS44MjQtNC4zNTItMS4zODV6bS0xMC43MTEtNS4xNjdjMC00LjExNyAzLjgzNC03LjQ2NyA4LjU0Ni03LjQ2Ny44ODYgMCAxLjc0LjExOSAyLjU0NC4zMzgtLjAyMS00LjgzNC00Ljc2MS04LjMxOS05Ljk5OC04LjMxOS01LjI4MSAwLTEwIDMuNTI3LTEwIDguMzUyIDAgMS43MS42MTUgMy4zOTEgMS43MDUgNC42OTUuMDQ3IDEuNTI3LS44NTEgMy43MTgtMS42NjEgNS4zMTMgMi4xNjgtLjM5MSA1LjI1Mi0xLjI1OCA2LjY0OS0yLjExNS44MDMuMTk2IDEuNTc2LjMwNCAyLjMyOC4zNjMtLjA2Ny0uMzc5LS4xMTMtLjc2NS0uMTEzLTEuMTZ6Ii8+PC9zdmc+"
            width="20"
          />
          카톡으로 로그인
        </button>
        <button class="baseBtn naver" @click="loginForNaver">
          네이버로 로그인
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'login-page',
  data() {
    return {
      isShowPwd: false,
      account: '',
      pwd: '',
      pwdFocus: false,
      valiPWD: null,
      valiAccount: null
    }
  },
  methods: {
    focusinControll() {
      // 비밀번호 인풋에서 눈 아이콘 눌렀을 경우에도 포커스 유지 시키는 기능
      const data = this.pwd
      this.isShowPwd = !this.isShowPwd
      this.$refs.pwdRef.focus()
      this.pwd = data
    },
    inputHandler(type, data) {
      // 아이디, 비밀번호 인풋 이벤트
      // 데이터를 할당 해줍니다.
      // 아이디, 비밀번호 유효성 검사 로직 (현재 사용 안함)
      // 아이디 : 6자 이상 20자 이하 영문(소문자만) 또는 숫자 사용 가능
      const accountRegExp = /^([a-z*]|[0-9*]|[a-z0-9]){5,20}$/g
      // 비밀번호 : 특수문자+영문+숫자 조합 8자 이상
      const pwdRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
      if (type === 'account') {
        this.account = data
        if (accountRegExp.test(data)) {
          this.valiAccount = true
        } else {
          this.valiAccount = false
        }
      } else if (type === 'pwd') {
        this.pwd = data
        if (pwdRegExp.test(data)) {
          this.valiPWD = true
        } else {
          this.valiPWD = false
        }
      }
    },
    submitForm() {
      // 일반 로그인
      const formData = new FormData()
      formData.append('account', this.account)
      formData.append('pwd', this.pwd)
      const loginData = formData
      console.log(loginData)
      // API처리
    },
    loginForKakao() {
      // 카카오 계정 로그인
      const param = {
        redirectUri: 'http://192.168.0.50:8080/kakao',
        scope: 'account_email,gender'
      }
      window.Kakao.Auth.authorize(param)
    },
    loginForNaver() {
      // 네이버 계정 로그인
      console.log('네이버로그인')
      const param = {
        response_type: 'code',
        client_id: '1oQv8RJrSjPoEpSQGdTC',
        redirect_uri: 'http://192.168.0.50:8080/naver'
      }
      const queryString = Object.keys(param)
        .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(param[k]))
        .join('&')
      window.location.href = `https://nid.naver.com/oauth2.0/authorize?${queryString}`
    }
  },
  computed: {
    isValid() {
      // 아이디 비밀번호 모두 작성 되었을 때, 로그인 버튼 활성 화
      let value = null
      if (this.pwd && this.account) {
        value = true
      } else {
        value = false
      }
      return value
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
  width: 100%;
}
.loginBG {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: gray;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 80px 20px 32px 20px;
}
.fontStyle1 {
  display: flex;
  font-size: 22px;
  font-weight: 600;
  line-height: 30.03px;
  letter-spacing: -1.3%;
  color: white;
  margin: 0;
  margin-bottom: 20px;
}
.fontStyle2 {
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: -1.3%;
  color: white;
  text-decoration: underline;
  margin: 0;
  margin-bottom: 53px;
}
.loginInputStyle {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: black;
  margin: 0;
  padding: 18px 16px;
  border: none;
  outline: none;
  background: white;
}
.loginInputStyle::placeholder {
  color: gray;
}
.copy {
  display: flex;
  font-size: 12px;
  font-weight: 400;
  line-height: 17.52px;
  color: rgba(255, 255, 255, 0.5);
}
.baseBtn {
  font-family: 'Pretendard';
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -2%;
}
.fill {
  background-color: rgb(134, 39, 39);
  border: none;
  color: white;
}
.fill:disabled {
  background-color: rgb(194, 194, 194);
  border: none;
  color: white;
}
.kakao {
  background-color: yellow;
  border: none;
  color: black;
}
.naver {
  background-color: rgb(3, 199, 90);
  border: none;
  color: white;
}
</style>
