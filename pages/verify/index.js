import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import Script from 'dangerous-html/react';
import { useRouter } from 'next/router';
import { account }  from '@/lib/appwrite'

const Verify = (props) => {
    const t = useTranslations();
    const router = useRouter();
    const [message, setMessage] = useState({
        title: t('title_verify'),
        content: t('msg_wait')
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadAppwrite = async () => {
            const params = new URLSearchParams(window.location.search);
            const userId = params.get('userId');
            const secret = params.get('secret');

            if (userId && secret) {
                try {
                    await account.updateVerification(userId, secret);
                    setMessage({title: t('msg_success'),content: ''});
                } catch (error) {
                    setMessage({title: t('msg_error'), content: ''});
                } finally {
                    setIsLoading(false);
                }
            } else {
                setMessage({ title: t('msg_error'), content: ''});
                setIsLoading(false);
            }
        };

        loadAppwrite();
    }, [t]);
   

return (
    <div className="verify-container">
      <Head>
        <title>{t('title_verify')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="verify-box">
          <h2 className="title">{message.title}</h2>
          {message.content && <p>{message.content}</p>}
          {isLoading && <p>Loading...</p>}
      </div>

      <style jsx>{`
        .verify-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
        
        .verify-box {
            width: 421px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }

        .title {
            text-align: center;
            font-weight: 400;
        }
        
        .verify-box p {
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
};

export default Verify;

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