import { FC } from "react";
import { cn } from "@/lib/utils"; // Ensure shadcn/ui has the cn utility or similar
import { badgeVariants } from "@/components/ui/badge";

export type ImageProps = {
  id?: number;
  url?: string;
  alt?: string;
  title?: string;
  width?: number;
  height?: number;
  description?: string;
  tags?: string[];
};

export type Tag = {
  label: string;
  url: string;
};

export type CardProps = {
  image?: ImageProps;
  title?: string;
  dateOfPublish?: Date;
  tags?: Tag[];
  url: string;
  isExternalUrl: boolean;
};

const defaultCardProps: CardProps = {
  image: {
    id: undefined,
    url: "https://dummyimage.com/600x400/eaeaea/0c0c0d.jpg",
    alt: "imagen de prueba",
    title: "",
    width: 0,
    height: 0,
    description: "",
    tags: [],
  },
  title: "",
  dateOfPublish: new Date(),
  tags: [],
  url: "#",
  isExternalUrl: false,
};

export const Card: FC<CardProps> = ({
  image = defaultCardProps.image,
  title = defaultCardProps.title,
  dateOfPublish = defaultCardProps.dateOfPublish,
  tags = defaultCardProps.tags,
  url = defaultCardProps.url,
  isExternalUrl = defaultCardProps.isExternalUrl,
}) => {
  const formattedDate = dateOfPublish ? `${dateOfPublish.getDate()} ${dateOfPublish.toLocaleString(
    "es-CL",
    { month: "long" }
  )} ${dateOfPublish.getFullYear()}` : '';

  return (
    <div className="col-span-12 md:col-span-4">
      <a
        href={url}
        target={isExternalUrl ? "_blank" : "_self"}
        className={cn("block w-full overflow-hidden rounded-lg aspect-auto")}
      >
        {image?.url && (
          <img
            src={image.url}
            alt={image.alt || "Image"}
            width={image.width || 400}
            height={image.height || 400}
            className="object-cover w-full h-full"
          />
        )}
      </a>
      <div className="pt-6">
        <a
          href={url}
          target={isExternalUrl ? "_blank" : "_self"}
          className="group"
        >
          <p className="text-xl font-headings group-hover:underline">{title}</p>
        </a>
        <p className="text-sm text-gray-500 my-4">{formattedDate}</p>
        <div className="flex flex-wrap mt-2 gap-2">
          {tags?.map((tag, index) => (
            <a
              key={index}
              href={tag.url}
              className={badgeVariants({ variant: "outline" })}
            >
              {tag.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
