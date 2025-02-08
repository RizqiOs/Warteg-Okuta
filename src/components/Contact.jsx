import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Untuk mengambil data dari halaman Menu

// Fungsi untuk memformat angka menjadi format rupiah
const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0, // Tidak menampilkan desimal
  }).format(amount);
};

function Contact() {
  const location = useLocation(); // Untuk mengambil data dari halaman Menu
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Ambil data dari halaman Menu
  const { selectedItems = [], totalPrice = 0 } = location.state || {};

  // Format pesan otomatis
  const orderDetails = selectedItems
    .map(
      (item) =>
        `${item.name} - ${item.quantity} x ${formatRupiah(item.price)} = ${formatRupiah(
          item.quantity * item.price
        )}`
    )
    .join('\n');

  const defaultMessage = `Halo, saya ingin memesan:\n${orderDetails}\n\nTotal Harga: ${formatRupiah(
    totalPrice
  )}`;

  // Set pesan otomatis saat komponen di-render
  useEffect(() => {
    setMessage(defaultMessage);
  }, [defaultMessage]);

  // Fungsi untuk mengarahkan ke WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    // Format pesan yang akan dikirim
    const whatsappMessage = `Halo, saya ${name} (${email}). :\n${message}`;

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Nomor WhatsApp tujuan (ganti dengan nomor Anda)
    const phoneNumber = '6285695494895'; // Nomor Anda dalam format internasional

    // Redirect ke WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        {/* Formulir Kontak */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="10" // Tambahkan lebih banyak baris untuk pesan yang panjang
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message via WhatsApp
            </button>
          </form>
        </div>

        {/* Informasi Kontak */}
        <div className="contact-info">
          <h3>Our Contact Information</h3>
          <p>
            <strong>Address:</strong> 123 Food Street, Jakarta, Indonesia
          </p>
          <p>
            <strong>Phone:</strong> +62 856 9549 4895
          </p>
          <p>
            <strong>Email:</strong> info@WartegOkuta.com
          </p>
          <p>
            <strong>Opening Hours:</strong> Mon - Sun, 10:00 AM - 10:00 PM
          </p>
        </div>
      </div>

      {/* Peta Lokasi (Opsional) */}
      <div className="map-container">
        <h3>Our Location</h3>
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135063985!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67156e7c828!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1633033226785!5m2!1sen!2sid"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;