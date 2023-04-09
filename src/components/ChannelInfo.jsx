import { useYoutubeApi } from "./../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channels", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <div className="flex items-center my-4 mb-8">
      {url && <img className="w-10 h-10 rounded-full" src={url} alt={name} />}
      <p className="ml-2 text-lg font-medium">{name}</p>
    </div>
  );
}
