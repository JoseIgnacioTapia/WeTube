const Video = ({ title, dateAdded, channel, thumbnails, description }) => {
  return (
    <div>
      <img src={thumbnails.url} alt="" />
      <h2>{title}</h2>
      <small>{dateAdded}</small>
      <h3>{channel}</h3>
      <p>{description}</p>
      -------------------
    </div>
  );
};

export default Video;
