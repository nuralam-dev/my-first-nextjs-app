import Image from "next/image";

const DeveloperPage = () => {
  return (
    <div>
      <h1>this is developer page....</h1>
      <div className="grid grid-cols-3 gap-1">
        <Image
          src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775"
          width={300}
          height={400}
          alt="dev img"
        ></Image>
        <Image
          src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5"
          width={300}
          height={400}
          alt="Developer photo"
        ></Image>
        <Image
          src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775"
          width={300}
          height={400}
          alt="dev img"
        ></Image>
      </div>
    </div>
  );
};

export default DeveloperPage;
