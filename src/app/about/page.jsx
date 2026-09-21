import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <h1>This is About Page...</h1>
      <div className="grid grid-cols-3 gap-2 container mx-auto">
        {/* img-01 */}
        <Image src="/web-dev-01.jpg" width={300} height={400} alt="developer" />
        {/* img-02 */}
        <Image src="/web-dev-02.jpg" width={300} height={400} alt="developer" />
        {/* img-03 */}
        <Image src="/web-dev-03.jpg" width={300} height={400} alt="developer" />
        {/* img-04 */}
        <Image
          src="/web-dev-04.avif"
          width={300}
          height={400}
          alt="developer"
        />
        {/* img-05 */}
        <Image
          src="/web-dev-05.avif"
          width={300}
          height={400}
          alt="developer"
        />
        {/* img-06 */}
        <Image
          src="/web=dev-06.avif"
          width={300}
          height={400}
          alt="developer"
        />
      </div>
    </div>
  );
};

export default AboutPage;
