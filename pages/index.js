import Login from '../components/login'
import '../style.css'
import { StateConsumer, } from '../context'
import { useEffect, } from 'react'
import axios from 'axios'

const styles = {
  display: 'flex',
  background: '#b3fbff',
  flexDirection: 'column',
  alignItems: 'center',
  height: '98vh',
  justifyContent: 'center',

}

const fontStyle = {
  fontSize: '3.5em',
  fontWeight: 'bold',
  textShadow: '2px 2.5px 1px rgba(0,0,0,0.3)',
  color: '#00bdbd',
}

const Landing = (props) => {

  useEffect(()=> {
    axios.get('http://localhost:8080/api/appointments')
      .then((res)=>{
        console.log('res.data:', res.data)
      }

      )
  }, [])

  return (
    <div style={styles}>
      <StateConsumer>
        {({ state, setUser, }) => {
          if (state.User.w3) {
            return (
              <p>
              hi {state.User.w3.ofa}
              </p>)
          }
        }
        }
      </StateConsumer>
      <p style={fontStyle}>Welcome to ReactoShip</p>
      <Login />

    </div>
  )
}

export default Landing
