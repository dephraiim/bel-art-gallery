import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ImagePage() {
  const router = useRouter();
  const { data } = router.query;
  const image = JSON.parse(data);
  const imageSrc = image.webformatURL;
  const imageAlt = image.tags;
  const imageHeight = image.webformatHeight;
  const imageWidth = image.webformatWidth;

  return (
    <main>
      <h1>{imageAlt}</h1>
      <Image src={imageSrc} alt={imageAlt} height={imageHeight} width={imageWidth} />

      <div className="link">
        <Link href="/">
          <a>Go Back Home</a>
        </Link>
      </div>
    </main>
  );
}
