/* eslint-disable no-unused-vars */
export default function WithStyle(WrappedComponent) {
  return function NewComponent(props) {
    return (
      <div style={{ border: "1px solid red" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
