export const Item = ({ item, handleRemove }) => (
    <li>
        <div>
            <p>{item.catName}</p>
            <p>£{item.price}</p>
            <button onClick={handleRemove}>Remove</button>
        </div>
    </li>
)