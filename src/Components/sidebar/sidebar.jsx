import "./sidebar.css"

export default function Sidebar() {
return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Us</span>
            <img src="https://www.shutterstock.com/image-vector/blog-icons-universal-set-web-260nw-357517409.jpg" alt="" />
            <p>
                Our blog is dedicated to providing informative and engaging content on a variety of topics, covering everything from news and current events to lifestyle and culture.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Fashion</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Gaming</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-discord"></i>
                <i className="sidebarIcon fa-brands fa-reddit"></i>
            </div>
        </div>
    </div>
    )
}
