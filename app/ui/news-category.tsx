import React, { FC } from 'react';

interface NewsCategoryProps {
  category: string;
}

const NewsCategory: FC<NewsCategoryProps> = ({ category }) => {
  return (
    <li className="text-lg font-semibold text-gray-800">
      {category}
    </li>
  );
};

export default NewsCategory;
