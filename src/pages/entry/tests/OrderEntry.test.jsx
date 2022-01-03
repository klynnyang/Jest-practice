import { render, screen, waitFor } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";

// .only runs only one test inside a test file
test.only("handles errors for scoops & toppings routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3000/scoops", (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get("http://localhost:3000/toppings", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderEntry />);
  // alert is getting sent back twice (not sync), need to use waitFor to wait for both alerts to come back before running test
  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert", {
      name: "An unexpected error occurred, Please try again later.",
    });
    expect(alerts).toHaveLength(2);
  });
});

// .skip is the opposite of .only, it only skips this particular test
test.skip("not a real test", () => {});
