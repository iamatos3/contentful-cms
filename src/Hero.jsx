import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos nostrum recusandae eum, consequuntur veniam quasi nulla, quisquam, veritatis dolorem est molestiae hic praesentium cumque. Suscipit at natus ea doloremque.</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt='woman holding browser tablet' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
