import styled from 'styled-components';

// styling container
const StyledContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

// komponent container untuk menampilkan konten
// eslint-disable-next-line react/prop-types
const Container = ({children}) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container;