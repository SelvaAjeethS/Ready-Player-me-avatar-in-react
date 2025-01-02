import {
    AvatarCreator,
    AvatarCreatorConfig
  } from '@readyplayerme/react-avatar-creator';
  import { useState } from 'react';
  
  const config: AvatarCreatorConfig = {
    clearCache: true,
    bodyType: 'fullbody',
    quickStart: false,
    language: 'en',
  };
  
  export default function AvatarsCreator() {
    const [avatarUrl, setAvatarUrl] = useState('');

    
    const handleOnAvatarExported = (event) => {
      console.log('Avatar Export Event:', event);
      setAvatarUrl(event?.data?.url || '');
    };
  
    const showAlert = () => {
      alert(avatarUrl ? `Avatar URL: ${avatarUrl}` : 'No avatar URL available');
    };
  
    return (
      <div
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'auto',
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'flex-start',
        }}
      >
        <div style={{ width: '100%' }}>
          <AvatarCreator
            // subdomain="react-app-avatar"
            subdomain="demo"
            config={config}
            style={{ width: '100%', height: '100vh' }}
            onAvatarExported={handleOnAvatarExported}
          />
        </div>
        <button
          onClick={showAlert}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#029ef2',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            alignSelf: 'center',
            marginTop: '10px',
            marginLeft: '20px',
          }}
        >
          Show Avatar URL
        </button>
        </div>
    );
  }