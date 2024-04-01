import React, { FC } from 'react';

interface NewsCategoriesProps {
  categories: string[];
}

const NewsCategories: FC<NewsCategoriesProps> = ({ categories }) => {
  return (
    <nav className="bg-gray-200 py-4 text-center">
      <div className="container mx-auto px-4">
        <ul className="inline-flex space-x-4">
          {categories.map(category => (
            <li key={category} className="text-lg font-semibold text-gray-800">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NewsCategories;
