import React from "react";
import { Select } from "antd";

const { Option } = Select;

const NutritionSpecificForm = ({
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
        <label>Nutrition Services</label>
        <input
          type="text"
          name="title"
          className="form-control"
        //   value={title}
        //   onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Period Covered</label>
        <input
          type="text"
          name="description"
          className="form-control"
        //   value={description}
        //   onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Province</label>
        <input
          type="number"
          name="price"
          className="form-control"
        //   value={price}
        //   onChange={handleChange}
        />
      </div>

      {/* <div className="form-group">
        <label>Shipping</label>
        <select
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div> */}

      <div className="form-group">
        <label>Municipality</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
        //   value={quantity}
        //   onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Barangay</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
        //   value={quantity}
        //   onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Activites Conducted</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
        //   value={quantity}
        //   onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Number of Beneficiaries</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
        //   value={quantity}
        //   onChange={handleChange}
        />
      </div>

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default NutritionSpecificForm;
