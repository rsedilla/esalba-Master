import React from "react";
import { Select } from "antd";

const { Option } = Select;

const CreateAnnouncmentForm = ({
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

      <div className="form-group">
        <label>Announcement Title</label>
        <input
          type="text"
          name="description"
          className="form-control"
        //   value={description}
        //   onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Announcement Content</label>
        <input
          type="text"
          name="description"
          className="form-control"
        //   value={description}
        //   onChange={handleChange}
        />
      </div>

      {/* <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
        //   value={price}
        //   onChange={handleChange}
        />
      </div> */}

      <div className="form-group">
        <label>Type of Announcement</label>
        <select
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          <option value="Disaster Advisory">Disaster Advisory</option>
          <option value="Health Advisory">Health Advisory</option>
          <option value="Fire">Fire</option>
          <option value="Vehicular Accident">Vehicular Accident</option>
          <option value="others">others</option>
        </select>
      </div>

      <br />
      <button className="btn btn-outline-info">Create Announcement</button>
      <br />
      <br />
      <button className="btn btn-outline-info">Cancel</button>
    </form>
  );
};

export default CreateAnnouncmentForm;
