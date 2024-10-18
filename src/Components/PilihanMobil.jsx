import cardBG from "../assets/bg-of-card.png";

const BackgroundContainer = () => {
  const containerStyle = {
    backgroundImage: cardBG,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Adjust the height as needed
  };

  return (
    <>
      <h1>Pilihan Mobil</h1>
      <div className="container" style={containerStyle}>
        <div className="card">.card</div>
      </div>
    </>
  );
};

export default BackgroundContainer;
