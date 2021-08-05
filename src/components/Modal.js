import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { VideoContext } from '../context/VideoContext';
import { formatDate } from '../helpers/formatDate';
import { formatNumbers } from '../helpers/formatNumbers';

const ModalWrapper = styled.article`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
`;

const CardVideo = styled.div`
  max-width: 350px;
  max-height: auto;
  position: relative;

  @media only screen and (min-width: 750px) {
    max-width: 500px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 800px;
  }
`;

const CardVideoBody = styled.div`
  padding: 1rem;
  background-color: #fff;
  height: 300px;
  overflow-y: auto;
`;

const ViewStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TileVideo = styled.h2`
  ${props =>
    props.wordUp &&
    css`
      font-size: 1.25rem;
      font-weight: bolder;
    `}
`;

const ParrDescription = styled.p`
  color: #979696;
  margin-top: 0.5rem;
`;

const SpanDate = styled.span`
  font-style: oblique;
`;

const modalCloseStyle = {
  position: 'absolute',
  top: '-2rem',
  right: '0',
  padding: '0 0.5rem',
  borderRadius: '100%',
};

const isOpenStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Modal = ({ id, isOpen, closeModal }) => {
  const handleModalContainerClick = e => e.stopPropagation();

  const { selectVideo, setSelectVideo } = useContext(VideoContext);

  const url = selectVideo.id;

  const modRender =
    Object.keys(selectVideo).length > 0 ? (
      <ModalWrapper
        style={isOpen && isOpenStyles}
        onClick={() => {
          closeModal();
          setSelectVideo({});
        }}
      >
        <CardVideo
          className="modal-container"
          onClick={handleModalContainerClick}
        >
          <button
            className="modal-close bg-indigo-600"
            style={modalCloseStyle}
            onClick={() => {
              closeModal();
              setSelectVideo({});
            }}
          >
            X
          </button>
          <iframe
            style={{ width: '100%', height: '350px' }}
            src={`//www.youtube.com/embed/${url}`}
            title={selectVideo.snippet.title}
            frameBorder="0"
            allow="autoplay encrypted-media"
          ></iframe>
          <CardVideoBody>
            <TileVideo wordUp>{selectVideo.snippet.title}</TileVideo>
            <SpanDate SpanDate>
              {formatDate(selectVideo.snippet.publishedAt)}
            </SpanDate>
            <ViewStats>
              <span>👀 {formatNumbers(selectVideo.statistics.viewCount)}</span>
              <span>👍 {formatNumbers(selectVideo.statistics.likeCount)}</span>
            </ViewStats>
            <h3 style={{ fontWeight: 'bold' }}>
              {selectVideo.snippet.channelTitle}
            </h3>
            <ParrDescription>{selectVideo.snippet.description}</ParrDescription>
          </CardVideoBody>
        </CardVideo>
      </ModalWrapper>
    ) : null;

  return modRender;
};

export default Modal;
