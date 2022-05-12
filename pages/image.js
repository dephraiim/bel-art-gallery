import Link from "next/link";
import { useRouter } from "next/router";

export default function Image() {
  const router = useRouter();
  const { data } = router.query;

  const dataJSON = JSON.parse(data);

  const image = dataJSON;
  const imageSrc = image.webformatURL;
  const imageAlt = image.tags;
  const imageHeight = image.webformatHeight;
  const imageWidth = image.webformatWidth;
  const imagePage = image.pageURL;
  const imageUser = image.user;
  const imageUserImage = image.userImageURL;
  const imageUserProfile = image.userProfileURL;

  return (
    <div>
      <h1>{imageAlt}</h1>
      <img src={imageSrc} alt={imageAlt} height={imageHeight} width={imageWidth} />
      <p>{imagePage}</p>
      <p>{imageUser}</p>
      <img src={imageUserImage} alt={imageUser} />
      <p>{imageUserProfile}</p>

      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
