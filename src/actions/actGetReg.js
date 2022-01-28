export const FETCH_REG = () => ({ type: "REG" });
export const REG = (email, password, name, surname, navigate) => ({
    type: "REG",
    email,
    password,
    name,
    surname,
    navigate,
});