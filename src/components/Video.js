import { formatDate } from '../helpers/formatDate';

const Video = ({ title, dateAdded, channel, thumbnails, description }) => {
  const dateFormated = formatDate(dateAdded);
  console.log(typeof dateFormated);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={thumbnails.url} alt={title} />
      <div className="px-4 py-2">
        <h2 className="font-bold">{title}</h2>
        <small className="italic text-sm">{dateFormated}</small>
        <h3 className="text-sm	 py-2">{channel}</h3>
        <p className="text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Video;
