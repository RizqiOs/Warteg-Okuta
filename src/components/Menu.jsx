import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Untuk navigasi ke halaman Contact

const menuItems = [
  {
    id: 1,
    name: "Perkedel",
    description: "Perkedel, kudapan kentang lezat dengan lapisan luar renyah dan hati lembut, memikat selera dengan cita rasa nusantara yang otentik.",
    price: 3000, // Harga dalam rupiah
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lewvPt4HqOGMzCBeU-aqtVz8WMsi4BN41g&s",
  },
  {
    id: 2,
    name: "Ayam Bakar",
    description: "Ayam bakar, sajian ayam beraroma rempah yang dipanggang sempurna, memancarkan kelezatan nusantara dalam setiap gigitannya.",
    price: 10000, // Harga dalam rupiah
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTau-4E7-7hkzeoRAuGPwdxtyi-4RDnv3lcwQ&s",
  },
  {
    id: 3,
    name: "Ikan Tongkol Cabe Ijo",
    description: "Tongkol cabe ijo, hidangan ikan tongkol yang disiram saus cabe hijau pedas menggoda, menghadirkan sensasi rasa segar khas nusantara.",
    price: 8000, // Harga dalam rupiah
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1IkaVCYYt8tF0Uvxa_FiExoup8k9uBrdbJw&s",
  },
  {
    id: 4,
    name: "Ikan tongkol Pedas",
    description: "Tongkol pedas, hidangan laut menggoda dengan bumbu pedas meresap yang menggigit selera dalam setiap suapan.",
    price: 8000, // Harga dalam rupiah
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKebfRGatZ9MLXia0k-XFHQ6Y3RLFAeR8iRx8kexzAB5-Y2omkpThx2rcjMiGZT2IOH4&usqp=CAU",
  },
  {
    id: 5,
    name: "Ayam Goreng",
    description: "Ayam goreng, potongan ayam yang digoreng sempurna dengan bumbu rahasia nusantara, menghadirkan sensasi kelezatan yang sulit ditolak.",
    price: 10000, // Harga dalam rupiah
    image: "https://www.masakapahariini.com/wp-content/uploads/2023/11/Resep-Ayam-Goreng-Laos-Gurih-dan-Meresap-500x300.jpg",
  },
  {
    id: 6,
    name: "Telor Dadar",
    description: "Tongkol pedas, hidangan laut menggoda dengan bumbu pedas meresap yang menggigit selera dalam setiap suapan.",
    price: 6000, // Harga dalam rupiah
    image: "https://cnc-magazine.oramiland.com/parenting/images/kalori-telur-dadar.width-800.format-webp.webp",
  },
  {
    id: 7,
    name: "Terong Balado Pedas",
    description: "Terong Balado Pedas, terong goreng renyah disiram sambal pedas khas nusantara yang menggugah selera.",
    price: 3000, // Harga dalam rupiah
    image: "https://kurio-img.kurioapps.com/21/03/03/e8954a8a-c63d-4a80-a1ad-154473c6f4c4.jpe",
  },
  {
    id: 8,
    name: "Tempe Goreng",
    description: "Tempe goreng, potongan tempe yang digoreng hingga renyah, menyuguhkan cita rasa gurih khas nusantara dalam setiap gigitannya.",
    price: 1000, // Harga dalam rupiah
    image: "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/sasefoto/original/42104_tempe-goreng-bumbu-kunyit.jpg",
  },
  {
    id: 9,
    name: "Ikan asin",
    description: "Ikan Asin Goreng, ikan asin yang digoreng renyah, menyuguhkan cita rasa gurih dan asin khas nusantara.",
    price: 2500, // Harga dalam rupiah
    image: "https://1.bp.blogspot.com/-_HTSCPF94bs/XTiNg_EHanI/AAAAAAAAQsg/PDD3FlBcxxUurQ3ZZs47m6-WewRS6EpPgCLcBGAs/s1600/Cara%2Bmenggoreng%2BIkan%2BAsin%2B%25282%2529.jpg",
  },
  {
    id: 10,
    name: "Telor Bulat Balado",
    description: "Telor Bulat Balado, telur bulat rebus disiram sambal balado pedas yang menggugah selera.",
    price: 3000, // Harga dalam rupiah
    image: "https://kurio-img.kurioapps.com/21/03/03/e8954a8a-c63d-4a80-a1ad-154473c6f4c4.jpe",
  },
  {
    id: 11,
    name: "Sate ayam",
    description: "Sate Ayam, potongan ayam yang dipanggang sempurna dengan bumbu kacang gurih, menggugah selera khas nusantara.",
    price: 15000, // Harga dalam rupiah
    image: "https://img.kurio.network/LLKB4CCxkEN646xXdzVuaLgbk8Q=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/24/04/05/c86c4b68-04e1-4d66-9d85-6903003bb6a8.jpg",
  },
  {
    id: 12,
    name: "Kikil Bumbu Kuning",
    description: "Kikil Bumbu Kuning, kikil sapi empuk yang dimasak dengan bumbu kuning kaya rempah, menyajikan cita rasa nusantara yang autentik dan menggugah selera.",
    price: 6000, // Harga dalam rupiah
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNziZXTz_z8wO1jsf4tv5sFP1akSzFAWMc6n13tFFFurzMILchpZZSOjrqm22eVRizVy0&usqp=CAU",
  },
];

