import React, { useState, useContext } from 'react';
import { VideoContext } from '../context/VideoContext';
import './Modal.css';

const Modal = ({ id, isOpen, closeModal }) => {
  const handleModalContainerClick = e => e.stopPropagation();

  const { selectVideo, setSelectVideo } = useContext(VideoContext);

  // const { channelTitle } = selectVideo.snippet;
  // const { description } = selectVideo.snippet;
  // const { viewCount } = selectVideo.statistics;
  // const { likeCount } = selectVideo.statistics;
  const url = false;

  const modRender =
    Object.keys(selectVideo).length > 0 ? (
      <article
        className={`modal ${isOpen && 'is-open'}`}
        onClick={() => {
          closeModal();
          setSelectVideo({});
        }}
      >
        <div className="modal-container" onClick={handleModalContainerClick}>
          <button
            className="modal-close bg-indigo-600"
            onClick={() => {
              closeModal();
              setSelectVideo({});
            }}
          >
            X
          </button>
          <iframe src={`//www.youtube.com/embed/${url}`}></iframe>
          <p>
            {selectVideo.snippet.title} {selectVideo.snippet.channelTitle}
          </p>
        </div>
      </article>
    ) : null;

  return modRender;
};

export default Modal;
