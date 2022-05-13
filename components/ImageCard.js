import Image from "next/image";
import { useRouter } from "next/router";

export default function ImageCard({ post }) {
  const router = useRouter();

  const routeToImage = (data) => {
    router.push({
      pathname: "/image",
      query: { data: JSON.stringify(data) },
    });
  };

  return (
    <div className="image-preview" key={post.id} onClick={() => routeToImage(post)}>
      <Image
        src={post.previewURL}
        alt={post.tags}
        height={post.previewHeight}
        width={post.previewWidth}
        loading="lazy"
      />
    </div>
  );
}
