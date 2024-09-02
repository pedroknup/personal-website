import React, { useEffect, UIEvent, useState } from 'react';
import Markdown from "markdown-to-jsx";
import _ from 'lodash';
import personalData, { skillsCV, softSkillsCV } from '../../data';
import { educationalExperiences, professionalExperiences } from '../../data/experiences';
import './cv.style.scss';

type CvProps = {
  onClose: () => void;
}

export const CvModal = ({ onClose }: CvProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnScroll = (e: UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    updateScrollState(scrollTop);
  };

  const updateScrollState = _.debounce((scrollTop: number) => {
    if (scrollTop > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }, 100);


  const handleOnDownload = () => {
    window.open(
      '/personal-website/Pedro-Knup-resume-23-06.pdf',
      '_blank'
    );
  };

  const handleOnClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 380);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 10);
  }, [])

  return <div className={`cv-container ${isOpen ? 'open' : ''}`}>
    <div className={`header flat ${hasScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
      <div className="profile-image-wrapper">
        <img src={personalData.profilePic} alt="profile" />
      </div>
      <div className="header__title">
        <div className="header__title__container">
          <div className="flex">
            <h2>{personalData.name}</h2>
            <span className="position">{personalData.position}</span>
          </div>
        </div>
      </div>
    </div>

    <div onScroll={handleOnScroll} className={`cv-modal ${hasScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
      <div className={`header expanded ${hasScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
        <div className="profile-image-wrapper">
          <img src={personalData.profilePic} alt="profile" />
        </div>
        <div className="header__title">
          <div className="header__title__container">
            <div className="position-wrapper">
              <h1>{personalData.name}</h1>
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
              <div className="cv-modal__content__contact__item__content">
                Email: {personalData.email}
              </div>
            </div>
            <div className="cv-modal__content__contact__item">
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
          <div>
            <h3>Soft Skills</h3>
            <div className="gapped-list">
              {softSkillsCV.map((section, key) => <div className="cv-modal__content__contact__skill">
                {section.section && (<div key={`skill-cv-item-${key}`} className="cv-modal__content__contact__skill__section">
                  {section.section}
                </div>)}
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
          <div>
            <h3>Personal Note</h3>
            <div>
              When I am not coding, I am either painting or record some music in my home studio
            </div>
          </div>

        </div>
        <div className="cv-modal__content__section">
          <div className="cv-modal__content__section__timeline-bar" />
          <div className="cv-modal__content__section__title__wrapper">
            <div className="cv-modal__content__section__timeline__icon">
              <img src={'/personal-website/suitcase-icon.png'} />
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
                <Markdown style={{ maxWidth: 'calc(100vw - 200px)', textAlign: 'justify', whiteSpace: 'break-spaces' }}>{experience.content.content as any}</Markdown>
              </div>
              {experience.skills && (<div className="cv-modal__content__section__item__skills">
                <strong>Skills:</strong> {experience.skills?.join(' · ')}.
              </div>)}
            </div>
          ))}
          <div className="cv-modal__content__section__divider" />

          <div className="cv-modal__content__section__title__wrapper">
            <div className="cv-modal__content__section__timeline__icon">
              <img src={'/personal-website/education.png'} />
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
    </div>
    <div className="cv-modal__close-button-wrapper">
      <button onClick={handleOnDownload} className="cv-modal__close-button">
        DOWNLOAD
      </button>
      <button onClick={handleOnClose} className="cv-modal__close-button">
        CLOSE
      </button>
    </div>
  </div >;
};
