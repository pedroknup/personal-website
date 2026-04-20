import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { personalData } from '../../data/bio';
import { skillsCV, skillLanguages } from '../../data/skills';
import { educationalExperiences, professionalExperiences } from '../../data/experiences';
import { Experience } from '../../../types/experience';

const CV_CONTACT_NETWORKS = ['Github', 'LinkedIn'];

import './cv-page.style.scss';

const Entry = ({ experience }: { experience: Experience }) => (
  <div className="cv-entry">
    <div className="cv-entry__header">
      <span className="cv-entry__title-line">
        {experience.title}
        <span className="place">{experience.place}</span>
      </span>
      <span className="cv-entry__date">{experience.date}</span>
    </div>
    <p className="cv-entry__description">{experience.description.content}</p>
    {experience.skills && experience.skills.length > 0 && (
      <p className="cv-entry__skills">{experience.skills.join(' · ')}</p>
    )}
  </div>
);

export const CvPage = () => {
  const navigate = useNavigate();

  // The home page's stylesheet sets `body { overflow: hidden }` globally as
  // soon as it is imported. Force it back to auto while the CV page is mounted
  // so the document scrolls.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousTitle = document.title;
    document.body.style.overflow = 'auto';
    // Browsers default the saved-PDF filename to the document title.
    document.title = 'pedro-knup-cv';
    return () => {
      document.body.style.overflow = previousOverflow;
      document.title = previousTitle;
    };
  }, []);

  const handleDownload = () => {
    window.print();
  };

  const bioParagraphs = personalData.bio
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const contactItems = [
    personalData.email,
    personalData.based.replace(/\.$/, ''),
    ...personalData.social
      .filter((s) => CV_CONTACT_NETWORKS.includes(s.name))
      .map((s) => s.url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')),
  ];

  return (
    <div className="cv-page">
      <div className="cv-page__toolbar">
        <button className="toolbar-button" type="button" onClick={() => navigate('/')}>
          ← Back
        </button>
        <button
          className="toolbar-button toolbar-button--primary"
          type="button"
          onClick={handleDownload}
        >
          Download PDF
        </button>
      </div>

      <article className="cv-sheet">
        <header className="cv-sheet__masthead">
          <h1 className="cv-sheet__name">{personalData.name}</h1>
          <div className="cv-sheet__role">{personalData.position}</div>
          <ul className="cv-sheet__contact">
            {contactItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </header>

        <section className="cv-section">
          <h2 className="cv-section__title">Profile</h2>
          <div className="cv-section__bio">
            {bioParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section__title">Experience</h2>
          <div className="cv-section__body">
            {professionalExperiences.map((experience) => (
              <Entry key={`${experience.title}-${experience.date}`} experience={experience} />
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section__title">Education</h2>
          <div className="cv-section__body">
            {educationalExperiences.map((experience) => (
              <Entry key={`${experience.title}-${experience.date}`} experience={experience} />
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section__title">Skills</h2>
          <div className="cv-section__rows">
            {skillsCV.map((group) => (
              <React.Fragment key={group.section}>
                <div className="cv-section__row-label">{group.section}</div>
                <div className="cv-section__row-value">
                  {group.items.map((s) => s.name).join(' · ')}
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section__title">Languages</h2>
          <div className="cv-section__rows">
            {skillLanguages.map((language) => (
              <React.Fragment key={language.language}>
                <div className="cv-section__row-label">{language.language}</div>
                <div className="cv-section__row-value">{language.level}</div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};
