
const itemRef = document.querySelectorAll('.item');
console.log(`В списке ${itemRef.length} категрии`);


itemRef.forEach(elem => {
    const titleText = elem.firstElementChild.textContent;
    const quantityCategories = elem.lastElementChild.children.length;

    return console.log(`Категория: ${titleText},
    количество элементов: ${quantityCategories}`);
 });



