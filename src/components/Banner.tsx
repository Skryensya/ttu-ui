import { Button } from "./ui/button";
import { useState } from "react";
import { X } from "lucide-react";

export type ButtonCtaType = {
  label: string;
  url?: string;
  isExternalUrl: boolean;
};

export type BannerProps = {
  text?: string;
  buttonCTA?: ButtonCtaType;
  closeable?: boolean;
};

const defaultBannerProps: BannerProps = {
  text: "Conoce más sobre nuestro festival",
  closeable: false,
  buttonCTA: {
    label: "Ver más",
    url: "#",
    isExternalUrl: false,
  },
};

export function Banner({
  text = defaultBannerProps.text,
  buttonCTA = defaultBannerProps.buttonCTA,
  closeable = defaultBannerProps.closeable,
}: BannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleButtonClick = () => {
    if (buttonCTA?.url) {
      if (buttonCTA.isExternalUrl) {
        window.open(buttonCTA.url, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = buttonCTA.url;
      }
    }
  };

  return (
    <div className="bg-black text-white p-4 max-h-12 h-full flex items-center">
      <div className="max-w-6xl mx-auto w-full relative flex items-center justify-center">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm uppercase pb-0 mb-0  mt-0.5">{text}</p>
          {buttonCTA && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleButtonClick}
              className="!text-sm"
            >
              {buttonCTA.label}
            </Button>
          )}
        </div>
        {closeable && (
          <Button
            variant="ghost"
            size={"sm"}
            onClick={() => setIsVisible(false)}
            className="absolute top-0 right-0 !aspect-square"
          >
            <X size={20} />
          </Button>
        )}
      </div>
    </div>
  );
}
