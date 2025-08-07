import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="accordion-container">
      {[
        { title: props.text1, content: props.text11 },
        { title: props.text21, content: props.text31 },
        { title: props.text41, content: props.text51 }
      ].map((item, index) => (
        <div 
          key={index}
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div 
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="accordion-title">{item.title}</h3>
            <span className="accordion-icon">
              {activeIndex === index ? '−' : '+'}
            </span>
          </div>
          <div 
            className="accordion-content"
            style={{ display: activeIndex === index ? 'block' : 'none' }}
          >
            {item.content}
          </div>
        </div>
      ))}
      
      <style jsx>{`
        .accordion-container {
          width: 640px;
          max-width: 640px;
          margin: 0 auto;
          font-family: 'CeraPro-Regular', sans-serif;
        }
        
        .accordion-item {
          border-bottom: 1px solid #eaeaea;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }
        
        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          cursor: pointer;
          user-select: none;
        }
        
        .accordion-title {
          font-size: 20px;
          font-family: 'CeraPro-Medium';
          font-weight: 600;
          line-height: 27px;
          margin: 0;
          color: #333;
          transition: color 0.2s ease;
        }
        
        .accordion-icon {
          font-size: 24px;
          font-weight: bold;
          color: #333;
          transition: transform 0.3s ease, color 0.2s ease;
        }
        
        .accordion-content {
          width: 100%;
          max-width: 640px;
          font-size: 18px;
          line-height: 24px;
          padding-bottom: 16px;
          color: #666;
          animation: fadeIn 0.3s ease;
        }
        
        .accordion-item.active .accordion-icon {
          transform: rotate(45deg);
          color: var(--dl-color-primary-300);
        }
        
        .accordion-item.active .accordion-title {
          color: var(--dl-color-primary-300);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 767px) {
          .accordion-title {
            font-size: 18px;
            line-height: 24px;
          }
          
          .accordion-content {
            font-size: 16px;
          }
        }
        
        @media (max-width: 479px) {
          .accordion-container {
            width: 100%;
            padding: 0 16px;
          }
        }
      `}</style>
    </div>
  )
}

Accordion.propTypes = {
  text1: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text11: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text21: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text31: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text41: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text51: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

Accordion.defaultProps = {
  text1: '',
  text11: '',
  text21: '',
  text31: '',
  text41: '',
  text51: ''
}

export default Accordion