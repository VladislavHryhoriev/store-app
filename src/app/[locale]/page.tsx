import Image from "next/image";

export default function HomePage() {
  return (
    <div className="mt-16 flex items-center justify-center">
      <Image
        src="/image.jpg"
        alt="test"
        width={300}
        height={300}
        className="object-cover"
      />
    </div>
  );
}
