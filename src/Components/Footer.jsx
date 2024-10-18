function Footer() {
  return (
    <>
      <footer className="bg-primary text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5>Car loan</h5>
              <p></p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Tentang Kami
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                cursus, augue mollis elementum pretium
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Follow Kami Di
              </h5>
              <p>
                <i className="bi bi-facebook"></i>Facebook
              </p>
              <p>
                <i className="bi bi-instagram"></i>Instagram
              </p>
              <p>
                <i className="bi bi-tiktok"></i>TikTok
              </p>
            </div>
            <hr className="mb-4" />
            <div className="row align-items-center">
              <div> &copy; Copyright car loan</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
