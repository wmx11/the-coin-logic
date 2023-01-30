import Image from 'next/image';
import { useState } from 'react';

type ImageProps = {
  image: string;
  width: number;
  height: number;
  alt: string;
};

export const ImageWithPlaceholder = ({ image, width, height, alt }: ImageProps) => {
  const [src, setSrc] = useState<string | undefined>(image);
  
  return src ? (
    <Image
      className="rounded-md"
      src={src}
      alt={alt}
      height={height}
      width={width}
      style={{ verticalAlign: 'middle' }}
      layout="responsive"
      onError={() => {
        setSrc(undefined);
      }}
    />
  ) : (
    <div className="bg-slate-200" style={{height }}></div>
  );
};

export const LargeImage = ({ image, alt }: { image: string; alt: string }) => {
  return <ImageWithPlaceholder image={image} alt={alt} width={800} height={450} />;
};
