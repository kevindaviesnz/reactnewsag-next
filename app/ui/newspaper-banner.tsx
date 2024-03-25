import React, { FC } from 'react';

interface NewsPaperBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const NewsPaperBanner: FC<NewsPaperBannerProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-300">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsPaperBanner;
