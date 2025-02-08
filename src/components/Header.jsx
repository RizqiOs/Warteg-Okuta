import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State untuk visibilitas navbar
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk toggle menu

    useEffect(() => {
        const handleResize = () => {
            // Sembunyikan navbar jika lebar layar kurang dari 768px (split-screen)
            setIsNavbarVisible(window.innerWidth >= 768);
        };

        // Panggil fungsi handleResize saat komponen dimuat
        handleResize();

        // Tambahkan event listener untuk mendeteksi perubahan ukuran layar
        window.addEventListener('resize', handleResize);

        // Bersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle status menu
    };

    return (
        <>
            {/* Tombol Toggle untuk Layar Kecil */}
            {!isNavbarVisible && (
                <button
                    onClick={toggleMenu}
                    className="toggle-button"
                >
                    {isMenuOpen ? 'Close Menu' : 'Open Menu'}
                </button>
            )}

            {/* Navbar yang Ditampilkan Berdasarkan Status */}
            {(isNavbarVisible || isMenuOpen) && (
                <header className={isMenuOpen ? 'show' : ''}>
                    <h1>Warteg Okuta</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/picture">Picture</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </header>
            )}
        </>
    );
}

export default Header;