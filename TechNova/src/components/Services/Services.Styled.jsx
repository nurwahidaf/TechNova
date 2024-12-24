import styled from 'styled-components';

const StyledServices = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
  padding: 1rem;
  .title-page-services {
    margin-bottom: 1rem;
  }
  .services-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .service-card {
    padding: 1rem;
    width: 100%;
    box-shadow: #E5D9F2 2px 2px 15px;
    border-radius: 10px;
    h3 {
      color: #4C3BCF;
      margin-bottom: 0.5rem;
    }
  }
  .graphic-tech {
    margin: 2rem 0;
  }
  .company-graphic {
    margin-top: 1rem;
    width: 40%;
    border-radius: 10px;
  }
  @media (min-width: 768px) {
    width: 77%;
    margin: 1rem auto;
    h2 {
      font-size: 2.5rem;
    }
    .services-container{
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .service-card {
      width: calc(50% - 1rem);
    }
  }
`;

export default StyledServices;