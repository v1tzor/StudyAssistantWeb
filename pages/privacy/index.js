import Head from "next/head";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations();
  const [lang, setLang] = useState("ru"); // "ru" или "en"

  return (
    <>
      <Head>
        <title>Privacy Policy for StudyAssistant</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta property="og:title" content="Privacy Policy for StudyAssistant" />
        <meta property="og:url" content="https://studyassistant-app.ru/privacy" />
        <meta property="og:site_name" content="StudyAssistant" />
        <link rel="canonical" href="https://studyassistant-app.ru/privacy" />
      </Head>
    
      <body>
        <div className="page">
            <header className="header">
            <div className="container">
                <h1 className="title">Privacy Policy for StudyAssistant</h1>
                <div className="lang-switch">
                <button
                    className={`lang-btn ${lang === "ru" ? "active" : ""}`}
                    onClick={() => setLang("ru")}
                    aria-pressed={lang === "ru"}>
                    Русский
                </button>
                <button
                    className={`lang-btn ${lang === "en" ? "active" : ""}`}
                    onClick={() => setLang("en")}
                    aria-pressed={lang === "en"}>
                    English
                </button>
                </div>
            </div>
            </header>

            <main className="content">
            <div className="container">
                <div className={`tab-content ${lang === "ru" ? "ru" : "en"} visible`}>
                {lang === "ru" ? <RuContent /> : <EnContent />}
                </div>
            </div>
            </main>

            <footer className="footer">
            <div className="container">
                <p>© 2025 StudyAssistant. All rights reserved.</p>
            </div>
            </footer>
        </div>
      </body>

      <style jsx>{`
        .page {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
            background: #fff;
            color: #222;
            line-height: 1.7;
        }

        .container {
            max-width: 850px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }

        .header {
            border-bottom: 1px solid #e5e7eb;
            padding: 2rem 0 1rem;
        }

        .title {
            font-size: 1.9rem;
            font-weight: 700;
            margin: 0 0 0.5rem 0;
        }

        .lang-switch {
            margin-top: 1rem;
        }

        .lang-btn {
            background: #f3f4f6;
            border: none;
            padding: 0.5rem 1rem;
            margin-right: 0.5rem;
            font-size: 0.9rem;
            border-radius: 6px;
            cursor: pointer;
            transition: background 0.2s;
        }

        .lang-btn:hover {
            background: #e5e7eb;
        }

        .lang-btn.active {
            background: #2563eb;
            color: white;
        }

        .content {
            padding: 2rem 0;
        }

        .privacy h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
        }

        .privacy h2 {
            font-size: 1.4rem;
            font-weight: 600;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 0.25rem;
        }

        .privacy h3 {
            font-size: 1.15rem;
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
        }

        .privacy p {
            margin-bottom: 1.25rem;
            font-size: 1rem;
        }

        .privacy ul {
            padding-left: 2rem;
            margin-bottom: 1.5rem;
        }

        .privacy ul li {
            margin-bottom: 0.5rem;
        }

        .privacy ul ul {
            padding-left: 2.5rem;
            font-size: 0.95rem;
            margin-top: 0.5rem;
        }

        .privacy ul ul li {
        margin-bottom: 0.4rem;
        }

        .privacy a {
            color: #2563eb;
            text-decoration: none;
        }

        .privacy a:hover {
            text-decoration: underline;
        }

        .footer {
            border-top: 1px solid #e5e7eb;
            padding: 1rem 0;
            font-size: 0.85rem;
            color: #6b7280;
            text-align: center;
        }

        @media (max-width: 640px) {
            .title {
            font-size: 1.5rem;
            }
            .privacy h1 {
            font-size: 1.5rem;
            }
            .privacy h2 {
            font-size: 1.25rem;
            }
        }
     `}</style>
    </>
  );
}

