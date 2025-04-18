import PropTypes from "prop-types";
import JobsCarts from "../JobsCarts/JobsCarts";

const CategoryCard = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <JobsCarts key={item._id} item={item} />
      ))}
    </div>
  );
};

CategoryCard.propTypes = {
  items: PropTypes.array,
};

export default CategoryCard;