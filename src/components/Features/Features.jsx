import FeaturesCards from "./FeaturesCards";

const Features = ({ data }) => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold dark:text-white mt-10">
        Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 lg:mx-48 py-10 ">
        {data?.map((items) => (
          <FeaturesCards key={items.id} items={items}></FeaturesCards>
        ))}
      </div>
    </div>
  );
};

export default Features;
