import HeartIcon from '../../assets/icons/heart.svg';
import PlayIcon from '../../assets/icons/play.svg';
import DotsIcon from '../../assets/icons/dots.svg';

export function CoverImage({ coverImage }) {
  return (
    <div className="image-with-icons-wrapper">
      <img src={coverImage} alt="Main Image" className="main-image" />

      <div className="icon-container">
        <button type="button" className="icon-button heart-button">
          <img src={HeartIcon} alt="Like Icon" className="icon heart-icon" />
        </button>

        <button type="button" className="icon-button play-button">
          <img src={PlayIcon}  alt="Play Icon" className="icon play-icon" />
        </button>

        <button type="button" className="icon-button dots-button">
          <img src={DotsIcon} alt="Dots Icon" className="icon dots-icon" />
        </button>
      </div>
    </div>
  );
}
