// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Child1(props: any) {
  return (
    <>
      <input
        type="text"
        onChange={(e) => props.setName(e.target.value)}
        value={props.name}
      />
      <h1>i am from child 1 my name is :{props.name}</h1>
    </>
  );
}

export default Child1;
