import React, { FC } from 'react';

interface NewsCategoryProps {
  category: string;
}

const NewsCategory: FC<NewsCategoryProps> = ({ category }) => {
  return (
    <li className="text-lg font-semibold text-gray-800">
      <a href="#" className="hover:text-gray-600">{category}</a>
    </li>
  );
};

export default NewsCategory;
