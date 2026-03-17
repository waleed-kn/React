function List() {
    const fruits = [{ id: 1, name: "banana", calories: 95 },
    { id: 2, name: "mango", calories: 45 },
    { id: 3, name: "orange", calories: 123 },
    { id: 4, name: " pineApple", calories: 234 }];

    //fruits.sort((a, b) => a.name.localeCompare(b.name));
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    const ListItems = fruits.map(fruit =>
        <li key={fruit.id}>
            {fruit.name}: &nbsp;
            <b> {fruit.calories}
            </b></li>)
    return (
        <ol>{ListItems}</ol>
    );
}
export default List;