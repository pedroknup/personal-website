import * as React from 'react';

import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
import './blog-component.scss';
import { youtubeVideos } from '../../../data/youtube';
import { Section } from '../../section/section-component';
const wheelReact = require('wheel-react');
const WheelReact = wheelReact.default;
interface ISkillsProps {
  removeHighlight?: (id: string) => void;
  isHighlighted?: boolean;
  darkMode: boolean;
}

export const BlogPage = (props : ISkillsProps) => {
  return <div className="blog-container">
      <Section paddingColumns={2} darkMode={props.darkMode} removeHighlight={props.removeHighlight} isHighlighted={props.isHighlighted} id="blog" title="Videos" description="My latest videos">
        {youtubeVideos.map((video, key) => <div key={`yt-${key}`}>
            <div className="date">{video.date}</div>
            <div className="title">{video.title}</div>
            <br />
            <div className="name">{`//${'*'} ${video.description} ${'*'}//`}</div>
            <br />
            <div dangerouslySetInnerHTML={{ __html: video.embedded }} />
            <br />
            <br />
          </div>)}
      </Section>
    </div>;
};