function RuContent() {
  return (
    <div className="privacy">
      <h1>Политика конфиденциальности</h1>
      <p className="p"><strong>Дата последнего обновления:</strong> 8 августа 2025</p>
      
      <p>Добро пожаловать в StudyAssistant — мобильное приложение-помощник для учёбы (расписание, домашние задания, TODO). Настоящая Политика конфиденциальности описывает, какие данные мы собираем, как мы их используем, храним и защищаем, а также какие у вас есть права.</p>

      <h2>Краткая сводка</h2>
      <ul>
        <li><strong>Приложение:</strong> StudyAssistant — управление расписанием, домашними заданиями, списками дел (TODO), оповещениями и подписками.</li>
        <li><strong>Дистрибуция:</strong> RuStore, Huawei AppGallery, Google Play и, возможно, App Store.</li>
        <li><strong>Авторизация:</strong> поддерживается вход через Google и Yandex.</li>
        <li><strong>Подписки:</strong> есть платная подписка — месячная и годовая (auto-renew / автообновление через магазины приложений).</li>
        <li><strong>Хранение данных:</strong> пользовательские данные хранятся на защищённых серверах приложения. Данные не передаются третьим лицам для коммерческой перепродажи.</li>
      </ul>

      <h2>1. Толкование и основные определения</h2>
      <p>В тексте Политики слова с заглавной буквы имеют специальные значения: «Аккаунт», «Приложение», «Компания» (мы), «Персональные данные», «Данные об использовании» и т. п. Эти определения используются для ясности того, какие данные и роли имеются в виду.</p>

      <h2>2. Какие данные мы собираем</h2>
      
      <h3>2.1 Персональные данные (предоставляемые вами)</h3>
      <p>Когда вы регистрируетесь или используете функционал, мы можем запросить такие данные: имя, фамилия, адрес электронной почты, регион, город и другие контактные данные, которые вы решите предоставить.</p>
      
      <h3>2.2 Данные авторизации</h3>
      <p>При входе через Google или Yandex мы получаем только те данные, которые вы разрешаете передать (например, email, имя). Мы используем их для создания и управления вашим аккаунтом в StudyAssistant.</p>
      
      <h3>2.3 Данные об использовании</h3>
      <p>Автоматически собирается техническая информация: IP-адрес, тип и версия ОС или браузера (если применимо), тип устройства, уникальные идентификаторы устройства, время и страницы/функции, которыми вы пользуетесь. Эти данные помогают улучшать стабильность и функционал приложения.</p>
      
      <h3>2.4 Данные мультимедиа</h3>
      <p>С вашим явным согласием приложение может получить доступ к камере и галерее (для прикрепления фото к задачам). Вы можете отозвать доступ в настройках устройства в любое время.</p>

      <h2>3. Как мы используем данные</h2>
      <p>Мы используем данные для следующих целей:</p>
      <ul>
        <li>Предоставление и поддержка работы приложения.</li>
        <li>Управление вашим аккаунтом и авторизацией.</li>
        <li>Обработка платежей и управление подписками (месяц / год).</li>
        <li>Отправка уведомлений о расписании, домашнем задании и важных событиях.</li>
        <li>Аналитика (агрегированная) для улучшения сервиса.</li>
        <li>Обеспечение безопасности и предотвращение мошенничества.</li>
      </ul>

      <h2>4. Передача и раскрытие данных</h2>
      <p>StudyAssistant не продаёт ваши персональные данные третьим лицам. Мы можем раскрыть данные только в следующих ситуациях:</p>
      <ul>
        <li>с поставщиками услуг и партнёрами, которым необходимы данные для выполнения функций (хостинг, обработка платежей, аналитика) — такие провайдеры работают по договорам и обязаны обеспечивать безопасность;</li>
        <li>в рамках юридических запросов (суд, правоохранительные органы);</li>
        <li>в случае корпоративных трансакций (слияние, продажа активов), при которых пользователи будут уведомлены заранее.</li>
      </ul>

      <h2>5. Хранение данных</h2>
      <p>Данные хранятся на серверах, контролируемых Компанией или её поставщиками услуг, в соответствии с применимыми законами. Мы сохраняем данные столько, сколько требуется для целей, описанных в настоящей Политике, либо дольше, если того требует закон.</p>

      <h2>6. Безопасность</h2>
      <p>Мы используем технические и организационные меры (шифрование при передаче, доступ по правам, регулярные обновления серверов) для защиты данных. Тем не менее абсолютную безопасность гарантировать невозможно.</p>

      <h2>7. Платные подписки и платежи</h2>
      <p>Подписки оформляются через магазины приложений (Google Play, AppGallery, RuStore, App Store), и финансовая обработка происходит через механизмы соответствующих магазинов. Условия возвратов / отмены подписки регулируются политиками соответствующих магазинов (Google, Huawei, RuStore, Apple).</p>

      <h2>8. Права пользователя и удаление данных</h2>
      <p>Вы можете запросить доступ, исправление или удаление своих персональных данных. Для этого используйте настройки аккаунта в приложении или свяжитесь с нами (см. раздел «Контакты»). Учтите, что при удалении аккаунта часть анонимизированных данных может сохраняться в журнале для аналитики и безопасности.</p>

      <h2>9. Конфиденциальность детей</h2>
      <p>Приложение не предназначено для детей младше 13 лет. Мы не собираем сознательно персональные данные несовершеннолетних младше 13 лет. Если вы считаете, что такие данные были предоставлены, свяжитесь с нами, и мы удалим их.</p>

      <h2>10. Ссылки на сторонние ресурсы</h2>
      <p>В приложении могут быть ссылки на сторонние сайты. Мы не несем ответственность за контент и практики этих сайтов — рекомендуем читать их политики конфиденциальности.</p>

      <h2>11. Изменение Политики</h2>
      <p>Мы можем время от времени обновлять Политику. В случае существенных изменений мы уведомим пользователей через приложение или по email.</p>

      <h2>Контакты</h2>
      <p>По вопросам конфиденциальности и прав доступа пишите на <a href="mailto:dev.aleshin@gmail.com">dev.aleshin@gmail.com</a> или посетите официальный репозиторий: <a href="https://github.com/v1tzor/StudyAssistant" target="_blank" rel="noopener noreferrer">https://github.com/v1tzor/StudyAssistant</a></p>
    </div>
  );
}

