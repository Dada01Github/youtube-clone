import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  return (
    <div>
      <h1>搜索结果</h1>
      <p>搜索查询: {query}</p>
      {/* 在这里添加显示搜索结果的逻辑 */}
    </div>
  );
}

export default SearchResults;