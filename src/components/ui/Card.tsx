import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
  altText?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  imageSrc,
  altText,
  children,
}: CardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white">
      {imageSrc && (
        <div className="mb-4">
          <Image
            src={imageSrc}
            alt={altText || "Card image"}
            width={300}
            height={200}
            className="w-full rounded-lg"
          />
        </div>
      )}
      <h3 className="text-lg font-bold text-hvblue-500 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
