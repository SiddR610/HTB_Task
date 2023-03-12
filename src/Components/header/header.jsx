import "./header.css"
import homeimg from "./homeimg.png"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
          <span className="headerTitleMain">Blog Spot.</span>
        </div>
        <img className="headerImage"
        src={homeimg}
        alt="" />
    </div>
  )
}

