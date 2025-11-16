import { useMemo, useState } from "react";

export default function UseMemoExample () {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);
  const addTodo = () => {
    setTodos([...todos, `New Todo ${todos.length + 1}`]);
  };

  function expensiveCalculation(sum: number) {
    for (let i = 0; i <= 1000000000; i++) {
      sum += i;
    }
    console.log("sum", sum,count);
    return sum;
  }
  const sumValue = useMemo(()=>expensiveCalculation(count),[count]) ;
  return (
    <>
      <button onClick={addTodo}>add todo </button>
      {todos.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <div>Test Component</div>
      <h1>sum:{sumValue}</h1>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment count</button>
      <button onClick={() => setCount(count - 1)}>decrement count</button>
      <button onClick={() => expensiveCalculation(count)}>call calculation</button>
    </>
  );
}
