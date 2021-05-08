export default function User({item, search}) {
    return (
        <div>
            {item.id}. {item.name} <button onClick={() => search(item.id) }>Details</button>
        </div>
    )
}