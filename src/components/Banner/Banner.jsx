import './Banner.css'

const Banner = () => {
  return (
    <div className='home-banner'>
      <img className='banner-image' src={require("../../assets/Images/Hero.webp")} alt="confrontation" />
    </div>
  )
}

export default Banner;