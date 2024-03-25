import React, { FC } from 'react';

interface LeadingArticleProps {
  imageSrc: string;
  headline: string;
}

const LeadingArticle: FC<LeadingArticleProps> = ({ imageSrc, headline }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="max-w-7xl flex items-start"> {/* Added container with defined width */}
        <img src={imageSrc} alt="Leading article" className="rounded-lg mr-4" />
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{headline}</h2>
          <p className="text-gray-600">Read more</p>
        </div>
      </div>
    </div>
  );
};


export default LeadingArticle;



