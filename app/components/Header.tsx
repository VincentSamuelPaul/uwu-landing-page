import "../globals.css";
import Button from "./Button";

const Header = () => {
  return (
    <div className="mt-4 w-full flex flex-row justify-center items-center">
      <div className="flex w-260 flex-row justify-between items-center bg-[#1E1E1E] p-2 rounded-full">
        <div className="ml-8 flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center align-middle rounded-xl bg-gradient-to-b from-[#6080EB] to-[#D959A7] p-2">
            <h1 className="text-xs">uW</h1>
          </div>
          <h1 className="ml-2 font-bold">uWu</h1>
        </div>
        <div className="w-100 flex flex-row justify-between items-center">
            <h1 className="text-sm">Products</h1>
            <h1 className="text-sm">Resources</h1>
            <h1 className="text-sm">Contact</h1>
            <Button href="/" bg="white" color="black" text="Launch App" className="p-3 rounded-full text-sm" />
        </div>
      </div>
    </div>
  )
}

export default Header