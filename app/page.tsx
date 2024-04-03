"use client"

import React from 'react';
import NewsPaperBanner from './ui/newspaper-banner';
import NewsCategories from './ui/news-categories';
import Articles from './ui/articles';
import LeadingArticle from './ui/leading-article';
import ArticlesGapHorizonal from './ui/articles-gap-horizontal';
import NewsPaperFooter from './ui/newspaper-footer';
import HeadlineLinksContainer from './ui/headline-links-container';
// https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side

import { useState, useEffect } from 'react'
 
/*
function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://9cw9le5m82.execute-api.ap-southeast-2.amazonaws.com')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 
  data.sort((a, b) => a.category.localeCompare(b.category));

  console.log("data:", data);
  
  // Extract unique categories
  const categories = [...new Set(data.map(item => item.category))];
  // Filter records with the category "New Zealand"
  const newZealandRecords = data.filter(record => record.category === "New Zealand");

  // Print records with the category "New Zealand"
  console.log("Records with the category 'New Zealand':", newZealandRecords);

  // Print unique categories
  console.log("categories:", categories);
  // Convert data into the specified structure using map and reduce
  const categorizedData = data.reduce((acc, curr) => {
    const { category, ...rest } = curr;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(rest);
    return acc;
  }, {});

  // Print the resulting structure
  console.log('Categorized data:', categorizedData); 


  return (
    <div>
      <h1>hello {data[0]['category']}</h1>
      <p></p>
    </div>
  )
}
*/


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

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://9cw9le5m82.execute-api.ap-southeast-2.amazonaws.com')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  data.sort((a, b) => a.category.localeCompare(b.category));

  console.log("data:", data);
  
  // Extract unique categories
  const categories = [...new Set(data.map(item => item.category))];
  // Filter records with the category "New Zealand"
  const newZealandRecords = data.filter(record => record.category === "New Zealand");

  // Print records with the category "New Zealand"
  console.log("Records with the category 'New Zealand':", newZealandRecords);

  // Print unique categories
  console.log("categories:", categories);
  // Convert data into the specified structure using map and reduce
  const articlesByCategory = data.reduce((acc, curr) => {
    const { category, ...rest } = curr;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(rest);
    return acc;
  }, {});

  // Print the resulting structure
  console.log('articles by category', articlesByCategory); 

  const leadingArticle = { 
    imageSrc: articlesByCategory['New Zealand'][0]['images'][0], 
    headline: articlesByCategory['New Zealand'][0]['headline'],
    uri: articlesByCategory['New Zealand'][0]['uri'],
  }; // Example leading article   
  
  return (
    <main>
      <NewsPaperBanner
        title="The Online News"
        subtitle="News from anywhere"
      />
      <ArticlesGapHorizonal />
      <LeadingArticle imageSrc={leadingArticle.imageSrc} headline={leadingArticle.headline} uri={leadingArticle.uri} />
      {Object.entries(articlesByCategory).map(([category, articles]) => (
        <div>
        <Articles key={category} category={category} articles={articles} />
        </div>
      ))}
      <ArticlesGapHorizonal />
      <ArticlesGapHorizonal />
      <NewsPaperFooter />
    </main>
  );
};

export default Home;
