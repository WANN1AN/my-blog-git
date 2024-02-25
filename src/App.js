import React, { useState } from 'react';
import './App.css';

function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: '第一篇', content: '第一篇博客的内容。' },
    { id: 2, title: '第二篇', content: '第二篇博客的内容。' }
  ]);

  const [selectedArticle, setSelectedArticle] = useState(null);
  const [comment, setComment] = useState('');

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      const updatedArticles = articles.map(article => {
        if (article.id === selectedArticle.id) {
          return { ...article, comments: [...(article.comments || []), comment] };
        }
        return article;
      });
      setArticles(updatedArticles);
      setComment('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my blog!</h1>
      </header>
      <div className="container">
        <div className="articles">
          <h2>我的博客</h2>
          <ul>
            {articles.map(article => (
              <li key={article.id} onClick={() => handleArticleClick(article)}>
                {article.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="article-details">
          {selectedArticle && (
            <div>
              <h2>{selectedArticle.title}</h2>
              <p>{selectedArticle.content}</p>
              <h3>评论</h3>
              <ul>
                {selectedArticle.comments &&
                  selectedArticle.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
              </ul>
              <textarea
                rows="4"
                cols="50"
                placeholder="请写下你的评论"
                value={comment}
                onChange={handleCommentChange}
              ></textarea>
              <br/><button onClick={handleAddComment}>提交</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
