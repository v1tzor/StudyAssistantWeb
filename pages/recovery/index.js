import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { account } from '@/lib/appwrite';

const Recovery = (props) => {
  const t = useTranslations();
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({ message: '', color: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleRecovery = async () => {
    if (!password || password.length < 6) {
      setStatus({ message: t('msg_pass_length'), color: 'red' });
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    const secret = params.get('secret');

    if (userId && secret) {
      try {
        await account.updateRecovery(userId, secret, password);
        setStatus({ message: t('msg_recovered'), color: 'green' });
      } catch (error) {
        setStatus({ message: t('msg_recovery_error'), color: 'red' });
      }
    } else {
      setStatus({ message: t('msg_recovery_error'), color: 'red' });
    }
  };

  return (
    <div className='recovery-container'>
        <Head>
            <title>{t('title_recovery')}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div className="recovery-box">
            <h2 className='title'>{t('title_recovery')}</h2>
            
            <div className="password-wrapper">
            <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                placeholder={t('placeholder_pass')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <span 
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000ff"><path d="M12 6a9.77 9.77 0 0 1 8.82 5.5 9.77 9.77 0 0 1-8.82 5.5A9.77 9.77 0 0 1 3.18 11.5 9.77 9.77 0 0 1 12 6zm0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5zm0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4z" fill="#000000ff"></path><path d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2s2-.916 2-2s-.916-2-2-2z" fill="currentColor"></path></svg>
                )}
            </span>
            </div>
            
            <button onClick={handleRecovery}>
                {t('btn_recover')}
            </button>
            
            <div className="status" style={{ color: status.color }}>
                {status.message}
            </div>
        </div>

      <style jsx>{`
        .recovery-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            padding-left: 16px;
            padding-right: 16px;
            flex-direction: column;
            justify-content: center;
        }
        
        .recovery-box {
            max-width: 421px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }

        .title {
            text-align: center;
            font-weight: 400;
            margin-bottom: 20px;
            width: 100%;
        }
        
        .recovery-box p {
          margin: 10px 0;
        }
        
        .password-wrapper {
          position: relative;
          margin-bottom: 20px;
          width: 100%;
        }
        
        input[type="password"], input[type="text"] {
          width: 100%;
          padding: 12px 40px 12px 12px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-sizing: border-box;
        }
        
        .toggle-password {
          position: absolute;
          top: 50%;
          right: 12px;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 16px;
          color: #575992;
        }
        
        button {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          background: #1f1f1fff;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 10px;
        }
        
        .status {
          margin-top: 10px;
          min-height: 1.2em;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Recovery;

export async function getStaticProps({ params }) {
  const locale = "en";
  const messages = (await import(`../../locales/${locale}.json`)).default;

  return {
    props: {
      messages,
      locale,
      now: new Date().getTime(),
    },
  };
}