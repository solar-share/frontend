import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput, Button } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import CustomSelect from "../components-overview/CustomSelect.js"
import InputGroups from "../components-overview/InputGroups.js"

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form>
        <CustomSelect size="lg" className="mb-3" placeholder="Choose Solar Fund" />
      </Form>
      <InputGroups />
      <div styles={{alignContent: "right"}}>
        <Button theme="accent" size="sm" className="ml-auto">
          <i className="material-icons">done</i> Invest
        </Button>
      </div>
    </CardBody>
  </Card>
);

export default Editor;
