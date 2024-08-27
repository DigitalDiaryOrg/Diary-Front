"use client";
import styles from "../../styles/components/diaryViewer/diaryMusic.module.css";

import { LuLoader } from "react-icons/lu";
import { IoMdPlay, IoMdPause } from "react-icons/io";

import { useState } from "react";
import YouTube from "react-youtube";

declare const window: {
  YT: {
    Player: new (id: string, options: object) => any;
    PlayerState: {
      UNSTARTED: number;
      ENDED: number;
      PLAYING: number;
      PAUSED: number;
      BUFFERING: number;
      CUED: number;
    };
  };
};

export default function DiaryMusic({ musicId, musicTitle }) {
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const onReady = (event: any) => {
    setPlayer(event.target);
    setIsReady(true);
  };

  const onStateChange = (event: any) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }
  };

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <YouTube
        videoId={musicId}
        onReady={onReady}
        onStateChange={onStateChange}
        style={{ display: "none" }}
        opts={opts}
      />

      <div className={styles.player}>
        {!isReady && (
          <>
            <LuLoader />
            <span className={styles.music_title}> Loading…</span>
          </>
        )}
        {isReady && (
          <>
            {isPlaying ? (
              <IoMdPause onClick={handlePlayPause} className={styles.icon} />
            ) : (
              <IoMdPlay onClick={handlePlayPause} className={styles.icon} />
            )}
            <span className={styles.musicTitle}>{musicTitle}</span>
          </>
        )}
      </div>
    </>
  );
}
