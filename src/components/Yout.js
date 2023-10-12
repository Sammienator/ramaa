import React from 'react';

const YouTubeVideoComponent = () => {


  return (
    <div className="flex flex-col items-center">
     
      <iframe  className="justify-center p-4  m-4" width="560" height="315" src="https://www.youtube.com/embed/B6KkT4jfmAA?si=3SPnYPsnyE09rxsi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 
      <div className="mt-4">
        <h3 className="text-lg font-bold">Tabasamu Music Video.</h3>
        <p className="text-gray-600">Watch and stream my music above!</p>
      </div>
    </div>
  );
};

export default YouTubeVideoComponent;
