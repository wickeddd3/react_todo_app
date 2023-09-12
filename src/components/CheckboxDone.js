export default function CheckboxDone ({ done }) {
  return (
    <input type="checkbox" onChange={done}></input>
  );
};