import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);

//기본값 en_US
export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}
