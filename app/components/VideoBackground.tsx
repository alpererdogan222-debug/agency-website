"use client";

import { useEffect } from "react";

const VIDEO_ID = "Hgg7M3kSqyE";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function VideoBackground() {
  useEffect(() => {
    // Tarayıcının medya oturum kontrollerini (|◄ ‖ ►| butonları) devre dışı bırak
    if (typeof navigator !== "undefined" && "mediaSession" in navigator) {
      const noop = () => {};
      try {
        navigator.mediaSession.setActionHandler("play", noop);
        navigator.mediaSession.setActionHandler("pause", noop);
        navigator.mediaSession.setActionHandler("previoustrack", noop);
        navigator.mediaSession.setActionHandler("nexttrack", noop);
        navigator.mediaSession.setActionHandler("seekbackward", noop);
        navigator.mediaSession.setActionHandler("seekforward", noop);
        // playbackState'i none yaparak tarayıcıya "bu medya kontrol edilebilir değil" sinyali ver
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (navigator.mediaSession as any).playbackState = "none";
      } catch {}
    }

    function initPlayer() {
      new window.YT.Player("yt-bg-player", {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          // loop ve playlist KALDIRILDI — playlist navigasyon butonlarının kaynağıydı
          mute: 1,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          cc_load_policy: 0,
          playsinline: 1,
          enablejsapi: 1,
        },
        events: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onReady: (e: any) => {
            e.target.mute();
            e.target.playVideo();
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onStateChange: (e: any) => {
            const cover = document.getElementById("yt-cover");
            if (e.data === 1) {
              // Oynatılıyor → YouTube animasyonu tamamen bitsin (1500ms), sonra örtüyü kaldır
              setTimeout(() => {
                if (cover) cover.style.opacity = "0";
              }, 1500);
            } else {
              // Oynatılmıyor → örtüyü hemen geri getir
              if (cover) cover.style.opacity = "1";
              if (e.data === 0) {
                e.target.seekTo(0);
                e.target.playVideo();
              } else if (e.data === 2) {
                e.target.playVideo();
              }
            }
          },
        },
      });
    }

    if (typeof window !== "undefined") {
      if (window.YT?.Player) {
        initPlayer();
      } else {
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
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030810]">
        <div
          id="yt-bg-wrapper"
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: "max(100vw, 177.78vh)",
            height: "max(100vh, 56.25vw)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <div id="yt-bg-player" className="w-full h-full" />
        </div>

        {/* Tonal overlay */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 2,
            background:
              "linear-gradient(135deg, rgba(10,20,60,0.38) 0%, rgba(5,10,30,0.22) 50%, rgba(20,10,50,0.30) 100%)",
          }}
        />

        {/* Opak örtü — YouTube buton animasyonlarını tamamen gizler, sadece temiz oynatma anında şeffaflaşır */}
        <div
          id="yt-cover"
          className="absolute inset-0"
          style={{
            zIndex: 3,
            background: "#030810",
            opacity: 1,
            transition: "opacity 1.2s ease",
            pointerEvents: "none",
          }}
        />

        {/* CSS fallback gradient */}
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

      {/*
        z-index: -1 olan bu div, video iframe (-z-10) ile sayfa içeriği (z-index 0+) arasında durur.
        Fare bu div üzerindeyken Chrome, alttaki iframe'i değil bu div'i hover hedefi olarak görür.
        Bu sayede Chrome'un medya taşıma katmanı (|◄ ‖ ►| butonları) hiçbir zaman tetiklenmez.
      */}
      <div className="fixed inset-0" style={{ zIndex: -1, pointerEvents: "all" }} />
    </>
  );
}
