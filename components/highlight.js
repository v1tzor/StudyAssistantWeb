import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Highlight = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="highlight-highlight">
        <span className="highlight-text1">
          {props.title}
        </span>
        <span className="highlight-text2">
          {props.description}
        </span>
      </div>
      <style jsx>
        {`
          .highlight-highlight {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .highlight-text1 {
            font-size: 20px;
            max-width: 650px;
            font-style: normal;
            font-family: 'CeraPro-Medium';
            font-weight: 600;
            line-height: 27px;
          }
          .highlight-text2 {
            font-size: 18px;
            max-width: 650px;
            font-family: 'CeraPro-Regular';
            line-height: 24px;
          }
          .highlight-text3 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Regular';
          }
          .highlight-text4 {
            display: inline-block;
            font-size: 20px;
            font-family: 'CeraPro-Medium';
          }
          @media (max-width: 767px) {
            .highlight-text1 {
              font-size: 16px;
              text-align: center;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Highlight.defaultProps = {
  description: undefined,
  title: undefined,
}

Highlight.propTypes = {
  description: PropTypes.element,
  title: PropTypes.element,
}

export default Highlight
