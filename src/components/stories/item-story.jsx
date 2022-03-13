import { Card, Image, Name } from "./styles"

export const ItemStory = ({ image, name }) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
    </Card>
  )
}
