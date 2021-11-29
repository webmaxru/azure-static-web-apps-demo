/* eslint-disable no-unused-vars */
import './Home.css';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';


function Home(props) {

  this.url = `/api/feedback`;
  this.requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };


  async function sendFeedback(isCorrect) {
    this.requestOptions.body = JSON.stringify({
      bpm: this.props.bpm,
      type: this.props.type,
      isCorrect: isCorrect,
    });

    try {
      // Let's assume that the request is successful
      toast.success('Sending your feedback. Thanks!');

      let response = await fetch(this.url, this.requestOptions);

      ReactGA.event('share', {
        method: 'API',
        content_type: 'feedback',
        item_id: isCorrect,
      });

      if (!response.ok) {
        console.error(`HTTP error. Status: ${response.status}`);
        throw new Error();
      }
    } catch (err) {
      console.error(`${err.name}: ${err.message}`);
    }
  }

  useEffect(() => {
    ReactGA.event('select_content', {
      content_type: 'mode',
      item_id: 'realtime',
    });
  }, []);


  return (
    <main className="content">

    </main>
  );
}

export default Home;
