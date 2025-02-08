import React from 'react';

function Picture() {
  // Daftar foto
  const photos = [
    { id: 1, src: 'https://cdn0-production-images-kly.akamaized.net/n0RKyWemQMYzU71AlMe1MMYqHuE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3649277/original/033280900_1638336173-20211201-Pembatasan_Jam_Operasional_Warteg_di_Masa_PPKM_Level_2-1.jpg', alt: 'Photo 1' },
    { id: 2, src: 'https://cdngnfi2.sgp1.digitaloceanspaces.com/gnfi/uploads/images/2024/09/img-9055jpeg', alt: 'Photo 2' },
    { id: 3, src: 'https://awsimages.detik.net.id/community/media/visual/2021/07/27/curhat-komunitas-warteg-soal-aturan-makan-20-menit_169.jpeg?w=700&q=90', alt: 'Photo 3' },
    { id: 4, src: 'https://cdn.antaranews.com/cache/1200x800/2021/07/26/antarafoto-pelonggaran-aturan-ppkm-untuk-warung-makan-260721-app-2.jpg', alt: 'Photo 4' },
    { id: 5, src: 'https://awsimages.detik.net.id/community/media/visual/2021/07/27/jajal-makan-di-warteg-yang-waktunya-dibatasi-20-menit-3_169.jpeg?w=1200', alt: 'Photo 5' },
    { id: 6, src: 'https://asset.kompas.com/crops/aP9yxk2MdL5AhSRIuG0JALZKpkQ=/0x0:0x0/1200x800/data/photo/2024/07/19/6699fc1386279.jpg', alt: 'Photo 6' },
  ];

  // Daftar video
  const videos = [
    { id: 1, src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Video 1' },
    { id: 2, src: 'https://www.youtube.com/embed/9bZkp7q19f0', title: 'Video 2' },
    { id: 3, src: 'https://www.youtube.com/embed/JGwWNGJdvx8', title: 'Video 3' },
  ];

  return (
    <section id="picture" className="picture">
      <h2>Our Gallery</h2>

      {/* Galeri Foto */}
      <div className="gallery-section">
        <h3>Photos</h3>
        <div className="photo-gallery">
          {photos.map((photo) => (
            <div key={photo.id} className="photo-item">
              <img src={photo.src} alt={photo.alt} className="photo" />
            </div>
          ))}
        </div>
      </div>

      {/* Galeri Video */}
      <div className="gallery-section">
        <h3>Videos</h3>
        <div className="video-gallery">
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <iframe
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Picture;