// Write your code here
import './index.css'

const EventItem = props => {
  const {each, gettingparticularimage} = props
  const {imageUrl, name, location, registrationStatus} = each

  const gettingData = () => {
    gettingparticularimage(registrationStatus)
  }
  return (
    <li>
      <button type="button" className="but_hover" onClick={gettingData}>
        <img src={imageUrl} alt="event" className="image_sizing" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
