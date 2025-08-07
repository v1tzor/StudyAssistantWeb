import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Social = (props) => {
  return (
    <>
      <div className={`social-social ${props.rootClassName} `}>
        <img
          alt={props.insiderAlt}
          src={props.insiderSrc}
          className="social-insider"
        />
      </div>
      <style jsx>
        {`
          .social-social {
            cursor: pointer;
            display: flex;
            padding: var(--dl-layout-space-unit);
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            border-radius: 24px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .social-social:hover {
            background-color: rgba(236, 233, 234, 0.6);
          }
          .social-insider {
            width: 31px;
            height: 31px;
          }

          @media (max-width: 767px) {
            .social-social {
              padding: 12px;
            }
          }
        `}
      </style>
    </>
  )
}

Social.defaultProps = {
  insiderAlt: 'pastedImage',
  insiderSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/dc84e660-6f14-43e9-80e8-dbcb1fbaae0f?org_if_sml=11092',
  rootClassName: '',
}

Social.propTypes = {
  insiderAlt: PropTypes.string,
  insiderSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Social
