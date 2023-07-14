import axios from 'axios'

const naverHeader = {
  // Admin 키
  'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
}
const getNaverToken = async (code, state) => {
  try {
    const params = {
      grant_type: 'authorization_code',
      client_id: '1oQv8RJrSjPoEpSQGdTC',
      client_secret: 'fDwEOnYGEB',
      code: code,
      state: state
    }
    axios
      .post('https://nid.naver.com/oauth2.0/token', params, {
        headers: naverHeader
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  } catch (err) {
    console.log(err)
    return err
  }
}

const getNaverUserInfo = async () => {
  await axios
    .post('https://openapi.naver.com/v1/nid/me', {
      headers: naverHeader
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export { getNaverToken, getNaverUserInfo }
