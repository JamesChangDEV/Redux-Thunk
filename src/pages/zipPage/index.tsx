import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequest } from "../../store/zip/action";
import { ZipType } from "./type";
import "./style.scss";

const ZipPage: React.FC<null> = () => {
  const { errors, data } = useSelector((sate: ZipType) => sate.zip);
  const dispatch = useDispatch();

  const value = useRef<HTMLHeadingElement>(null);

  const handleFetch = () => {
    const zipCode = value.current.value;
    dispatch(fetchRequest(zipCode));
  };

  return (
    <div>
      <div>
        <input type="number" ref={value} />
        <button onClick={handleFetch}>Fetch</button>
      </div>
      {!errors && data && data.places && (
        <table>
          <thead>
            <tr>
              <th>post code</th>
              <th>country</th>
              <th>country abbreviation</th>
              <th>place name</th>
              <th>longitude</th>
              <th>state</th>
              <th>state abbreviation</th>
              <th>latitude</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data["post code"]}</td>
              <td>{data.country}</td>
              <td>{data["country abbreviation"]}</td>
              <td>{data.places[0]["place name"]}</td>
              <td>{data.places[0].longitude}</td>
              <td>{data.places[0].state}</td>
              <td>{data.places[0]["state abbreviation"]}</td>
              <td>{data.places[0].latitude}</td>
            </tr>
          </tbody>
        </table>
      )}
      {errors && <label>{errors}</label>}
      <label></label>
    </div>
  );
};

export default ZipPage;
