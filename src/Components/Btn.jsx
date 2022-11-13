export default function Btn (Btn) {
    return (
        <button className="bg-gradient-to-r from-zinc-200 to-stone-400 hover:bg-violet-600 p-3 text-lg rounded-xl font-medium">
            <p>{Btn.btnText}</p>
        </button>
    )
}