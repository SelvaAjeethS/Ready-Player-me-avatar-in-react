import React from 'react';
import { Image } from '@nextui-org/react';


const SaveAvatar = () => {
  const handleRedirect = () => {
    window.location.href = 'https://demo.readyplayer.me/';
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Image
        src="https://www.tbstat.com/cdn-cgi/image/format=webp,q=40/wp/uploads/2022/08/compo_05_2000x10002-1200x675.png"
        alt="Ready Player Me Demo"
        style={{
          marginBottom: '20px',
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '10px',
        }}
      />
      <button
        onClick={handleRedirect}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#029ef2',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go to Ready Player Me Demo
      </button>
    </div>
  );
};

export default SaveAvatar;

//https://gltf-viewer.donmccurdy.com/