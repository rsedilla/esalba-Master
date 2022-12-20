import React from "react";
import { Select } from "antd";

const { Option } = Select;

const FacilityQuarantineForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  showSub,
}) => {
  // destructure
//   const {
//     title,
//     description,
//     price,
//     categories,
//     category,
//     subs,
//     shipping,
//     quantity,
//     images,
//     colors,
//     brands,
//     color,
//     brand,
//   } = values;

  return (
    <form >
      <div className="form-group">
        <label>Select Province</label>
        <input
          type="text"
          name="title"
          className="form-control"
        //   value={title}
        //   onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Select Municipality</label>
        <input
          type="text"
          name="title"
          className="form-control"
        //   value={title}
        //   onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Select Barangay</label>
        <input
          type="text"
          name="title"
          className="form-control"
        //   value={title}
        //   onChange={handleChange}
        />
      </div>

      <br />
      <button className="btn btn-outline-info">Search</button>
      <br />
      <br />
      <button className="btn btn-outline-info">Back</button>
    </form>
  );
};

export default FacilityQuarantineForm;
