import { formatDate } from '../helpers/formatDate';

const Video = ({ video }) => {
  let title = video.snippet.title;
  let dateAdded = video.snippet.publishedAt;
  let channel = video.snippet.channelTitle;
  let thumbnails = video.snippet.thumbnails.medium;
  let description = video.snippet.description;

  const dateFormated = formatDate(dateAdded);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={thumbnails.url} alt={title} />
      <div className="px-4 py-2">
        <h2 className="font-bold">{title}</h2>
        <small className="italic text-sm">{dateFormated}</small>
        <div className="flex justify-between items-center	my-4">
          <h3 className="text-sm	 py-2">{channel}</h3>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Watch Video
          </button>
        </div>
        {/* 
        <p className="text-base text-gray-500">{description}</p> */}
      </div>
    </div>
  );
};

export default Video;

// { title, dateAdded, channel, thumbnails, description }

// title={video.snippet.title}
// dateAdded={video.snippet.publishedAt}
// channel={video.snippet.channelTitle}
// thumbnails={video.snippet.thumbnails.medium}
// description={video.snippet.description}
