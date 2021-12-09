const Total = ({items}) => {
    let total = 0;
    {items.map((item) => {
        total += item.price
    })
    }
    return <p>Total: £{total}</p>
}

export default Total