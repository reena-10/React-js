function CurrentTime() {
  let time = new Date();
  return (
    <p className="lead">
      This is the current Date: {time.toLocaleDateString()}. This is the Current
      Time:
      {time.toLocaleTimeString()}
    </p>
  );
}
export default CurrentTime;
