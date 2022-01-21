import "./Error.scss";

export const Error = ({message}) => {
  return (
    <div className="error">
      {message}
    </div>
  )
}