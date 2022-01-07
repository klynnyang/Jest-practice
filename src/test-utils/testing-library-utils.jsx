import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/OrderDetails";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

//re-export everything
export * from "@testing-library/react";
//export renderWithContext as default render
export { renderWithContext as render };

// import { OrderDetailsProvider } from "../contexts/OrderDetails";
// const rtl = require("@testing-library/react");

// const customRender = (ui, options) =>
//   rtl.render(ui, {
//     wrapper: OrderDetailsProvider,
//     ...options,
//   });

// module.exports = {
//   ...rtl,
//   render: customRender,
// };
