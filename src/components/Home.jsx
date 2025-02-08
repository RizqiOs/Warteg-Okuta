import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home" style={{ textAlign: 'center', padding: '20px', position: 'relative' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img 
          src="https://assets-pergikuliner.com/Oicc40epc1L4cR-ChZhawUUdE3s=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/25260/Warung_Tegal__lifepal.co.id_.jpg" 
          alt="Food Banner" 
          style={{ width: '100%', borderRadius: '10px' }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          backgroundColor: 'rgba(214, 188, 188, 0.5)',
          padding: '10px',
          borderRadius: '10px'
        }}>
          <h2>Selamat Datang di Warteg Okuta</h2>
          <p>Temukan resep lezat dan hidangan yang menggugah selera.</p>
          <button 
            onClick={() => navigate('/about')} 
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              fontSize: '20px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
