import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Gaya utama
  const styles = {
    container: {
      textAlign: "center",
      padding: "20px", // Padding default
      position: "relative",
    },
    imageContainer: {
      position: "relative",
      width: "100%",
      height: "50vh", // Tinggi gambar setengah dari tinggi layar
      overflow: "hidden", // Memastikan gambar tidak keluar dari batas
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // Gambar tetap proporsional
      borderRadius: "10px",
    },
    overlay: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      color: "white",
      backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay lebih gelap untuk kontras
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
    },
    title: {
      fontSize: "36px", // Ukuran font besar untuk laptop
      margin: "0 0 10px 0", // Margin bawah untuk jarak antara judul dan paragraf
    },
    paragraph: {
      fontSize: "18px", // Ukuran font sedang untuk laptop
      margin: "0 0 20px 0", // Margin bawah untuk jarak antara paragraf dan tombol
    },
    button: {
      padding: "10px 20px",
      fontSize: "20px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Tombol lebih terang
      color: "#333",
      cursor: "pointer",
      transition: "background-color 0.3s ease", // Efek hover
    },
    buttonHover: {
      backgroundColor: "#ff6347", // Warna merah saat hover
      color: "white",
    },
  };

  // Media query untuk smartphone
  const mobileStyles = `
    @media (max-width: 768px) {
      .home h2 {
        font-size: 24px;
      }
      .home p {
        font-size: 16px;
      }
      .home button {
        font-size: 16px;
        padding: 8px 16px;
      }
    }
  `;

  return (
    <div className="page home" style={styles.container}>
      {/* Menambahkan media query */}
      <style>{mobileStyles}</style>

      {/* Container gambar */}
      <div style={styles.imageContainer}>
        <img
          src="https://assets-pergikuliner.com/Oicc40epc1L4cR-ChZhawUUdE3s=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/25260/Warung_Tegal__lifepal.co.id_.jpg"
          alt="Food Banner"
          style={styles.image}
        />

        {/* Overlay teks */}
        <div style={styles.overlay}>
          <h2 style={styles.title}>Selamat Datang di Warteg Okuta</h2>
          <p style={styles.paragraph}>
            Temukan resep lezat dan hidangan yang menggugah selera.
          </p>
          <button
            onClick={() => navigate("/about")}
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ff6347")}
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)")
            }
          >
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
