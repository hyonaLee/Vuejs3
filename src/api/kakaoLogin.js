import axios from 'axios'

const kakaoHeader = {
  // Admin 키
  Authorization: '93d1462517e1d2437bef0255a5a5aa44',
  'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
}

const getKakaoToken = async (code) => {
  try {
    const data = {
      // redirect_uri : REST API키
      // client_secret : 시크릿 코드
      // 시크릿 코드는 kakao developers 카카오 로그인 보안 탭에서 발급 받을 수 있습니다.
      grant_type: 'authorization_code',
      client_id: 'e92b8338e0922642784868bd5ee2d4be',
      redirect_uri: 'http://192.168.0.50:8080/kakao',
      code: code,
      client_secret: 'ciLlD18hYY4VpW8neXDxNNcyUrVtuX3V'
    }

    const queryString = Object.keys(data)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&')

    const result = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      queryString,
      { headers: kakaoHeader }
    )
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}

const getKakaoUserInfo = async () => {
  let data = ''
  await window.Kakao.API.request({
    url: '/v2/user/me'
  })
    .then(function (response) {
      data = response
    })
    .catch(function (error) {
      console.log(error)
    })
  return data
}

export { getKakaoToken, getKakaoUserInfo }
