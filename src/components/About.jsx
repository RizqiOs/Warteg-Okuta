import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      {/* Gambar yang ditambahkan di bawah H1 */}
      <img 
        className="about-image" 
        src="https://assets.promediateknologi.id/crop/171x234:2347x1866/750x500/webp/photo/2023/07/15/Warung-Tegal-2743158320.png" 
        alt="About Us"
      />

      <p className="about-description">
      Warteg (Warung Tegal) berasal dari Tegal, Jawa Tengah, pada tahun 1970-an. Warteg pertama kali dibawa oleh perantau Tegal ke kota besar seperti Jakarta, membawa tradisi makan sederhana dengan harga terjangkau. Makanan yang disajikan berupa nasi dengan berbagai lauk, seperti tahu, tempe, ayam, ikan, dan sayuran. Keunikan warteg terletak pada konsep prasmanan yang memungkinkan pelanggan memilih lauk sesuai selera. Hingga kini, warteg tetap populer sebagai pilihan makan murah dan enak, serta mencerminkan budaya makan yang sederhana dan hangat di Indonesia.
      </p>
      
      <h2>Pengalaman Kami</h2>
      <ul className="values-list">
        <li>Hidangan Lengkap, Harga Murah</li>
        <li>Pelanggan</li>
        <li>Tim Support 24/7</li>
      </ul>

      <h2>Meet the Team</h2>
      <div className="team-section">
        <div className="team-member">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-black-and-white-anime-anime-man-with-brown-hair-image_2936948.jpg" alt="Team Member 1" />
          <p>John Doe - CEO</p>
        </div>
        <div className="team-member">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-black-and-white-anime-anime-man-with-brown-hair-image_2936948.jpg" alt="Team Member 2" />
          <p>Jane Smith - CTO</p>
        </div>
      </div>
    </div>
  );
};

export default About;
