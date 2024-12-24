import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Container from './Container';

// komponen layout untuk menampilkan layout default halaman (navbar dan footer) serta konten di dalamnya
// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Layout;