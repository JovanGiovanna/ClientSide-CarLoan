import banner from "../assets/banner.png";

function MainHero() {
  return (
  <div>
    <div className="relative bg-cyan-400"> 
      <h1 className="absolute text-white font-bold text-[50px] ml-[80px] mt-[200px]">Car Loan</h1>
      <p className="absolute text-white font-bold text-[25px] ml-[80px] mt-[300px]"> Jasa penyedia jasa mobil di Depok <br></br> pelayanan profesional dengan driver<br></br>
          yang ahli dalam bidangnya
      </p>
      <img className="w-[100%] mix-blend-overlay bg-opacity-[40%]" src={banner} alt="" />
    </div>
  </div>
  );
}

export default MainHero;
