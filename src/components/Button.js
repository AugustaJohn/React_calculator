export default function Button({label, handleClick}){
    return (
        <button className="w-24 border border-[#222] bg-[#4CAF50] active:bg-[#ccc] px-5 py-2.5 text-base" onClick={handleClick}>{label}</button>
    )
}