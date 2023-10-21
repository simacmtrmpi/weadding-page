

const Banner = () => {
    return (
    <div className="hero min-h-screen mt-5" style={{backgroundImage: 'url("/public/images/banner.jpg")'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md mb-96">
      <h1 className="mb-5 text-5xl font-bold">WEEDING <span className="text-red-600">SECSON</span></h1>
      <p className="mb-5 text-2xl font-semibold"><span className="text-red-600">"</span> Welcome Our Page <span className="text-red-600">"</span>
      </p>
      <p className="mb-5">“A successful marriage requires falling in love many times, always with the same person.” </p>
    </div>
  </div>
</div>
    );
};

export default Banner;