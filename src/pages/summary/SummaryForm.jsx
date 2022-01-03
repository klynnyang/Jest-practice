import React from "react";
import { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

export default function SummaryForm() {
  const [disabledState, setDisabledState] = useState(true);

  const popover = (
    <Popover id="termsandconditions-popover">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  const handleCheckBoxChange = () => {
    setDisabledState(!disabledState);
  };

  return (
    <Form>
      <Form.Group
        style={{ display: "flex", justifyContent: "center" }}
        controlId="terms-and-conditions"
      >
        <Form.Check
          type="checkbox"
          onChange={handleCheckBoxChange}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={disabledState}>
        Confirm order
      </Button>
    </Form>
  );
}
