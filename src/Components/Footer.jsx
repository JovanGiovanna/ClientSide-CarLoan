function Footer() {
  return (
    <>
      <footer className="bg-sky-500 text-white pt-5 pb-4">
        <div className="text-center flex justify-evenly">
          <div className="">
            <h5>Logo</h5>
          </div>

          <div className="">
            <h5 className="font-bold">Tentang Kami</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              cursus, augue mollis elementum pretium
            </p>
          </div>

          <div className="">
            <h5 className="font-bold">Follow Kami Di</h5>
            <p>
              <i className="bi bi-facebook"></i>Facebook
            </p>
            <p>
              <i className="bi bi-instagram"></i>Instagram
            </p>
            <p>
              <span class="icon-[ic--round-tiktok]">Tiktok</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="text-center align-items-center">
          <div> &copy; Copyright car loan</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
