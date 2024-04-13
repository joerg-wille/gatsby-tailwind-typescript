import * as React from 'react';
import { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/global.css';  // Ensure this imports Tailwind CSS

const IndexPage = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }
    // Simulate fetching data
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 1500);
  };

  const loadMoreItems = () => {
    // Simulate fetching more data
    setTimeout(() => {
      setItems(prevItems => [...prevItems, ...Array.from({ length: 20 })]);
    }, 1000);
  };

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) { // Checks if the scrollbar is at the bottom
      loadMoreItems();
    }
  };

  return (
    <div className="bg-fixed">
      <StaticImage
        src="../images/Hintergrundbild.jpg"
        alt="Renovated Town House"
        layout="fullWidth"
        style={{ position: "absolute", height: "100vh", width: "100%" }}
        className="opacity-50"
      />
      <div className="infinite-scroll-panel" onScroll={handleScroll}>
        {items.map((_, index) => (
          <div key={index} className="content-item">
            Content #{index + 1} - Details about the condo...
            <div>some more text<br /> </div>
            <div>some more text<br /> </div>
            <div>some more text<br /> </div>
            <div>some more text<br /> </div>
          </div>
        ))}
      </div>
      {/* Content here */}
    </div>
  );
};

export default IndexPage;
