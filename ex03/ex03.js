let dish = [
  { name: "Rau sạch", category: "Đồ ăn" },
  { name: "Thịt lợn", category: "Đồ ăn" },
  { name: "Pepsi không calo", category: "Nước" },
  { name: "Cocacola", category: "Nước" },
  { name: "Cờ lê", category: "Dụng cụ" },
  { name: "Tuy vít", category: "Dụng cụ" },
];

const categoryElement = document.querySelector("#category");
const btnElement = document.querySelector("#btn");
const listElement = document.querySelector("#list");

btnElement.addEventListener("click", function () {
  const itemCategory = categoryElement.value;
  listElement.textContent = "";

  const filterProduct = dish.filter(
    (product) => product.category === itemCategory
  );

  filterProduct.forEach((product) => {
    const item = document.createElement("li");
    item.textContent = ` Tên đồ ăn: ${product.name}, danh mục: ${product.category}`;
    listElement.appendChild(item);
  });
});
