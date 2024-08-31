import React from 'react';
import { youtubeVideos } from '../../data/youtube';
import { SectionPage } from '../section';
import './blog.style.scss';
import { PageProps } from '../../../types/page-props';

export const BlogPage = ({ darkMode, removeHighlight, isHighlighted }: PageProps) => {
  return <div className="blog-container">
    <SectionPage paddingColumns={2} darkMode={darkMode} removeHighlight={removeHighlight} isHighlighted={isHighlighted} id="blog" title="Artworks" description="My latest illustrations and videos">
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
    </SectionPage>
  </div>;
};
