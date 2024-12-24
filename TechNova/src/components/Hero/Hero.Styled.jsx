import styled from 'styled-components';

const StyledHero = styled.section`
  height: 50vh;
  background: url(${(props) => props.$HeroImage}) no-repeat center center/cover;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  .hero-content {
    width: 80%;
    margin: 0 auto;
    color: #F5EFFF;
  }
  .hero-text {
    text-align: left;
  }
  .hero-text-title {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 900;
  }
  .hero-text-description {
    font-size: 1rem;
    margin: 1rem 0 2rem 0;
  }
  @media (min-width: 768px) {
    .hero-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 50vh;
    }
    .hero-text {
      width: 60%;
    }
    .hero-text-title {
      font-size: 2.2rem;
    }
  }
  @media (min-width: 1024px) {
    .hero-content {
      height: 65vh;
    }
    .hero-text-title {
      font-size: 3rem;
    }
  }
`;

export default StyledHero;