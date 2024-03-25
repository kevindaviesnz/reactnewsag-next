import React from 'react';

const HeadlineLinksContainer = ({ headlineLinks }) => {
  // Split the headline links array into two equal parts for two columns
  const middleIndex = Math.ceil(headlineLinks.length / 2);
  const firstColumnLinks = headlineLinks.slice(0, middleIndex);
  const secondColumnLinks = headlineLinks.slice(middleIndex);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4">
        {/* Render links for the first column */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Column 1</h2>
          <ul>
            {firstColumnLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="text-blue-500 hover:underline">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Render links for the second column */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Column 2</h2>
          <ul>
            {secondColumnLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="text-blue-500 hover:underline">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeadlineLinksContainer;
