import React, { useEffect, UIEvent, useState } from 'react';
import Markdown from "markdown-to-jsx";
import _ from 'lodash';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './cv.style.scss';
import { Description } from '../../../types/experience';

type ExperienceItemCvProps = {
  onExpandClick: () => void;
  isExpanded: boolean;
  skills?: string[];
  title: string;
  date: string;
  place: string;
  description: Description;
}

export const ExperienceItemCv = ({ onExpandClick, skills, title, date, place, description, isExpanded }: ExperienceItemCvProps) => {
  return <div className="experience-item-cv">
    <div className="section__item__header">
      <div className="cv-modal__content__section__item__title">{title}</div>
      <div className="cv-modal__content__section__item__date">{date}</div>
    </div>
    <div className="cv-modal__content__section__item__location">
      {place}
    </div>
    <div className="description-wrapper" onClick={onExpandClick}>
      <div>
        <Markdown style={{ maxWidth: 'calc(100vw - 200px)', textAlign: 'justify', whiteSpace: 'break-spaces' }}>{isExpanded ? description.content.web : description.content.cv}</Markdown>

        {skills && (<div className="cv-modal__content__section__item__skills">
          <strong>Skills:</strong> {skills?.join(' · ')}.
        </div>)}
      </div>
      <button className="expand-button">
        {isExpanded ? 'Collapse' : 'Expand'}
        <span className={`experience-chevron ${isExpanded ? 'bottom' : 'right'}`} />
      </button>
    </div>

  </div >
}