function EnContent() {
  return (
    <div className="privacy">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> August 08, 2025</p>
      
      <p>Welcome to StudyAssistant — a mobile study assistant (schedule, homework, TODO). This Privacy Policy explains what data we collect, how we use it, how we store it and protect it, and what rights you have.</p>

      <h2>Summary</h2>
      <ul>
        <li><strong>App:</strong> StudyAssistant — schedule management, homework, TODO lists, reminders.</li>
        <li><strong>Distribution:</strong> RuStore, Huawei AppGallery, Google Play, (possible) App Store.</li>
        <li><strong>Authentication:</strong> Google and Yandex sign-in supported.</li>
        <li><strong>Subscriptions:</strong> paid subscription available (monthly and yearly).</li>
        <li><strong>Data storage:</strong> user data is stored on secure servers operated by the app (or its providers). Data is not sold to third parties.</li>
      </ul>

      <h2>1. Interpretation & Definitions</h2>
      <p>Capitalized terms used in this Policy have the meanings set out in the definitions section to provide clarity regarding the data and actors involved.</p>

      <h2>2. What data we collect</h2>
      
      <h3>2.1 Personal data (provided by you)</h3>
      <p>When you register or use features, we may ask for personal information such as name, email address, region, city, and other contact details you choose to provide.</p>
      
      <h3>2.2 Authentication data</h3>
      <p>If you sign in via Google or Yandex, we receive only the information you allow those providers to share (e.g., email, name). We use this to create and manage your StudyAssistant account.</p>
      
      <h3>2.3 Usage data</h3>
      <p>We automatically collect technical data: IP address, device type and OS, device identifiers, timestamps, and feature usage info. We use this data to improve performance and reliability.</p>
      
      <h3>2.4 Media data</h3>
      <p>With your explicit consent, the app may access your device camera or photo library (for attaching photos to tasks). You can revoke this access in device settings at any time.</p>

      <h2>3. How we use data</h2>
      <p>We use data for:</p>
      <ul>
        <li>Providing and maintaining the app.</li>
        <li>Managing accounts and authentication.</li>
        <li>Processing payments and subscriptions (monthly / yearly).</li>
        <li>Sending schedule and homework reminders and notifications.</li>
        <li>Aggregated analytics to improve the service.</li>
        <li>Security and fraud prevention.</li>
      </ul>

      <h2>4. Data sharing & disclosure</h2>
      <p>We do not sell personal data. We may disclose data in the following cases:</p>
      <ul>
        <li>to service providers who perform services on our behalf (hosting, payments, analytics) — under contract and data protection controls;</li>
        <li>to comply with legal requests from courts or law enforcement;</li>
        <li>in corporate transactions (merger, sale of assets) — users will be notified where required.</li>
      </ul>

      <h2>5. Data storage</h2>
      <p>Data is stored on servers managed by the Company or its providers, according to applicable laws. We retain data only for as long as needed for the purposes described or as required by law.</p>

      <h2>6. Security</h2>
      <p>We apply reasonable technical and organizational measures (encryption in transit, access controls, patching) to protect data. No method of transmission or storage is absolutely secure.</p>

      <h2>7. Paid subscriptions and billing</h2>
      <p>Subscriptions are handled through the app stores (Google Play, AppGallery, RuStore, App Store) and billing is processed by the respective stores. Cancellation, refunds, and billing disputes are governed by the store policies.</p>

      <h2>8. User rights & deletion</h2>
      <p>You may request access, rectification, or deletion of your personal data. Use the app account settings or contact us (see Contacts). Some anonymized logs may be retained for analytics and security after deletion.</p>

      <h2>9. Children's privacy</h2>
      <p>The app is not intended for children under 13. We do not knowingly collect data from children under 13. If you believe we have collected such data, contact us and we will remove it.</p>

      <h2>10. Links to other sites</h2>
      <p>The app may contain links to third-party sites. We are not responsible for their content or privacy practices — please review their policies.</p>

      <h2>11. Changes to this Policy</h2>
      <p>We may update this Policy from time to time. Material changes will be communicated via the app or by email where appropriate.</p>

      <h2>Contacts</h2>
      <p>For privacy questions or data requests, contact: <a href="mailto:dev.aleshin@gmail.com">dev.aleshin@gmail.com</a><br />
      Repository: <a href="https://github.com/v1tzor/StudyAssistant" target="_blank" rel="noopener noreferrer">https://github.com/v1tzor/StudyAssistant</a></p>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const locale = "ru";
  const messages = (await import(`../../locales/${locale}.json`)).default;

  return {
    props: {
      messages,
      locale,
      now: new Date().getTime(),
    },
  };
}