import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'There are many variations of passages that really help many and a lot , Improving end distrusts instantly'
  },
  {
    title: 'Become the tended active',
    text: 'There are many variations of passage that really help many and a lot, Improving end distrusts instantly'
  },
  {
    title: 'Message or I am nothing',
    text: 'There are many variations of passages that really help many and a lot, Improving end distrusts instantly'
  },
  {
    title: 'Really boy law county',
    text: 'There are many variations of passages that really help many and a lot, Improving end distrusts instantly'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into the Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features;