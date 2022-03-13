import { Scroll }  from "../stories/scroll"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function App () {
  return (
    <div className="container">
      <div className="navbar">
      </div>
      <article>
        <Scroll />
        <section className="feed">
          feed
        </section>
      </article>
      <aside>
        aside
      </aside>
    </div>

    )
}
