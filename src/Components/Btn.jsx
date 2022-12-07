export default function Btn(Btn) {
  return (
    <button
      onClick={Btn.click}
      className={`bg-gradient-to-r from-zinc-200 to-stone-400 hover:bg-violet-600 p-3 text-lg rounded-xl font-medium ${Btn.class}`}
    >
      <p>{Btn.btnText}</p>
    </button>
  );
}
