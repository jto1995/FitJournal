import './Btn.scss'
export default function Btn (Btn) {
    return (
        <button className="btn">
            <p>{Btn.btnText}</p>
        </button>
    )
}