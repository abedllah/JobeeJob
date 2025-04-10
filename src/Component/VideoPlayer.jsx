import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ url, title, width = "100%", height = "400px" }) => {
  // Fonction pour extraire l'ID YouTube de différentes URL formats
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(url);

  if (!videoId) return <div className="bg-gray-100 p-4 rounded-lg text-red-500">
    URL vidéo non valide
  </div>;

  return (
    <div className="video-player my-4 rounded-lg overflow-hidden shadow-lg">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
          title={title || "Video embed"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          style={{ width, height }}
          loading="lazy"
        />
      </div>
      {title && (
        <div className="bg-white p-3 border-t border-gray-200">
          <h3 className="font-medium text-gray-800">{title}</h3>
        </div>
      )}
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default VideoPlayer;