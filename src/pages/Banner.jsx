const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1661775317533-2163ba4dbc93?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome Micro Donation</h1>
            <p className="mb-5">
              We are not getting younger. Today lets fight hunger!
            </p>
            <button className="btn btn-success text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
