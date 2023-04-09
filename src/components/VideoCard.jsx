import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const isList = type === "list";

  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
      className={isList ? "flex gap-1 m-2" : ""}
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
