import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-discord"></i>
        <i className="topIcon fa-brands fa-reddit"></i>
        </div>
        <div className="topCentre">
            <ul className="topList">
                <li className="topListItem">Articles </li>
                <li className="topListItem">Radio </li>
                <li className="topListItem">Podcast </li>
                <li className="topListItem">Be a writer</li>
                <li className="topListItem">Talk to us</li>
            </ul>
        </div>
        <div className="topRight">
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            <i className="topMenu fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

