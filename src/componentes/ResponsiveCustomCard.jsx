const ResponsiveCustomCard = (props) => {
  return (
    <article className={props.classCard}>
        <figure className={props.classCardImgContainer}>
          {props.img_container}
        </figure>
        <div className={props.classCardBody}>
            {props.children}
        </div>
    </article>
  )
}

export default ResponsiveCustomCard