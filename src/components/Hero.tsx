import { Button } from "@/components/ui/button";
import { LaunchIcon } from "@/lib/icons";

const HeroDummyProps = {
  title: "convocatoria residencias ttu 2024",
  subtitle: "Todo lo que debes saber de esta nueva versión",
  image: {
    src: "/images/hero.png",
    alt: "TTU",
  },
  ctaButton: {
    text: "Más información",
    link: "/",
    isExternal: true,
  },
};

export function Hero({
  title = HeroDummyProps.title,
  subtitle = HeroDummyProps.subtitle,
  ctaButton = HeroDummyProps.ctaButton,
}) {
  return (
    <div className="bg-[url('/test-bg.png')] bg-center bg-no-repeat bg-cover h-[700px] max-h-[70dvh] lg:max-h-[80dvh]">
      <div className="h-full flex flex-col justify-end items-center px-4 ">
        <div className="max-w-6xl mx-auto px-4 text-white w-full">
          <div className="w-10/12 lg:w-5/12 pb-12 lg:pb-32">
            <h1 className="font-headings-2 text-3xl lg:text-5xl lg:leading-[56px] whitespace-wrap ">
              {title}
            </h1>
            <p className="mt-6">{subtitle}</p>

            <Button asChild className="mt-6">
              <a href={ctaButton.link}>
                <div className="flex items-center gap-0.5">
                  {ctaButton.text}
                  <LaunchIcon size={20} className="mb-0.5" />
                </div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
