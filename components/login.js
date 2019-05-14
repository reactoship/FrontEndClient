import GoogleLogin from 'react-google-login'
import { StateConsumer, } from '../context'

const styles = {

}

const Login = () => {

  const responseGoogle = (response) => {
    console.log('success')
    console.log(response)
  }

  const failGoogle = (response) => {
    console.log('response:', response)
  }

  return (
    <div>
      <StateConsumer>
        {({ User, setUser, })=>{
          console.log('setUser:', setUser)
          console.log('User:', User)
          return (
            <GoogleLogin
              clientId='1097203064178-mjbbdj93juoaet3eqfdjn968iktm4ks2.apps.googleusercontent.com'
              buttonText='Login'
              onSuccess={(response => setUser(response))}
              onFailure={failGoogle}
              cookiePolicy={'single_host_origin'}
            />
          )
        }

        }
      </StateConsumer>
    </div>
  )
}

export default Login
