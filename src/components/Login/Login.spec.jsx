import React from "react";
import Login from "./Login";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Login", () => {
    it("renders correctly", () => {
        const { getByLabelText } = render(<Login />);

        expect(getByLabelText("Email")).toHaveAttribute("name", "email");
        expect(getByLabelText("Password")).toHaveAttribute("name", "password");
    })
})