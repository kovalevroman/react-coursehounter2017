import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './ArticleList';
import {articles} from './fixtures'


ReactDOM.render(<ArticleList articleList={articles}/>, document.getElementById('root'));
