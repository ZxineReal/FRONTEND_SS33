const products = [
    {
      id: 1,
      name: "Laptop Dell XPS 15",
      price: 35990000,
      image:
        "https://www.notebookcheck.net/typo3temp/_processed_/2/6/csm_9530_ab58b05038.png",
      description:
        "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: 39990000,
      image:
        "https://bizweb.dktcdn.net/100/506/962/products/960x0.webp?v=1710578226933",
      description:
        "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.",
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      price: 28990000,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/vn/2401/gallery/vn-galaxy-s24-s928-sm-s928bzkqxxv-539307400",
      description:
        "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
    },
    {
      id: 4,
      name: "Tai nghe Sony WH-1000XM5",
      price: 8990000,
      image:
        "https://meta.vn/Data/image/2023/03/31/tai-nghe-chup-tai-sony-wh-1000xm5.jpg",
      description:
        "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.",
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      price: 11990000,
      image:
        "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
      description:
        "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
    },
    {
      id: 6,
      name: "Loa JBL Charge 5",
      price: 3990000,
      image:
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2021/09/22/image-removebg-preview-6.png",
      description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
    },
  ];
  
  // Lấy ra phần tử card container
  const cardsElement = document.querySelector(".card-container");
  
  // Hàm hiển thị danh sách sản phẩm
  function renderCards(productList) {
    // Xóa sản phẩm cũ trước khi render lại
    cardsElement.innerHTML = "";
  
    productList.forEach((product) => {
      // Thẻ div chứa sản phẩm
      const card = document.createElement("div");
      card.classList.add("card");
  
      // Hình ảnh
      const imgElement = document.createElement("img");
      imgElement.src = product.image;
      imgElement.alt = product.name;
  
      // Tiêu đề
      const nameElement = document.createElement("h4");
      nameElement.textContent = product.name;
  
      // Mô tả
      const desElement = document.createElement("p");
      desElement.textContent = product.description;
  
      // Giá tiền
      const priceElement = document.createElement("p");
      priceElement.innerHTML = `<strong>${product.price.toLocaleString()} VND</strong>`;
  
      // Nút mua hàng
      const buyButton = document.createElement("button");
      buyButton.textContent = "Buy";
      buyButton.classList.add("buy-btn");
  
      // Gán thuộc tính vào card
      card.appendChild(imgElement);
      card.appendChild(nameElement);
      card.appendChild(desElement);
      card.appendChild(priceElement);
      card.appendChild(buyButton);
  
      // Thêm card vào danh sách sản phẩm
      cardsElement.appendChild(card);
    });
  }
  
  // Hiển thị toàn bộ sản phẩm khi tải trang
  renderCards(products);

  const btnSearchElement = document.querySelector("#search-btn");
  
  // Tìm kiếm
    btnSearchElement.addEventListener("click", function () {
    const searchValue = document.querySelector("#search-bar").value.toLowerCase();
  
    // Lọc sản phẩm
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );
  
    // Hiển thị danh sách đã lọc
    renderCards(filteredProducts);
  });
  