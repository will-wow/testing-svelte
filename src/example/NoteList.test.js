import { render } from "@testing-library/svelte";
import MockChild from "./MockChild.svelte";
import Parent from "./Parent.svelte";

jest.mock("./Child.svelte", () => ({
  default: MockChild
}));

it("renders the child", () => {
  const component = render(Parent, {});

  expect(component.getByText("Mock Child").textContent).toBe("Mock Child");
});
