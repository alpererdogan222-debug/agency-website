"use client";

import { useEffect } from "react";

// Ücretsiz, telif hakkı olmayan teknoloji arka plan videoları (YouTube)
// Hgg7M3kSqyE → Technology Looped Background 4K
// 84G5TygFVeY → Technology Background 4K Loop
const PLAYLIST = "Hgg7M3kSqyE,84G5TygFVeY";
const FIRST_VIDEO = "Hgg7M3kSqyE";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function VideoBackground() {
  useEffect(() => {
    function initPlayer() {
      new window.YT.Player("yt-bg-player", {
        videoId: FIRST_VIDEO,
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          loop: 1,
          playlist: PLAYLIST,
          mute: 1,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          cc_load_policy: 0,
          playsinline: 1,
        },
        events: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onReady: (e: any) => {
            e.target.mute();
            e.target.playVideo();
          },
        },
      });
    }

    if (typeof window !== "undefined") {
      if (window.YT?.Player) {
        initPlayer();
      } else {
        // API henüz yüklenmemişse scripti ekle
        if (!document.getElementById("yt-api-script")) {
          const tag = document.createElement("script");
          tag.id = "yt-api-script";
          tag.src = "https://www.youtube.com/iframe_api";
          document.head.appendChild(tag);
        }
        window.onYouTubeIframeAPIReady = initPlayer;
      }
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030810]">
      {/* ── YouTube video — 16:9 aspect ratio, tam ekranı kaplar ── */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "max(100vw, 177.78vh)",
          height: "max(100vh, 56.25vw)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      >
        <div id="yt-bg-player" className="w-full h-full" />
      </div>

      {/* ── Koyu overlay — metin okunabilirliği ── */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ── CSS animasyon fallback — YouTube yüklenene kadar görünür ── */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(-45deg, #040d24, #0d2257, #0a0a2e, #1a0a4e, #0d3a6b, #050e1f)",
          backgroundSize: "500% 500%",
          animation: "gradient-flow 10s ease infinite",
        }}
      />
    </div>
  );
}
