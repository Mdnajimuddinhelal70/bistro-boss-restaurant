

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-3/12 text-center my-8">
      <p className="text-yellow-500 mb-3">----{subHeading}-----</p>
      <h3 className="text-4xl border-y-4 py-4 uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
