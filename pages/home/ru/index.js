import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Feature from '../../../components/feature'
import Highlight from '../../../components/highlight'
import Point from '../../../components/point'
import Accordion from '../../../components/accordion'
import Footer from '../../../components/footer'
import LanguageSwitcher from '@/components/languageswitcher'

const Home = (props) => {
  const t = useTranslations()
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>StudyAssistant</title>
          <meta name="description" content="Your Ultimate Academic Organizer!" />
          <meta property="og:title" content="StudyAssistant" />
          <meta
            property="og:description"
            content="Your Ultimate Academic Organizer!"
          />
        </Head>
        <div className="home-hero">
          <header className="home-heading1">
            <header className="home-navbar">
              <div className="home-desktop">
                <div className="home-main">
                  <div className="home-branding">
                    <Link href="/">
                      <a className="home-link10">
                        <img
                          alt="pastedImage"
                          src="/site-logo-text-200h.png"
                          className="home-studyassistant"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="home-links1">
                    <a href="#feat" className="home-link11 link">
                      <span>{t('nav.features')}</span>
                    </a>
                    <a href="#details" className="home-link12 link">
                      <span>{t('nav.details')}</span>
                    </a>
                    <a href="#faq" className="home-link13 link">
                      <span>{t('nav.faq')}</span>
                    </a>
                    <a href="#dowload" className="home-link14 link">
                      <span>{t('nav.contact')}</span>
                    </a>
                  </div>
                  <LanguageSwitcher />
                </div>
              </div>
            </header>
          </header>
          <div id="main" className="home-content1">
            <div className="home-content2">
              <h1 className="home-title1">
                <span dangerouslySetInnerHTML={{ __html: t('hero.title') }}></span>
              </h1>
              <span className="home-caption">
                <span>{t('hero.subtitle')}</span>
              </span>
              <div className="home-container4">
                <a
                  href="https://www.rustore.ru/catalog/app/ru.aleshin.studyassistant"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link21"
                >
                  <div className="home-hero-buttons1">
                    <img
                      alt="image"
                      src="/external/ru-store-button.svg"
                      className="home-image4"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="home-images">
              <div className="home-column1">
                <img
                  alt="pastedImage"
                  src="/header2-1500h.png"
                  className="home-pasted-image1"
                />
              </div>
              <div className="home-column2">
                <img
                  alt="pastedImage"
                  src="/header1-1500h.png"
                  className="home-pasted-image2"
                />
                <img
                  alt="pastedImage"
                  src="/header3-1500h.png"
                  className="home-pasted-image3"
                />
              </div>
              <div className="home-column3">
                <img
                  alt="pastedImage"
                  src="/header4-1500h.png"
                  className="home-pasted-image4"
                />
                <img
                  alt="pastedImage"
                  src="/header5-1500h.png"
                  className="home-pasted-image5"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="gallery" className="home-gallery3 thq-section-padding">
          <div className="home-max-width thq-section-max-width">
            <div className="home-section-title">
              <h2 className="home-text12 thq-heading-2">
                {t('gallery.title')}
              </h2>
              <span className="home-text13 thq-body-large">
                {t('gallery.description')}
              </span>
            </div>
            <div className="home-content3">
              <div className="home-container5">
                <img
                  alt="PlaceholderImage1302"
                  src="/mockup2-zip-1400w.jpg"
                  className="thq-img-ratio-4-3"
                />
              </div>
              <div className="home-container6">
                <img
                  alt="PlaceholderImage1302"
                  src="/mockup1-zip-1400w.jpg"
                  className="thq-img-ratio-4-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="feat" className="home-features">
          <div id="features" className="home-header1">
            <div className="home-tag1">
              <span className="home-text14">
                {t('features.tag')}
              </span>
            </div>
            <div className="home-heading2">
              <h2 className="home-text15">
                {t('features.title')}
              </h2>
              <span className="home-text16">
                {t('features.subtitle')}
              </span>
            </div>
          </div>
          <div className="home-feature-list">
            <Feature
              title={t('features.ai_chat.title')}
              description={t('features.ai_chat.description')}
              thumbnail="/openai-chatgpt.svg"
              rootClassName="featureroot-class-name"
            />
            <Feature
              title={t('features.multi_device.title')}
              description={t('features.multi_device.description')}
              thumbnail="/devices.svg"
              rootClassName="featureroot-class-name1"
            />
            <Feature
              title={t('features.split_schedule.title')}
              description={t('features.split_schedule.description')}
              thumbnail="/institution.svg"
              rootClassName="featureroot-class-name2"
            />
            <Feature
              title={t('features.tasks.title')}
              description={t('features.tasks.description')}
              thumbnail="/task-checked.svg"
              rootClassName="featureroot-class-name3"
            />
            <Feature
              title={t('features.reminders.title')}
              description={t('features.reminders.description')}
              thumbnail="/notification.svg"
              rootClassName="featureroot-class-name4"
            />
            <Feature
              title={t('features.sharing.title')}
              description={t('features.sharing.description')}
              thumbnail="/peoples.svg"
              rootClassName="featureroot-class-name5"
            />
            <Feature
              title={t('features.analytics.title')}
              description={t('features.analytics.description')}
              thumbnail="/analytics.svg"
              rootClassName="featureroot-class-name6"
            />
            <Feature
              title={t('features.schedule.title')}
              description={t('features.schedule.description')}
              thumbnail="/schedule.svg"
              rootClassName="featureroot-class-name7"
            />
          </div>
        </div>
        <div className="home-sections">
          <div id="details" className="home-section1">
            <div className="home-image5"></div>
            <div className="home-content4">
              <h2 className="home-text33">
                {t('details.schedule.title')}
              </h2>
              <Highlight
                title={t('details.schedule.feature1.title')}
                description={t('details.schedule.feature1.description')}
              />
              <Highlight
                title={t('details.schedule.feature2.title')}
                description={t('details.schedule.feature2.description')}
              />
              <a href="#dowload" className="home-link22">
                <div className="home-explore">
                  <span className="home-text38">
                    {t('common.download')}
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="home-section2">
            <div className="home-content5">
              <div className="home-heading3">
                <h2 className="home-text39">
                  {t('details.tasks.title')}
                </h2>
                <span className="home-text40">
                  {t('details.tasks.subtitle')}
                </span>
              </div>
              <div className="home-content6">
                <div className="home-points">
                  <Point text={t('details.tasks.point1')} />
                  <Point text={t('details.tasks.point2')} />
                  <Point text={t('details.tasks.point3')} />
                </div>
                <Link href="/">
                  <a className="home-link23">
                    <div className="home-get-started1">
                      <span className="home-sign-up">
                        {t('common.signup')}
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="home-image6"></div>
          </div>
          <div className="home-section3">
            <div className="home-image7"></div>
            <div className="home-content7">
              <h2 className="home-text44">
                <span dangerouslySetInnerHTML={{ __html: t('details.assistant.title') }}></span>
              </h2>
              <Accordion
                text1={t('details.assistant.feature1.title')}
                text11={t('details.assistant.feature1.description')}
                text21={t('details.assistant.feature2.title')}
                text31={t('details.assistant.feature2.description')}
                text41={t('details.assistant.feature3.title')}
                text51={t('details.assistant.feature3.description')}
              />
            </div>
          </div>
        </div>
        <div id="faq" className="home-faq">
          <div className="home-content8">
            <div className="home-header2">
              <div className="home-tag2">
                <span className="home-text51">
                  {t('faq.tag')}
                </span>
              </div>
              <div className="home-heading4">
                <h2 className="home-text52">
                  {t('faq.title')}
                </h2>
              </div>
            </div>
            <div className="home-rows">
              <div className="home-column4">
                <div className="Question">
                  <span className="home-title2">
                    {t('faq.question1')}
                  </span>
                  <span className="home-description1">
                    {t('faq.answer1')}
                  </span>
                </div>
                <div className="Question">
                  <span className="home-title3">
                    {t('faq.question2')}
                  </span>
                  <span className="home-description2">
                    {t('faq.answer2')}
                  </span>
                </div>
                <div className="home-question3 Question">
                  <span className="home-title4">
                    {t('faq.question3')}
                  </span>
                  <span className="home-description3">
                    {t('faq.answer3')}
                  </span>
                </div>
              </div>
              <div className="home-column5">
                <div className="home-question4 Question">
                  <span className="home-title5">
                    {t('faq.question4')}
                  </span>
                  <span className="home-description4">
                    {t('faq.answer4')}
                  </span>
                </div>
                <div className="home-question5 Question">
                  <span className="home-title6">
                    {t('faq.question5')}
                  </span>
                  <span className="home-description5">
                    {t('faq.answer5')}
                  </span>
                </div>
                <div className="home-question6 Question">
                  <span className="home-title7">
                    {t('faq.question6')}
                  </span>
                  <span className="home-description6">
                    {t('faq.answer6')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="dowload" className="home-get-started2">
          <div className="home-content9">
            <div className="home-heading5">
              <h2 className="home-text53">
                {t('download.title')}
              </h2>
              <span className="home-text54">
                {t('download.subtitle')}
              </span>
            </div>
            <a
              href="https://www.rustore.ru/catalog/app/ru.aleshin.studyassistant"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link24"
            >
              <div className="home-hero-buttons2">
                <img
                  alt="image"
                  src="/external/ru-store-button.svg"
                  className="home-image8"
                />
              </div>
            </a>
          </div>
        </div>
        <Footer
          link1={t('footer.links.issues')}
          link12={t('footer.links.contact')}
          link61={t('footer.links.about')}
          link71={t('footer.links.twitter')}
          link81={t('footer.links.telegram')}
          header1={t('footer.sections.report')}
          licence={t('footer.copyright')}
          header11={t('footer.sections.developer')}
          licence1={t('footer.copyright')}
          licence11={t('footer.developer_info')}
          footerAppName1={t('footer.app_description')}
          privacy={t('footer.privacy')}
        />
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .home-desktop {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-main {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link10 {
            display: contents;
          }
          .home-studyassistant {
            width: 154px;
            height: 44px;
            text-decoration: none;
          }
          .home-links1 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: baseline;
            padding-top: 12px;
            border-radius: 6px;
            flex-direction: row;
            padding-bottom: 12px;
            justify-content: center;
          }
          .home-link11 {
            font-size: 18px;
            font-family: 'CeraPro-Medium';
            text-decoration: none;
          }
          .home-link12 {
            font-size: 18px;
            font-family: 'CeraPro-Medium';
            text-decoration: none;
          }
          .home-link13 {
            font-size: 18px;
            font-family: 'CeraPro-Medium';
            text-decoration: none;
          }
          .home-link14 {
            font-size: 18px;
            font-family: 'CeraPro-Medium';
            text-decoration: none;
          }
          .home-quick-actions {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-hamburger-menu {
            width: 20px;
            height: 12px;
            display: none;
          }
          .home-mobile {
            gap: var(--dl-layout-space-fourunits);
            top: 0px;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            z-index: 200;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image3 {
            width: 150px;
            object-fit: cover;
          }
          .home-icon1 {
            width: 28px;
            height: 28px;
          }
          .home-links2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-link15 {
            text-decoration: none;
          }
          .home-link16 {
            text-decoration: none;
          }
          .home-link17 {
            text-decoration: none;
          }
          .home-link18 {
            text-decoration: none;
          }
          .home-buttons {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .home-link19 {
            display: contents;
          }
          .home-btn1 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-text10 {
            font-style: normal;
            font-weight: 500;
          }
          .home-link20 {
            display: contents;
          }
          .home-btn2 {
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-items: center;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .home-text11 {
            font-style: normal;
            font-weight: 500;
          }
          .home-container3 {
            display: contents;
          }
          .home-content1 {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0.5;
            display: flex;
            z-index: 20;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
          }
          .home-title1 {
            font-size: 68px;
            font-family: 'CeraPro-Bold';
            line-height: 76px;
          }
          .home-caption {
            width: auto;
            height: auto;
            font-size: 20px;
            max-width: 600px;
            font-style: normal;
            font-family: 'CeraPro-Regular';
            font-weight: 400;
            line-height: 27px;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-link21 {
            display: contents;
          }
          .home-hero-buttons1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            z-index: 15;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .home-image4 {
            width: 200px;
            object-fit: cover;
          }
          .home-images {
            gap: var(--dl-layout-space-oneandhalfunits);
            right: -210px;
            bottom: -250px;
            margin: auto;
            display: flex;
            overflow: hidden;
            position: absolute;
            transform: rotate(-30deg);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-column1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image1 {
            width: 240px;
            border-radius: 0px;
          }
          .home-column2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image2 {
            width: 240px;
            border-radius: 0px;
          }
          .home-pasted-image3 {
            width: 240px;
            border-radius: 0px;
          }
          .home-column3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image4 {
            width: 240px;
            border-radius: 0px;
          }
          .home-pasted-image5 {
            width: 240px;
            border-radius: 0px;
          }
          .home-gallery3 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            background-color: #000000;
          }
          .home-max-width {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-text12 {
            color: rgb(255, 255, 255);
            font-size: 36px;
            text-align: center;
            font-family: 'CeraPro-Bold';
          }
          .home-text13 {
            color: rgb(255, 255, 255);
            width: auto;
            text-align: center;
            font-family: 'CeraPro-Regular';
          }
          .home-content3 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .home-container5 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container6 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: flex-start;
          }
          .home-header1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag1 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: var(--dl-color-primary-300);
          }
          .home-text14 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-family: 'CeraPro-Regular';
          }
          .home-heading2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text15 {
            width: 455px;
            font-size: 44px;
            max-width: 400px;
            font-style: normal;
            font-family: 'CeraPro-Bold';
            line-height: 52px;
          }
          .home-text16 {
            width: 100%;
            font-size: 20px;
            max-width: 800px;
            font-family: 'CeraPro-Regular';
            line-height: 27px;
          }
          .home-feature-list {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text17 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text18 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-text19 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text20 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-text21 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text22 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-text23 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text24 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-text25 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text26 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-text27 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text28 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-text29 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text30 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-text31 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text32 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-sections {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-section1 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-layout-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-image5 {
            height: 650px;
            width: 350px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: contain;
            justify-content: flex-end;
            background-image: url('/App-Overview-Dark.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-content4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text33 {
            font-size: 42px;
            max-width: 535px;
            font-style: normal;
            font-family: 'CeraPro-Bold';
            font-weight: 600;
            line-height: 56px;
          }
          .home-text34 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text35 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Regular';
          }
          .home-text36 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text37 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Regular';
          }
          .home-link22 {
            display: contents;
          }
          .home-explore {
            cursor: pointer;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            transition: 0.3s;
            align-items: flex-start;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            text-decoration: none;
            border-bottom-width: 1px;
          }
          .home-explore:hover {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.3);
          }
          .home-text38 {
            font-family: 'CeraPro-Medium';
          }
          .home-section2 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: center;
          }
          .home-content5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text39 {
            font-size: 42px;
            max-width: 535px;
            font-style: normal;
            font-family: 'CeraPro-Bold';
            font-weight: 600;
            line-height: 56px;
          }
          .home-text40 {
            font-size: 20px;
            max-width: 535px;
            font-family: 'CeraPro-Regular';
            line-height: 27px;
          }
          .home-content6 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-points {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text41 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Medium';
          }
          .home-text42 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Medium';
          }
          .home-text43 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Medium';
          }
          .home-link23 {
            display: contents;
          }
          .home-get-started1 {
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-twounits);
            border-radius: 16px;
            padding-right: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-primary-300);
          }
          .home-get-started1:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-sign-up {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: 'CeraPro-Bold';
            font-weight: 500;
          }
          .home-image6 {
            height: 650px;
            width: 350px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: contain;
            justify-content: flex-end;
            background-image: url('/App-Tasks-Dark.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-section3 {
            gap: var(--dl-layout-space-sixunits);
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-sixunits);
            justify-content: center;
          }
          .home-image7 {
            height: 650px;
            width: 350px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            background-size: contain;
            background-image: url('/App-Chat-Dark.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-content7 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            margin-top: var(--dl-layout-space-fiveunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text44 {
            font-size: 42px;
            width: 650px;
            max-width: 650px;
            font-style: normal;
            font-family: 'CeraPro-Bold';
            font-weight: 600;
            line-height: 56px;
          }
          .home-text45 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text46 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Regular';
          }
          .home-text47 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text48 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Regular';
          }
          .home-text49 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .home-text50 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Regular';
          }
          .home-faq {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #f3f5fa;
          }
          .home-content8 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag2 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius8);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: var(--dl-color-primary-100);
          }
          .home-text51 {
            color: #ffffff;
            font-style: normal;
            font-weight: 500;
          }
          .home-heading4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text52 {
            width: 100%;
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-family: 'CeraPro-Bold';
            line-height: 56px;
          }
          .home-rows {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-column4 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-title2 {
            font-size: 20px;
            font-style: normal;
            font-family: 'CeraPro-Medium';
            font-weight: 500;
          }
          .home-description1 {
            font-size: 18px;
            font-family: 'CeraPro-Regular';
            line-height: 24px;
          }
          .home-title3 {
            font-size: 20px;
            font-style: normal;
            font-family: 'CeraPro-Medium';
            font-weight: 500;
          }
          .home-description2 {
            font-size: 18px;
            font-family: 'CeraPro-Regular';
            line-height: 24px;
          }
          .home-question3 {
            border-bottom-width: 0px;
          }
          .home-title4 {
            font-size: 20px;
            font-style: normal;
            font-family: 'CeraPro-Medium';
            font-weight: 500;
          }
          .home-description3 {
            font-size: 18px;
            font-family: 'CeraPro-Regular';
            line-height: 24px;
          }
          .home-column5 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-question4 {
            border-right-width: 0px;
          }
          .home-title5 {
            font-size: 20px;
            font-style: normal;
            font-family: 'CeraPro-Medium';
            font-weight: 500;
          }
          .home-description4 {
            font-size: 18px;
            font-family: 'CeraPro-Regular';
            line-height: 24px;
          }
          .home-question5 {
            border-right-width: 0px;
          }
          .home-title6 {
            font-size: 20px;
            font-style: normal;
            font-family: 'CeraPro-Medium';
            font-weight: 500;
          }
          .home-description5 {
            font-size: 18px;
            font-family: 'CeraPro-Regular';
            line-height: 24px;
          }
          .home-question6 {
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-title7 {
            font-size: 20px;
            font-style: normal;
            font-family: 'CeraPro-Medium';
            font-weight: 500;
          }
          .home-description6 {
            font-size: 18px;
            font-family: 'CeraPro-Regular';
            line-height: 24px;
          }
          .home-get-started2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-oneandhalfunits);
            padding-right: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: var(--dl-color-primary-100);
          }
          .home-content9 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .home-heading5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text53 {
            color: rgb(203, 255, 239);
            width: 700px;
            font-size: 68px;
            font-style: normal;
            text-align: center;
            font-family: 'CeraPro-Bold';
            font-weight: 600;
          }
          .home-text54 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            text-align: center;
            font-family: 'CeraPro-Regular';
            line-height: 30px;
          }
          .home-link24 {
            display: contents;
          }
          .home-hero-buttons2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            z-index: 15;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
          }
          .home-image8 {
            width: 200px;
            object-fit: cover;
          }
          .home-text55 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-text56 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-text57 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-text58 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-text59 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .home-text60 {
            display: inline-block;
            font-size: 22px;
            font-family: 'CeraPro-Medium';
          }
          .home-text61 {
            display: inline-block;
            font-size: 22px;
            font-family: 'CeraPro-Medium';
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Regular';
          }
          .home-text64 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          @media (max-width: 991px) {
            .home-navbar {
              align-items: center;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-links1 {
              display: none;
            }
            .home-hamburger-menu {
              display: flex;
            }
            .home-content1 {
              flex-direction: column;
            }
            .home-content2 {
              gap: var(--dl-layout-space-unit);
              flex: 0 0 auto;
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: 0px;
            }
            .home-title1 {
              font-size: 50px;
              text-align: left;
              line-height: 58px;
            }
            .home-caption {
              font-size: 16px;
            }
            .home-hero-buttons1 {
              width: 100%;
            }
            .home-images {
              left: 0px;
              right: -100px;
              bottom: -425px;
              margin: auto;
            }
            .home-pasted-image1 {
              width: 200px;
            }
            .home-pasted-image2 {
              width: 200px;
            }
            .home-pasted-image3 {
              width: 200px;
            }
            .home-pasted-image4 {
              width: 200px;
            }
            .home-pasted-image5 {
              width: 200px;
            }
            .home-content3 {
              align-items: center;
              flex-direction: column;
            }
            .home-feature-list {
              justify-content: flex-start;
            }
            .home-section1 {
              gap: var(--dl-layout-space-oneandhalfunits);
              padding-top: var(--dl-layout-space-fourunits);
              flex-direction: column-reverse;
            }
            .home-content4 {
              gap: var(--dl-layout-space-unit);
            }
            .home-explore {
              margin-top: var(--dl-layout-space-halfunit);
            }
            .home-section2 {
              padding-top: var(--dl-layout-space-fourunits);
              border-color: #dbdbdb;
              flex-direction: column;
              border-top-width: 1px;
            }
            .home-content5 {
              gap: var(--dl-layout-space-unit);
            }
            .home-content6 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-section3 {
              align-items: center;
              padding-top: var(--dl-layout-space-fourunits);
              border-color: #dbdbdb;
              flex-direction: column-reverse;
              padding-bottom: var(--dl-layout-space-fourunits);
              border-top-width: 1px;
            }
            .home-content7 {
              margin-top: 0px;
            }
            .home-get-started2 {
              padding-top: var(--dl-layout-space-fourunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content9 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-heading5 {
              gap: var(--dl-layout-space-halfunit);
            }
            .home-text53 {
              font-size: 40px;
            }
            .home-text54 {
              font-size: 18px;
            }
            .home-hero-buttons2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              align-items: center;
            }
            .home-mobile {
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-twounits);
            }
            .home-title1 {
              font-size: 40px;
              line-height: 48px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-images {
              bottom: -400px;
            }
            .home-features {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-header1 {
              gap: var(--dl-layout-space-unit);
            }
            .home-text14 {
              font-size: 14px;
            }
            .home-text15 {
              width: auto;
              font-size: 32px;
              line-height: 44px;
            }
            .home-text16 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-feature-list {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: flex-start;
            }
            .home-text33 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text39 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-text40 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-get-started1 {
              display: none;
            }
            .home-section3 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-faq {
              width: 100%;
            }
            .home-content8 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-text51 {
              font-size: 14px;
            }
            .home-text52 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-rows {
              flex-direction: column;
            }
            .home-title2 {
              font-size: 16px;
            }
            .home-get-started2 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-hero-buttons1 {
              width: 100%;
              flex-direction: column;
            }
            .home-images {
              bottom: -300px;
            }
            .home-pasted-image1 {
              width: 150px;
            }
            .home-pasted-image2 {
              width: 150px;
            }
            .home-pasted-image3 {
              width: 150px;
            }
            .home-pasted-image4 {
              width: 150px;
            }
            .home-pasted-image5 {
              width: 150px;
            }
            .home-feature-list {
              gap: var(--dl-layout-space-halfunit);
              justify-content: flex-start;
            }
            .home-image5 {
              width: 100%;
              max-width: 400px;
            }
            .home-image7 {
              width: 100%;
              max-width: 400px;
            }
            .home-hero-buttons2 {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps({ params }) {
  const locale = 'ru'
  const messages = (await import(`../../../locales/${locale}.json`)).default

  return {
    props: {
      messages,
      locale,
      now: new Date().getTime()
    }
  }
}