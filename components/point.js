import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Point = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="point-point">
        <div className="point-check">
          <svg viewBox="0 0 1024 1024" className="point-icon1">
            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
          </svg>
        </div>
        <span className="point-text1">
          {props.text}
        </span>
      </div>
      <style jsx>
        {`
          .point-point {
            gap: 16px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .point-check {
            display: flex;
            padding: 4px;
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-100);
          }
          .point-icon1 {
            fill: #ffffff;
            width: 18x;
            height: 18px;
          }
          .point-text1 {
            font-size: 18px;
            max-width: 535px;
            font-style: normal;
            font-family: 'CeraPro-Medium';
            line-height: 24px;
          }
          .point-text2 {
            display: inline-block;
            font-size: 18px;
            font-family: 'CeraPro-Medium';
          }
        `}
      </style>
    </>
  )
}

Point.defaultProps = {
  text: undefined,
}

Point.propTypes = {
  text: PropTypes.element,
}

export default Point
