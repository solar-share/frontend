import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect
} from "shards-react";

const CustomSelect = () => (
  <div>
    <InputGroup className="mb-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>Funds</InputGroupText>
      </InputGroupAddon>
      <FormSelect>
        <option>Choose</option>
        <option>LA Solar Group</option>
        <option>Solar Optimum</option>
        <option>Skytech Solar</option>
      </FormSelect>
    </InputGroup>


    {/*}<InputGroup className="mb-3">
      <FormSelect>
        <option>Choose</option>
        <option>...</option>
      </FormSelect>
      <InputGroupAddon type="append">
        <InputGroupText>Options</InputGroupText>
      </InputGroupAddon>
    </InputGroup>*/}
  </div>
);

export default CustomSelect;
