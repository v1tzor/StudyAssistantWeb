import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Feature = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.featureId}
        className={`feature-feature ${props.rootClassName} `}
      >
        <img
          alt={props.thumbnailAlt}
          src={props.thumbnail}
          className="feature-image"
        />
        <div className="feature-content">
          <span className="feature-title">
            {props.title}
          </span>
          <span className="feature-description">
            {props.description}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-feature {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            max-width: 240px;
            transition: 0.3s;
            align-items: flex-start;
            user-select: none;
            border-color: rgba(0, 0, 0, 0);
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-feature:hover {
            border-color: #ade2df;
          }
          .feature-image {
            height: 32px;
            object-fit: cover;
          }
          .feature-content {
            gap: var(--dl-layout-space-unit);
            width: 215px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-title {
            font-size: 20px;
            font-family: 'CeraPro-Bold';
          }
          .feature-description {
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .feature-text1 {
            display: inline-block;
            font-size: 16px;
            font-family: 'CeraPro-Regular';
          }
          .feature-text2 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          .featureroot-class-name {
            width: auto;
          }
          .featureroot-class-name1 {
            width: auto;
          }
          .featureroot-class-name2 {
            width: auto;
          }
          .featureroot-class-name3 {
            width: auto;
          }
          .featureroot-class-name4 {
            width: auto;
          }
          .featureroot-class-name5 {
            width: auto;
          }
          .featureroot-class-name6 {
            width: auto;
          }
          .featureroot-class-name7 {
            width: auto;
          }
          @media (max-width: 767px) {
            .feature-feature {
              gap: var(--dl-layout-space-oneandhalfunits);
              max-width: 100%;
            }
            .feature-content {
              gap: var(--dl-layout-space-halfunit);
            }
            .feature-title {
              font-size: 18px;
              line-height: 27px;
            }
            .feature-description {
              line-height: 24px;
            }
          }
          @media (max-width: 561px) {
            .feature-feature {
              width: 100%;
            }
            .feature-content { 
              width: 100%;
            }
            .featureroot-class-name {
              width: 100%;
            }
            .featureroot-class-name1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Feature.defaultProps = {
  featureId: '',
  description: undefined,
  title: undefined,
  thumbnailAlt: 'image',
  thumbnail: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
}

Feature.propTypes = {
  featureId: PropTypes.string,
  description: PropTypes.element,
  title: PropTypes.element,
  thumbnailAlt: PropTypes.string,
  thumbnail: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Feature
