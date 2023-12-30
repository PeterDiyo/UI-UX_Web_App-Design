import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgUrl={blog01} date="Dec 10, 2023" title="GPT-3 and openAI is the future, Let us explore how it is?"/>
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article imgUrl={blog02} date="Dec 10, 2023" title="GPT-3 and openAI is the future, Let us explore how it is?" />
          <Article imgUrl={blog03} date="Dec 10, 2023" title="GPT-3 and openAI is the future, Let us explore how it is?" />
          <Article imgUrl={blog04} date="Dec 10, 2023" title="GPT-3 and openAI is the future, Let us explore how it is?" />
          <Article imgUrl={blog05} date="Dec 10, 2023" title="GPT-3 and openAI is the future, Let us explore how it is?" />
      </div>
     </div>
    </div>
  )
}

export default Blog;
