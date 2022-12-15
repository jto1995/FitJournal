export default function Btn(Btn) {
  return (
    <button
      onClick={Btn.click}
      id={Btn.id}
      className={`bg-gradient-to-r from-zinc-200 to-stone-400 hover:bg-violet-600 p-3 text-lg rounded-xl font-medium ${Btn.class}`}
      value={Btn.value}
    >
      <p>{Btn.btnText}</p>
    </button>
  );
}
