
const Button = ({name,handle}) => {
  return (
    <>
    <button onClick={handle} className="bg-amber-400 text-white p-2 rounded-2xl cursor-pointer">
        {name}
    </button>
    </>
  )
}

export default Button;
