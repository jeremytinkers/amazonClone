export default function CartScreen(props) {
 
    const prodId = props.match.params.id;
    const qty = props.location.search ? props.location.search.split("=")[1] : 1;

    return (
        <div>
            <h1>Cart</h1>
            <p>Product Id: {prodId}</p>
            <p>Quantity Requested: {qty}</p>
        </div>
    )
}