// Fungsi untuk memformat angka menjadi format rupiah
const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0, // Tidak menampilkan desimal
  }).format(amount);
};

function Menu() {
  const navigate = useNavigate(); // Untuk navigasi ke halaman Contact

  // Mengambil data dari localStorage saat komponen pertama kali di-render
  const savedItemCounts = JSON.parse(localStorage.getItem('itemCounts')) || {};
  const savedTotalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
  const savedSelectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];

  const [itemCounts, setItemCounts] = useState(savedItemCounts); // State untuk menyimpan jumlah barang
  const [totalPrice, setTotalPrice] = useState(savedTotalPrice); // State untuk menyimpan total harga
  const [selectedItems, setSelectedItems] = useState(savedSelectedItems); // State untuk menyimpan daftar barang yang dipilih

  // Simpan data ke localStorage setiap kali ada perubahan
  useEffect(() => {
    localStorage.setItem('itemCounts', JSON.stringify(itemCounts));
    localStorage.setItem('totalPrice', totalPrice.toString());
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  }, [itemCounts, totalPrice, selectedItems]);

  // Fungsi untuk menambah jumlah barang dan menghitung total harga
  const handleAddItem = (itemId, itemPrice, itemName) => {
    setItemCounts((prevCounts) => {
      const newCounts = {
        ...prevCounts,
        [itemId]: (prevCounts[itemId] || 0) + 1, // Tambah jumlah barang
      };

      // Hitung total harga
      const newTotalPrice = Object.keys(newCounts).reduce((total, id) => {
        const item = menuItems.find((item) => item.id === parseInt(id));
        return total + item.price * newCounts[id];
      }, 0);

      setTotalPrice(newTotalPrice); // Perbarui total harga

      // Perbarui daftar barang yang dipilih
      const selectedItem = menuItems.find((item) => item.id === itemId);
      setSelectedItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === itemId);
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === itemId ? { ...item, quantity: newCounts[itemId] } : item
          );
        } else {
          return [...prevItems, { ...selectedItem, quantity: 1 }];
        }
      });

      return newCounts;
    });
  };

  // Fungsi untuk mengurangi jumlah barang atau menghapus barang dari daftar
  const handleDeleteItem = (itemId, itemPrice) => {
    setItemCounts((prevCounts) => {
      const newCounts = {
        ...prevCounts,
        [itemId]: (prevCounts[itemId] || 0) - 1, // Kurangi jumlah barang
      };

      // Jika jumlah barang mencapai 0, hapus barang dari daftar
      if (newCounts[itemId] <= 0) {
        delete newCounts[itemId];
        setSelectedItems((prevItems) =>
          prevItems.filter((item) => item.id !== itemId)
        );
      } else {
        // Perbarui jumlah barang di daftar yang dipilih
        setSelectedItems((prevItems) =>
          prevItems.map((item) =>
            item.id === itemId ? { ...item, quantity: newCounts[itemId] } : item
          )
        );
      }

      // Hitung ulang total harga
      const newTotalPrice = Object.keys(newCounts).reduce((total, id) => {
        const item = menuItems.find((item) => item.id === parseInt(id));
        return total + item.price * newCounts[id];
      }, 0);

      setTotalPrice(newTotalPrice); // Perbarui total harga
      return newCounts;
    });
  };

  // Fungsi untuk mengarahkan ke halaman Contact dengan membawa data
  const goToContact = () => {
    navigate('/contact', { state: { selectedItems, totalPrice } });
  };

  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              <p className="menu-item-price">{formatRupiah(item.price)}</p> {/* Format harga ke rupiah */}
              <button
                className="add-button"
                onClick={() => handleAddItem(item.id, item.price, item.name)} // Tambah barang saat tombol diklik
              >
                Tambah Barang ({itemCounts[item.id] || 0}) {/* Tampilkan jumlah barang */}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Daftar Barang yang Dipilih */}
      <div className="selected-items">
        <h3>Barang yang Dipilih:</h3>
        {selectedItems.length > 0 ? (
          <ul>
            {selectedItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x {formatRupiah(item.price)} ={' '}
                {formatRupiah(item.quantity * item.price)}
                <button
                  className="delete-button"
                  onClick={() => handleDeleteItem(item.id, item.price)} // Hapus barang saat tombol diklik
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Belum ada barang yang dipilih.</p>
        )}
      </div>

      {/* Total Harga */}
      <div className="total-price">
        <h3>Total Harga: {formatRupiah(totalPrice)}</h3> {/* Format total harga ke rupiah */}
      </div>

      {/* Tombol untuk menuju halaman Contact */}
      <button className="checkout-button" onClick={goToContact}>
        Lanjut ke Contact
      </button>
    </section>
  );
}

export default Menu;