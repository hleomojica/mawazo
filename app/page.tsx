import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        {" "}
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">
          Write your amazing thoughts and share with the world
        </span>
      </h1>
      <p className="desc text-center">
        Mawazo wall is a platform where you can share your thoughts and ideas
      </p>
      {/* Feed  */}
    </section>
  );
}
