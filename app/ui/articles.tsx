import React, { FC } from 'react';
import Article from './article';
import ArticlesGapHorizontal from './articles-gap-horizontal';

interface ArticlesProps {
  category: string;
  articles: { imageSrc: string; headline: string }[];
}

const Articles: FC<ArticlesProps> = ({ category, articles }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Article key={index} imageSrc={article['images'][0]} headline={article.headline} uri={article.uri} />
        ))}
      </div>
      <ArticlesGapHorizontal />
    </div>
  );
};

export default Articles;
