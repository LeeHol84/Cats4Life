import { Item } from "./Item"

const BasketList = ({items, handleRemove}) => (
    <ul>
        {items.map((item, index) => (
            <Item key={index} item={item} handleRemove={() => handleRemove(index)} />
        ))}
    </ul>
)

export default BasketList