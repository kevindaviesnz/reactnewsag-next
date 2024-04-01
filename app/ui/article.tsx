import React, { FC } from 'react';

interface ArticleProps {
  imageSrc: string;
  headline: string;
  uri: string;
}

const Article: FC<ArticleProps> = ({ imageSrc, headline, uri }) => {
    return (
      <div className="flex flex-col items-center">  {/* Added flexbox with column direction */}
        <img src={imageSrc} alt="Article" className="w-full md:w-auto rounded-lg mb-4 md:mb-0 md:mr-4" />
        <h2 className="text-gray-700">{headline}</h2>
        <a href={uri}>Read more</a>      
      </div>
    );
  };
  

export default Article;
