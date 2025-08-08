import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import Social from './social'

const Footer = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="footer-footer">
        <div className="footer-content">
          <div className="footer-information">
            <div className="footer-heading">
              <span className="footer-text10">
                {props.footerAppName1}
              </span>
            </div>
            <div className="footer-socials">
              <a
                href="https://github.com/v1tzor/StudyAssistant"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link1"
              >
                <Social
                  insiderSrc="/github.svg"
                  rootClassName="socialroot-class-name1"
                  className="footer-component1"
                ></Social>
              </a>
              <a
                href="https://t.me/alesh1n"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link2"
              >
                <Social
                  insiderSrc="/telegram.svg"
                  rootClassName="socialroot-class-name2"
                  className="footer-component2"
                ></Social>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column1">
              <span className="footer-header1">
                {props.header1}
              </span>
              <a
                href="https://github.com/v1tzor/StudyAssistant/issues/new/choose"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link3"
              >
                {props.link1}
              </a>
              <a
                href="https://t.me/alesh1n"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link4"
              >
                {props.link12}
              </a>
              <a
                href="https://studyassistant-app.ru/privacy/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link4"
              >
                {props.privacy}
              </a>
            </div>
            <div className="footer-column2">
              <span className="footer-header2">
                {props.header11}
              </span>
              <a
                href="https://github.com/v1tzor"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link5"
              >
                {props.link61}
              </a>
              <a
                href="https://t.me/alesh1n"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link6"
              >
                {props.link81}
              </a>
              <a
                href="http://www.twitter.com/alesh1nS"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link7"
              >
                {props.link71}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <span className="footer-text11">
            {props.licence1}
          </span>
          <span className="footer-text12">
            {props.licence11}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .footer-footer {
            gap: var(--dl-layout-space-threeunits);
            color: white;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-sixunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-sixunits);
            background-color: #000000;
          }
          .footer-content {
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-information {
            gap: var(--dl-layout-space-unit);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-heading {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text10 {
            font-size: 14px;
            font-family: 'CeraPro-Regular';
            line-height: 21px;
          }
          .footer-socials {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .footer-link1 {
            display: contents;
          }
          .footer-component1 {
            text-decoration: none;
          }
          .footer-link2 {
            display: contents;
          }
          .footer-component2 {
            text-decoration: none;
          }
          .footer-links {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            z-index: 15;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .footer-column1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-header1 {
            font-size: 22px;
            font-style: normal;
            font-family: 'CeraPro-Medium';
            font-weight: 500;
            line-height: 30px;
          }
          .footer-link3 {
            color: #c4c4c4;
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            font-family: 'CeraPro-Regular';
            line-height: 21px;
            text-decoration: none;
          }
          .footer-link3:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link4 {
            color: #c4c4c4;
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            font-family: 'CeraPro-Regular';
            line-height: 21px;
            text-decoration: none;
          }
          .footer-link4:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-column2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-header2 {
            font-size: 22px;
            font-style: normal;
            font-family: 'CeraPro-Medium';
            font-weight: 500;
            line-height: 30px;
          }
          .footer-link5 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            font-family: 'CeraPro-Regular';
            line-height: 21px;
            text-decoration: none;
          }
          .footer-link5:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link6 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            font-family: 'CeraPro-Regular';
            line-height: 21px;
            text-decoration: none;
          }
          .footer-link6:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link7 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            font-family: 'CeraPro-Regular';
            line-height: 21px;
            text-decoration: none;
          }
          .footer-link7:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
          }
          .footer-text11 {
            color: rgb(196, 196, 196);
            width: 100%;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
            font-weight: 400;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .footer-text12 {
            color: rgb(196, 196, 196);
            width: var(--dl-layout-size-xxlarge);
            font-size: 16px;
            max-width: auto;
            align-self: center;
            text-align: right;
            font-family: 'CeraPro-Regular';
            line-height: 21px;
          }
          .footer-text13 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .footer-text14 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .footer-text15 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .footer-text16 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Regular';
          }
          .footer-text17 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .footer-text18 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .footer-text19 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .footer-text20 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Regular';
          }
          .footer-text21 {
            display: inline-block;
            font-size: 22px;
            font-family: 'CeraPro-Medium';
          }
          .footer-text22 {
            display: inline-block;
            font-size: 22px;
            font-family: 'CeraPro-Medium';
          }
          @media (max-width: 991px) {
            .footer-footer {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              gap: var(--dl-layout-space-twounits);
            }
            .footer-content {
              gap: var(--dl-layout-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-information {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer-heading {
              gap: var(--dl-layout-space-halfunit);
            }
            .footer-text10 {
              font-size: 12px;
              line-height: 18px;
            }
            .footer-socials {
              gap: var(--dl-layout-space-halfunit);
            }
            .footer-links {
              gap: var(--dl-layout-space-oneandhalfunits);
              width: 100%;
              flex-direction: column;
            }
            .footer-header1 {
              font-size: 16px;
              line-height: 24px;
            }
            .footer-header2 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .footer-links {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  footerAppName1: undefined,
  link61: undefined,
  link71: undefined,
  licence11: undefined,
  link12: undefined,
  link81: undefined,
  link1: undefined,
  licence1: undefined,
  header11: undefined,
  header1: undefined,
  privacy: undefined,
}

Footer.propTypes = {
  footerAppName1: PropTypes.element,
  link61: PropTypes.element,
  link71: PropTypes.element,
  licence11: PropTypes.element,
  link12: PropTypes.element,
  link81: PropTypes.element,
  link1: PropTypes.element,
  licence1: PropTypes.element,
  header11: PropTypes.element,
  header1: PropTypes.element,
  privacy: undefined,
}

export default Footer
