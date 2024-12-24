import styled from 'styled-components';

const StyledNavbar = styled.header`
  position: relative;
  background-color: #4C3BCF;
  color: #F5EFFF;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .navbar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand-name {
    font-size: 2rem;
  }
  .toggle-menu {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
  nav {
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      transition: max-height 0.3s ease;
      max-height: ${(props) =>(props.isMenuOpen ? '500px' : '0')};
      overflow: hidden;
      &.open {
        max-height: 500px;
      }
    }
    li a:hover {
      font-weight: bold;
    }
  }
  .icons {
    font-size: 2rem;
    color: #F5EFFF;
  }
  @media (min-width: 768px) {
    .toggle-menu {
      display: none;
    }
    nav ul {
      flex-direction: row;
      gap: 2rem;
      max-height: none;
      margin: 0.5rem 0;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`;

export default StyledNavbar;