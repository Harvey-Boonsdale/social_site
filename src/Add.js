import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function Add(props) {
  const [formValues, changeFormValues] = useState({
    userName: "undefined",
    userText: "undefined",
  });

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  const handleChange = (event) => {
    const newState = { ...formValues };
    newState[event.target.name] = event.target.value;
    changeFormValues(newState);
  };

  const handleSubmit = () => {
    toastr["success"]("Status Updated");
    props.addUpdateToPassToChild(formValues);
    return;
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="userName">
          <Form.Label> User Name</Form.Label>
          <Form.Control
            name="userName"
            type="text"
            value={formValues.name}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Form.Group controlId="userText">
          <Form.Label> Status</Form.Label>
          <Form.Control
            name="userText"
            type="text"
            value={formValues.status}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>
      </Form>
      <Button
        variant="primary"
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </Button>
    </div>
  );
}
export default Add;
