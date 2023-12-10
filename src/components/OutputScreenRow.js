export default function OutputScreenRow({value}){
    return (
        <div>
            <input type="text" readOnly className="border w-96 p-2.5 text-right bg-[#dddd] text-[#222]" value={value}/>
        </div>
    )
}