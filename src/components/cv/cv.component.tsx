import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import personalData, { skillsCV, softSkillsCV, skillLanguages } from '../../data';
import { educationalExperiences, professionalExperiences } from '../../data/experiences';
import './cv.style.scss';
import { ExperienceItemCv } from './experience-item-cv.component';

type CvProps = {
  onClose: () => void;
}

export const CvModal = ({ onClose }: CvProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedExperienceDescriptionIndexes, setExpandedExperienceDescriptionIndexes] = useState<number[]>([]);

  const handleOnExpandExperience = (index: number) => {
    const newIndexes = [...expandedExperienceDescriptionIndexes];
    if (newIndexes.includes(index)) {
      newIndexes.splice(newIndexes.indexOf(index), 1);
    } else {
      newIndexes.push(index);
    }
    setExpandedExperienceDescriptionIndexes(newIndexes);
  }

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
    <div className={`cv-header flat ${isOpen ? 'open' : ''}`}>
      <div className="profile-image-wrapper">
        <img src={personalData.profilePic} alt="profile" />
      </div>
      <div className="cv-header__title">
        <div className="cv-header__title__container">
          <div className="flex">
            <h2>{personalData.name}</h2>
            <span className="position">{personalData.position}</span>
          </div>
        </div>
      </div>
    </div>

    <div className={`cv-modal ${isOpen ? 'open' : ''}`}>
      <div className={`cv-header expanded ${isOpen ? 'open' : ''}`}>
        <div className="profile-image-wrapper">
          <img src={personalData.profilePic} alt="profile" />
        </div>
        <div className="cv-header__title">
          <div className="cv-header__title__container">
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
                <div key={`skill-cv-item-${key}`} className="subtitle">
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
              {softSkillsCV.map((section) => <div className="cv-modal__content__contact__skill">
                {section.section && (<span key={`skill-cv-item-${section.section}`} className="subtitle">
                  {section.section}
                </span>)}
                <ul className="skill-content">
                  {section.items.map((skill) => (
                    <li
                      key={`skill-item-${skill.name}`}
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
            <h3>Languages</h3>
            <div className="gapped-list">
              {skillLanguages.map(language => (
                <ul className="skill-content">
                  <li
                    key={`language-item-${language}`}
                    className="cv-modal__content__contact_skill__item"
                  >
                    <span className="justified-inline">
                      <span className="cv-modal__content__contact_skill__item__title">
                        {language.language}
                      </span>
                      <span className="subtitle">
                        {" "}{language.level}
                      </span>
                    </span>
                  </li>
                </ul>
              ))}

            </div>
          </div>
          <div>
            <h3>Personal Note</h3>
            <div>
              When I am not coding, I am either painting or recording some music in my home studio
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
          {professionalExperiences.map((experience, index) => (
            <div className="experience-wrapper">
              <ExperienceItemCv
                title={experience.title}
                date={experience.date}
                place={experience.place}
                description={experience.description}
                skills={experience.skills}
                onExpandClick={() => handleOnExpandExperience(index)}
                isExpanded={expandedExperienceDescriptionIndexes.includes(index)}
              />
            </div>
          ))}
          <div className="cv-modal__content__section__divider" />

          <div className="cv-modal__content__section__title__wrapper">
            <div className="cv-modal__content__section__timeline__icon">
              <img src={'/personal-website/education.png'} />
            </div>
            <div className="cv-modal__content__section__title">Education</div>
          </div>

          {educationalExperiences.map((education, index) => (
            <div className="experience-wrapper">
              <ExperienceItemCv
                title={education.title}
                date={education.date}
                place={education.place}
                description={education.description}
                skills={education.skills}
                onExpandClick={() => handleOnExpandExperience(index + 100)}
                isExpanded={expandedExperienceDescriptionIndexes.includes(index + 100)}
              />
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
