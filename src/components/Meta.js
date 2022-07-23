import Head from "next/head";

const Meta = ({ title, description, url, image }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Daniel Schuster - Web Developer",
  description:
    "I am Daniel Schuster and I love to code - Skills: Ruby on Rails, React.js, Java, SQL, JavaScript, HTML & CSS",
  url: "https://danielschuster.me/",
  image: "",
};

export default Meta;
