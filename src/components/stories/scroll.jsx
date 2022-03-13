import { ItemStory } from "./item-story"
import { useState, useEffect } from "react"
import { loadStoriesService } from "../../service/stories"
import Slider from "react-slick"

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 3
}

export const Scroll = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    loadStoriesService().then((res) => {
      setStories(res)
    }).catch((error) => {
      alert(error.message)
    })
  }, [])

  console.log(stories)

  return (
    <section className="stories">
      <Slider {...settings}>
        {stories.map((story) => (
          <ItemStory key={story.id} image={story.image} name={story.name} />
        ))}
      </Slider>
    </section>
  )
}
