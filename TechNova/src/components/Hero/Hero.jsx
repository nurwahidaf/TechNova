import StyledHero from './Hero.Styled';
import HeroImage from '../../assets/img/hero.jpg';

// komponen hero
const Hero = () => {
  return (
    // mengambil gambar hero dari HeroImage
    <StyledHero $HeroImage={HeroImage}>
      <div className='hero-content'>
        <div className='hero-text'>
          <h2 className='hero-text-title'>Your Dream Tech House</h2>
          <p className='hero-text-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sint iusto aspernatur.
          </p>
        </div>
      </div>
    </StyledHero>
  )
}

export default Hero;