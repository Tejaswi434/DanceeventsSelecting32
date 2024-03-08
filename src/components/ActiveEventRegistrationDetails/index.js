const data = {
  initial: 'INITIAL',
  first: 'YET_TO_REGISTER',
  second: 'REGISTERED',
  third: 'REGISTRATIONS_CLOSED',
}

const images = {
  firstImage:
    'https://assets.ccbp.in/frontend/react-js/events-register-img.png ',
  secondImage:
    'https://assets.ccbp.in/frontend/react-js/events-regestered-img.png ',
  thirdImage:
    'https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png ',
}

const ActiveEventRegistrationDetails = props => {
  const {gettingEventRegistartion} = props

  const values = gettingEventRegistartion.value

  console.log(values)

  const first = () => (
    <div>
      <img src={images.firstImage} alt="yet to register"  />

      <p>
        {' '}
        "A live performance brings so much to your relationship with dance"
      </p>
      <button>"Register Here"</button>
    </div>
  )

  const second = () => (
    <div>
      <img src={images.secondImage} alt="registered" />

      <h1>"You have already registered for the event"</h1>
    </div>
  )

  const third = () => (
    <div>
      {' '}
      <img src={images.thirdImage} alt="registrations closed" />
      <h1>"Registrations Are Closed Now!"</h1>
      <p>"Stay tuned. We will reopen the registration soon!"</p>
    </div>
  )

  const fourth = () => (
    <p> click on an event, to view its registration details"</p>
  )

  const gettingImage = () => {
    switch (values) {
      case data.first:
        return first()
      case data.second:
        return second()
      case data.third:
        return third()
      default:
        return fourth()
    }
  }

  return <div>{gettingImage()}</div>
}

export default ActiveEventRegistrationDetails
