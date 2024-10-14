import box from "../../styles/components/diaryEditer/editBox.module.css";
import styles from "../../styles/components/diaryEditer/editMusic.module.css";

import { useEffect } from "react";

export default function EditMusic({
  musicLink,
  setMusicLink,
  musicId,
  setMusicId,
  musicTitle,
  setMusicTitle,
}) {
  const youtubeApiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  const handleMusicLink = (e) => {
    setMusicTitle("Unknown Title");
    setMusicLink(e.target.value);
  };

  const handleMusicTitle = (e) => {
    setMusicTitle(e.target.value);
  };

  useEffect(() => {
    const reg =
      /(https?:\/\/)?(((m|www)\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
    const match = musicLink.match(reg);
    const videoIdFromUrl = match ? match[8] : musicLink;
    setMusicId(videoIdFromUrl);

    const fetchVideoTitle = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIdFromUrl}&key=${youtubeApiKey}`
        );
        const data = await response.json();
        setMusicTitle(data.items[0].snippet.title);
      } catch (error) {
        console.error("Error fetching video title:", error);
        setMusicTitle("Unknown Title");
        setMusicId("");
      }
    };

    if (videoIdFromUrl && musicTitle === "Unknown Title") {
      fetchVideoTitle();
    }
  }, [musicLink]);

  return (
    <div className={box.container}>
      <p className={box.title}>MUSIC</p>
      <textarea
        className={styles.textarea}
        placeholder="YouTube 링크를 넣어주세요!"
        onInput={handleMusicLink}
        value={musicLink}
      />
      {musicLink && (
        <>
          <p className={styles.title2}>MUSIC TITLE</p>
          <textarea
            className={styles.editTitle}
            value={musicTitle}
            onInput={handleMusicTitle}
          />
        </>
      )}
    </div>
  );
}
