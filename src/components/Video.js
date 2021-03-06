import { useContext } from 'react';
import Modal from './Modal';
import { useModal } from '../hooks/useModal';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import { VideoContext } from '../context/VideoContext';

TimeAgo.addDefaultLocale(en);

const Video = ({ video }) => {
  let title = video.snippet.title;
  let dateAdded = video.snippet.publishedAt;
  let channel = video.snippet.channelTitle;
  let thumbnails = video.snippet.thumbnails.medium;
  let id = video.id.videoId;

  // const dateFormated = formatDate(dateAdded);
  const timeAgo = new TimeAgo('en-us');
  const date = new Date(dateAdded);

  const [isOpen, openModal, closeModal] = useModal(false);

  const { idVideo, setIdVideo, setConsulting } = useContext(VideoContext);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={thumbnails.url} alt={title} />
      <div className="px-4 py-2">
        <h2 className="font-bold">{title}</h2>
        <small className="italic text-sm font-bold">
          {timeAgo.format(date)}
        </small>
        <div className="flex justify-between items-center	my-4">
          <h3 className="text-sm	 py-2">{channel}</h3>
          <button
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-indigo-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            onClick={() => {
              openModal();
              setIdVideo(id);
              setConsulting(true);
            }}
          >
            Watch Video
          </button>
        </div>
      </div>
      {isOpen && (
        <Modal
          id={id}
          isOpen={isOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Video;
