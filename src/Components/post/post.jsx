import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img 
      className="postImage" 
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="" 
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor, sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reprehenderit assumenda voluptates odio natus voluptatum! Eveniet ad quod dolores voluptate, incidunt ratione similique enim natus, sapiente accusantium ex temporibus iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reprehenderit assumenda voluptates odio natus voluptatum! Eveniet ad quod dolores voluptate, incidunt ratione similique enim natus, sapiente accusantium ex temporibus iure.
      </p>
    </div>
  )
}
