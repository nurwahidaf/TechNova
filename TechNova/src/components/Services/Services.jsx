import StyledServices from './Services.Styled';
import GraphicImage from '../../assets/img/grafik.webp';

// komponen untuk menampilkan data layanan
const Services = () => {
  return (
    <StyledServices>
      <div className='services'>
        <h2 className='title-page-services'>Our Services</h2>
        <div className='services-container'>
          <div className='service-card'>
            <h3>Web Development</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, cum fuga? Eos nostrum pariatur ratione dolore numquam nulla? Perspiciatis ratione architecto reiciendis veniam beatae exercitationem, cum vitae eos quia aut!</p>
          </div>
          <div className='service-card'>
            <h3>Mobile Development</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, cum fuga? Eos nostrum pariatur ratione dolore numquam nulla? Perspiciatis ratione architecto reiciendis veniam beatae exercitationem, cum vitae eos quia aut!</p>
          </div>
          <div className='service-card'>
            <h3>SEO Specialist</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, cum fuga? Eos nostrum pariatur ratione dolore numquam nulla? Perspiciatis ratione architecto reiciendis veniam beatae exercitationem, cum vitae eos quia aut!</p>
          </div>
          <div className='service-card'>
            <h3>Digital Marketing</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, cum fuga? Eos nostrum pariatur ratione dolore numquam nulla? Perspiciatis ratione architecto reiciendis veniam beatae exercitationem, cum vitae eos quia aut!</p>
          </div>
        </div>
      </div>
      {/* untuk menampilkan grafik perusahaan */}
      <div className='graphic-tech'>
        <h2>Company Graphic</h2>
        <img src={GraphicImage} alt='company graphic' className='company-graphic' />
      </div>
    </StyledServices>
  )
}

export default Services;