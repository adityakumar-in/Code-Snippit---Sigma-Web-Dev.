// npm install --save react-infinite-scroll-component

import { useState, React } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

const App = () => {
  let limit = 500
  let loadData = 35;
  const [items, setItems] = useState(Array.from({ length: loadData }));
  const [hasMore, setHasMore] = useState(true);
  

  const fetchMoreData = () => {
    if(items.length>=limit) { // If limit exceeds then make hasMore false
      setHasMore(false);
      return;
    }

    setTimeout(() => { // Append 35 items to the previous Items after every 1.5 second
      setItems(prevItems => prevItems.concat(Array.from({ length: loadData })))
    }, 1500);
  };

  return (
    <>
      <h1>Example: Infinite Scrollbar</h1>
          <hr />
          {/* You need to enclose component inside InfiniteScroll to Enable infinite scroll, and pass it's required attribute and use map to loop through the data */}
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData} // Funcition that'll be called when we reach the end of the InfiniteScroll to load another set of data
            hasMore={hasMore}
            loader={<h4>Loading...</h4>} // Set Custome Loading Bar
          >
            {items.map((i, index) => (
              <div key={index}>
                div - #{index}
              </div>
            ))}
          </InfiniteScroll>
    </>
  )
}

export default App