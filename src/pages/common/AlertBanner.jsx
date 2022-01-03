import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertBanner({ message, variant }) {
  const alertMessage =
    message || "An unexpected error occurred, Please try again later.";

  const alertVariant = variant || "danger";

  // aria-label used for bootstrap to test for name of alert, textContent in bootstrap cannot be tested with name
  return (
    <Alert
      variant={alertVariant}
      style={{ backgroundColor: "red" }}
      aria-label={alertMessage}
    >
      {alertMessage}
    </Alert>
  );
}
