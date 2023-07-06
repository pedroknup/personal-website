import * as React from 'react';
import personalData, { skillsCV } from '../../data';

import './cv.style.scss';
import { educationalExperiences, professionalExperiences } from '../../data/experiences';


interface ICvProps {
  onClose: () => void;
}

export const CvModal = ({ onClose }: ICvProps) => {
  const [hasScrolled, setHasScrolled] = React.useState(false);

  const handleOnScroll = (event: any) => {
    const { scrollTop } = event.target;
    console.log('scrollTop', scrollTop);

    if (scrollTop > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  const handleOnDownload = () => {
    // download https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
    // window.open(
    //   pdfFile,
    //   '_blank'
    // );
  };

  return <div onScroll={handleOnScroll} className={`cv-modal ${hasScrolled ? 'scrolled' : ''}`}>
      <div className="cv-modal__header">
        <div className="cv-modal__header__image">
          <img src={personalData.profilePic} alt="profile" />
        </div>
        <div className="cv-modal__header__title">
          <div className="cv-modal__header__title__container">
            <div className="position-wrapper">
              <h1>{personalData.name}</h1>
              <span className="position collapsed">{personalData.position}</span>
            </div>
            <span className="position expanded">{personalData.position}</span>
          </div>
          <p>{personalData.bio}</p>
        </div>
      </div>
      <div className="cv-modal__content">
        <div className="cv-modal__content__contact">
          <div>
            <h3>Contact</h3>
            <div className="cv-modal__content__contact__item">
              {/* <div className="cv-modal__content__contact__item__title">E</div> */}
              <div className="cv-modal__content__contact__item__content">
                Email: {personalData.email}
              </div>
            </div>
            <div className="cv-modal__content__contact__item">
              {/* <div className="cv-modal__content__contact__item__title">A</div> */}
              <div className="cv-modal__content__contact__item__content">
                Based in {personalData.based}
              </div>
            </div>
          </div>
          <div>
            <h3>Social</h3>
            <div>
              {personalData.social.map((social, key) => (
                <div key={`social-item-${key}`} className="cv-modal__content__contact__item">
                  <a href={social.url} target="_blank" className="cv-modal__content__contact__item__title">{social.name}</a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3>Skills</h3>
            <div className="gapped-list">
              {skillsCV.map((section, key) => <div className="cv-modal__content__contact__skill">
                  <div key={`skill-cv-item-${key}`} className="cv-modal__content__contact__skill__section">
                    {section.section}
                  </div>
                  <ul className="cv-modal__content__contact__skill__section__content">
                    {section.items.map((skill, key2) => (
                      <li
                        key={`skill-item-${key2}`}
                        className="cv-modal__content__contact_skill__item"
                      >
                        <div className="cv-modal__content__contact_skill__item__title">
                          {skill.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>)}
            </div>
          </div>
        </div>
        <div className="cv-modal__content__section">
          <div className="cv-modal__content__section__timeline-bar" />
          <div className="cv-modal__content__section__title__wrapper">
            <div className="cv-modal__content__section__timeline__icon">
              <img src={'assets/suitcase-icon.png'} />
            </div>
            <div className="cv-modal__content__section__title">Professional Experiences</div>
          </div>
          {professionalExperiences.map((experience, key) => (
            <div className="cv-modal__content__section__item" key={`professional-${key}`}>
              <div className="cv-modal__content__section__item__header">
                <div className="cv-modal__content__section__item__title">{experience.title}</div>
                <div className="cv-modal__content__section__item__date">{experience.date}</div>
              </div>
              <div className="cv-modal__content__section__item__location">
                {experience.description}
              </div>
              <div className="cv-modal__content__section__item__content">
                {experience.content.content}
              </div>
              {experience.skills && (<div className="cv-modal__content__section__item__skills">
                <strong>Skills:</strong> {experience.skills?.join(' · ')}.
              </div>)}
            </div>
          ))}
          <div className="cv-modal__content__section__divider" />

          <div className="cv-modal__content__section__title__wrapper">
            <div className="cv-modal__content__section__timeline__icon">
              <img src={'assets/education.png'} />
            </div>
            <div className="cv-modal__content__section__title">Education</div>
          </div>

          {educationalExperiences.map((education, key) => (
            <div className="cv-modal__content__section__item" key={`education-${key}`}>
              <div className="cv-modal__content__section__item__header">
                <div className="cv-modal__content__section__item__title">{education.title}</div>
                <div className="cv-modal__content__section__item__date">{education.date}</div>
              </div>
              <div className="cv-modal__content__section__item__location">
                {education.description}
              </div>
              <div className="cv-modal__content__section__item__content">
                {education.content.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cv-modal__close-button-wrapper">
        <button onClick={handleOnDownload} className="cv-modal__close-button">
          DOWNLOAD
        </button>
        <button onClick={onClose} className="cv-modal__close-button">
          CLOSE
        </button>
      </div>
    </div>;
};
