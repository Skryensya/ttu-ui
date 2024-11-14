import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { YoutubeEmbed } from "@/components/YoutubeEmbed"; // Adjust the import path as necessary
import { ReactNode } from "react";
import DOMPurify from "dompurify";
import { LaunchIcon } from "@/lib/icons";

export type ButtonCtaType = {
  label: string;
  url?: string;
  isExternalUrl: boolean;
  icon?: ReactNode;
  iconPosition: "left" | "right";
};

export type VideoSectionProps = {
  videoUrl?: string;
  videoTitle?: string;
  title?: string;
  description?: string; // Rich HTML input content
  buttonCTA?: ButtonCtaType;
};

export const VideoSection = ({
  videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  videoTitle = "titulo del video",
  title = "radiovisual",
  description = `
    <p><strong>¡Presentamos Radiovisual!</strong></p>
    <p>Espacio dedicado a la discusión y difusión en torno a las artes, ciencias y tecnologías desde el Biobío.</p>
    <p>Esta temporada, exhibiremos 12 capítulos con distint_s invitad_s de la región, quienes compartirán sus conocimientos y experiencias junto a nuestr_ presentador_ <a href="https://www.instagram.com/robot.infame" target="_blank" rel="noopener noreferrer">@robot.infame</a></p>
  `,
  buttonCTA = {
    label: "Más información",
    url: "#", // Default URL in case none is provided
    isExternalUrl: false, // Default to internal link
    icon: <LaunchIcon className="mb-1" />, // Default icon as LaunchIcon component
    iconPosition: "right", // Default icon position
  },
}: VideoSectionProps) => {
  const handleButtonClick = () => {
    if (buttonCTA?.url) {
      if (buttonCTA.isExternalUrl) {
        window.open(buttonCTA.url, "_blank");
      } else {
        window.location.href = buttonCTA.url;
      }
    }
  };

  return (
    <div className="bg-black py-12 mt-12 text-white">
      <div className="px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-5 w-full gap-16">
          <div className="col-span-2">
            <p className="text-4xl font-headings uppercase">{title}</p>
            {description && (
              <div
                className="mt-4 rich-text-content text-base"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description),
                }}
              />
            )}
            {buttonCTA && (
              <Button
                variant="default"
                size="default"
                onClick={handleButtonClick}
                className="!text-sm flex items-center !bg-black !text-white border !border-white"
              >
                {buttonCTA.icon &&
                  buttonCTA.iconPosition === "left" &&
                  buttonCTA.icon}
                {buttonCTA.label}
                {buttonCTA.icon &&
                  buttonCTA.iconPosition === "right" &&
                  buttonCTA.icon}
              </Button>
            )}
          </div>
          <div className="col-span-3">
            {videoUrl && (
              <YoutubeEmbed videoUrl={videoUrl} title={videoTitle} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
