function Hello() {
  let myName = "Reena";
  let number = 456;
  let fullName = () => {
    return "Reena Mahto";
  };
  return (
    <p>
      Hello, This is the future speaking. MessageNo: {number}. I am your master{" "}
      {fullName()}
    </p>
  );
}
export default Hello;
