import React from 'react';
import NewsPaperBanner from './ui/newspaper-banner';
import NewsCategories from './ui/news-categories';
import Articles from './ui/articles';
import LeadingArticle from './ui/leading-article';
import ArticlesGapHorizonal from './ui/articles-gap-horizontal';
import NewsPaperFooter from './ui/newspaper-footer';
import HeadlineLinksContainer from './ui/headline-links-container';

const categories = ['Local', 'World', 'Technology']; // Example categories
const leadingArticle = { imageSrc: '/leading-article.webp', headline: 'Leading article headline' }; // Example leading article
const articlesByCategory = {
  'World': [
    { imageSrc: '/leading-article.webp', headline: 'World Article 1' },
    { imageSrc: '/leading-article.webp', headline: 'World Article 2' },
    { imageSrc: '/leading-article.webp', headline: 'World Article 3' }
  ],
  'Politics': [
    { imageSrc: '/leading-article.webp', headline: 'World Article 1' },
    { imageSrc: '/leading-article.webp', headline: 'World Article 2' },
    { imageSrc: '/leading-article.webp', headline: 'World Article 3' }
  ],
  'Local': [
    { imageSrc: '/leading-article.webp', headline: 'World Article 1' },
    { imageSrc: '/leading-article.webp', headline: 'World Article 2' },
    { imageSrc: '/leading-article.webp', headline: 'World Article 3' }
  ],

  // Other categories and articles...
};

const headlineLinks = [
  { text: 'Link 1', url: '/link1' },
  { text: 'Link 2', url: '/link2' },
  { text: 'Link 3', url: '/link3' },
  { text: 'Link 4', url: '/link4' },
  { text: 'Link 5', url: '/link5' },
  { text: 'Link 6', url: '/link6' },
  { text: 'Link 1', url: '/link1' },
  { text: 'Link 2', url: '/link2' },
  { text: 'Link 3', url: '/link3' },
  { text: 'Link 4', url: '/link4' },
  { text: 'Link 5', url: '/link5' },
  { text: 'Link 6', url: '/link6' },
  { text: 'Link 1', url: '/link1' },
  { text: 'Link 2', url: '/link2' },
  { text: 'Link 3', url: '/link3' },
  { text: 'Link 4', url: '/link4' },
  { text: 'Link 5', url: '/link5' },
  { text: 'Link 6', url: '/link6' },
  { text: 'Link 1', url: '/link1' },
  { text: 'Link 2', url: '/link2' },
  { text: 'Link 3', url: '/link3' },
  { text: 'Link 4', url: '/link4' },
  { text: 'Link 5', url: '/link5' },
  { text: 'Link 6', url: '/link6' },
    

  // Add more links as needed
];

const Home: React.FC = () => {
  return (
    <main>
      <NewsPaperBanner
        title="Newspaper Banner Title"
        subtitle="Newspaper Banner Subtitle"
        buttonText="Subscribe Now"
      />
      <NewsCategories categories={categories} />
      <ArticlesGapHorizonal />
      <LeadingArticle imageSrc={leadingArticle.imageSrc} headline={leadingArticle.headline} />
      {Object.entries(articlesByCategory).map(([category, articles]) => (
        <div>
        <Articles key={category} category={category} articles={articles} />
        </div>
      ))}
      <ArticlesGapHorizonal />
      <HeadlineLinksContainer headlineLinks={headlineLinks} />
      <ArticlesGapHorizonal />
      <ArticlesGapHorizonal />
      <NewsPaperFooter />
    </main>
  );
};

export default Home;
