import "../globals.css";
import Button from "./Button";
import { inter } from "../fonts";
import { colors } from "../colors";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 mt-4 w-full flex flex-row justify-center items-center">
      <div className="flex w-260 flex-row justify-between items-center p-2 rounded-full" style={{ backgroundColor: colors.solidGrey }}>
        <div className="ml-8 flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center align-middle rounded-xl p-2" style={{ background: `linear-gradient(to bottom, ${colors.logoPurple}, ${colors.logoPink})` }}>
            <h1 className="text-xs">uW</h1>
          </div>
          <h1 className="ml-2 font-bold">uWu</h1>
        </div>
        <div className="w-100 flex flex-row justify-between items-center">
          <Button href="/" className="text-sm">Products</Button>
          <Button href="/" className="text-sm">Resources</Button>
          <Button href="/" className="text-sm">Contact</Button>
          <Button href="/" bg={colors.white} color={colors.black} text="Launch App" className="p-3 rounded-full text-sm" />
        </div>
      </div>
    </div>
  )
}

export default Header