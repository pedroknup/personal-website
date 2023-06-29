import * as React from 'react';
import { youtubeVideos } from '../../data/youtube';
import { Section } from '../section/section-component';
import './blog-component.scss';

interface ISkillsProps {
  removeHighlight?: (id: string) => void;
  isHighlighted?: boolean;
  darkMode: boolean;
}

export const BlogPage = (props : ISkillsProps) => {
  return <div className="blog-container">
      <Section paddingColumns={2} darkMode={props.darkMode} removeHighlight={props.removeHighlight} isHighlighted={props.isHighlighted} id="blog" title="Artworks" description="My latest illustrations and videos">
        {youtubeVideos.map((video, key) => <div key={`yt-${key}`}>
            <div className="date">{video.date}</div>
            <a href={video.link} target="_blank" className="title">{video.title}</a>
            <br />
            <div className="name">{`//${'*'} ${video.description} ${'*'}//`}</div>
            <br />
            <div dangerouslySetInnerHTML={{ __html: video.content }} />
            <br />
            <br />
          </div>)}
      </Section>
    </div>;
};
