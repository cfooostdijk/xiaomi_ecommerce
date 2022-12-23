import './Banner.css'

const Banner = () => {
  return (
    <div className='home-banner'>
      <img className='banner-image' src={require("../../assets/Images/Banner.jpg")} alt="confrontation" />
    </div>
  )
}

export default Banner;