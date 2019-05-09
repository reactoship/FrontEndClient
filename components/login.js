import GoogleLogin from 'react-google-login'

const Login = () => {

  const responseGoogle = (response) => {
    console.log('success')
    console.log(response)
  }

  const failGoogle = (response) => {
    console.log('response:', response)
  }

  return (
    <GoogleLogin
      clientId='1097203064178-mjbbdj93juoaet3eqfdjn968iktm4ks2.apps.googleusercontent.com'
      buttonText='Login'
      onSuccess={responseGoogle}
      onFailure={failGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default Login
