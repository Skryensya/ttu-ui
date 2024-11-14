import "@justinribeiro/lite-youtube";
export const YoutubeEmbed = ({
  videoUrl,
  title,
}: {
  videoUrl: string;
  title?: string;
}) => {
  const videoId = getYouTubeVideoId(videoUrl);

  return (
    <div className="rounded-lg overflow-hidden border border-gray-600">
      {videoId && (
        // @ts-expect-error LiteYouTube is not recognized as a JSX component by TypeScript
        <lite-youtube
          videoid={videoId}
          title={title || "YouTube Video"}
          posterquality="maxresdefault"
        >
          <a
            className="lite-youtube-fallback"
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en YouTube: "{title || "YouTube Video"}"
          </a>
        </lite-youtube>
      )}
    </div>
  );
};
function getYouTubeVideoId(url: string): string | null {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
