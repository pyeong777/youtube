import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
      className=""
    >
      <div>
        <img className="w-full" src={thumbnails.medium.url} alt={title} />
        <div>
          <p className="my-2 font-semibold line-clamp-2">{title}</p>
          <p className="text-sm opacity-80">{channelTitle}</p>
          <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
        </div>
      </div>
    </li>
  );
}
