import React from 'react';
import { youtubeVideos } from '../../data/youtube';
import { SectionPage } from '../section';
import './blog.style.scss';
import { PageProps } from '../../../types/page-props';

export const BlogPage = ({ isDarkMode: darkMode, removeHighlight, isHighlighted }: PageProps) => {
  return (
    <div className="blog-container">
      <SectionPage
        paddingColumns={2}
        isDarkMode={darkMode}
        removeHighlight={removeHighlight}
        isHighlighted={isHighlighted}
        id="blog"
        title="Artworks"
        description="My latest artworks and passion projects"
      >
        {youtubeVideos.map((video, key) => (
          <div key={`yt-${key}`}>
            <div className="date">{video.date}</div>
            <a href={video.link} target="_blank" className="title">
              {video.title}
              <br />
              <div className="name">{`//${'*'} ${video.description} ${'*'}//`}</div>
              <br />
              <div dangerouslySetInnerHTML={{ __html: video.content }} />
            </a>
            <br />
            <br />
          </div>
        ))}
      </SectionPage>
    </div>
  );
};
