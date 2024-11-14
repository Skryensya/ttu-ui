import "@justinribeiro/lite-youtube";
import React from "react";

export const YoutubeEmbed = ({ videoUrl, title }) => {
  const videoId = getYouTubeVideoId(videoUrl);

  return (
    <div className="rounded-lg overflow-hidden border border-gray-600">
      {videoId &&
        React.createElement(
          "lite-youtube",
          {
            videoid: videoId,
            title: title || "YouTube Video",
            posterquality: "maxresdefault",
          },
          React.createElement(
            "a",
            {
              className: "lite-youtube-fallback",
              href: `https://www.youtube.com/watch?v=${videoId}`,
              target: "_blank",
              rel: "noopener noreferrer",
            },
            `Ver en YouTube: ${title || "YouTube Video"}`
          )
        )}
    </div>
  );
};

function getYouTubeVideoId(url) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
