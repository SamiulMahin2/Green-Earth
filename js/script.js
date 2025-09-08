let categoryBtnContainer = document.getElementById("category-button-container");
let allPlantsCardsContainer = document.getElementById("cards-container");

//load all categories button
let loadCategoriesBtn = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(data => {
            showCategoriesBtn(data.categories);
        })
}

//show all categories button
let showCategoriesBtn = (categories) => {
    categoryBtnContainer.innerHTML = "";
    categories.forEach(category => {
        categoryBtnContainer.innerHTML += `
                        <div>
							<button id="${category.id}" class="single-category-button text-[16px] font-[500] text-[#1F2937] hover:text-white hover:bg-[#15803D] py-[8px] px-[10px] w-full duration-[0.33s] ease-linear text-center md:text-left rounded-[4px] cursor-pointer mb-[8px]">${category.category_name}</button>
						</div>
        `
    });
}

//load all trees
let loadAllTrees = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => {
            showAllTrees(data.plants);
        })
}

//show all trees 
let showAllTrees = (trees) => {
    allPlantsCardsContainer.innerHTML = "";
    trees.forEach(tree => {
        allPlantsCardsContainer.innerHTML += `
                        <div class="single-card bg-white p-[16px] rounded-[8px] flex flex-col">
							<div class="card-image">
								<img class="h-64 object-cover w-full rounded-[8px]" src="${tree.image}" alt="">
							</div>
							<div class="card-heading flex-1">
								<h1 class="inter-font text-[14px] font-[600] text-[#1F2937] mt-[12px]">${tree.name}</h1>
							</div>
							<div class="card-description flex-1">
								<p class="inter-font text-[12px] font-[400] text-[#1F2937] my-[8px]">${tree.description}</p>
							</div>
							<div class="card-price-tag flex items-center justify-between mb-[12px]">
								<p class="inter-font text-[14px] font-[500] text-[#15803D] p-[5px] bg-[#DCFCE7] rounded-full">${tree.category}</p>
								<p class="inter-font text-[14px] font-[600] text-[#1F2937]">৳<span>${tree.price}</span></p>
							</div>
							<div class="card-button">
								<button class="add-to-cart-btn text-[16px] font-[500] text-white bg-[#15803D] py-[8px] px-[10px] w-full rounded-full cursor-pointer">Add to Cart</button>
							</div>
						</div>
        `
    })
}

//highlight the category buttons after clicking
categoryBtnContainer.addEventListener("click", (event) => {
    let buttons = document.querySelectorAll(".single-category-button");
    buttons.forEach(btn => {
        btn.classList.remove("text-white");
        btn.classList.remove("bg-[#15803D]");
    })
    if (event.target.querySelectorAll(".single-category-button")) {
        let button = event.target;
        button.classList.add("text-white");
        button.classList.add("bg-[#15803D]");
        loadTreesByCategory(event.target.id);
    }
})

//load trees by category
let loadTreesByCategory = (treeCategoryId) => {
    fetch(`https://openapi.programming-hero.com/api/category/${treeCategoryId}`)
        .then(res => res.json())
        .then(data => {
            showTreesByCategory(data.plants);
        })
}

//show trees by category
let showTreesByCategory = (tree) => {
    allPlantsCardsContainer.innerHTML = "";
    tree?.forEach(t => {
        allPlantsCardsContainer.innerHTML += `
                        <div class="single-card bg-white p-[16px] rounded-[8px] flex flex-col">
							<div class="card-image">
								<img class="h-64 object-cover w-full rounded-[8px]" src="${t.image}" alt="">
							</div>
							<div class="card-heading flex-1">
								<h1 class="inter-font text-[14px] font-[600] text-[#1F2937] mt-[12px]">${t.name}</h1>
							</div>
							<div class="card-description flex-1">
								<p class="inter-font text-[12px] font-[400] text-[#1F2937] my-[8px]">${t.description}</p>
							</div>
							<div class="card-price-tag flex items-center justify-between mb-[12px]">
								<p class="inter-font text-[14px] font-[500] text-[#15803D] p-[5px] bg-[#DCFCE7] rounded-full">${t.category}</p>
								<p class="inter-font text-[14px] font-[600] text-[#1F2937]">৳<span>${t.price}</span></p>
							</div>
							<div class="card-button">
								<button class="add-to-cart-btn text-[16px] font-[500] text-white bg-[#15803D] py-[8px] px-[10px] w-full rounded-full cursor-pointer">Add to Cart</button>
							</div>
						</div>
        `
    })
}

//add to cart buttons functionality 
allPlantsCardsContainer.addEventListener("click", (event) => {
    if (event.target.querySelectorAll(".add-to-cart-btn")) {
        let addBtn = event.target;
        let cartPrice = Number(document.getElementById("cart-total-price").innerText);
        let productPrice = Number(addBtn.parentNode.parentNode.children[3].children[1].children[0].innerText);
        let treeName = addBtn.parentNode.parentNode.children[1].children[0].innerText;
        let totalPrice = productPrice + cartPrice;
        document.getElementById("cart-total-price").innerText = totalPrice;

        let singleCartContainer = document.getElementById("single_cart_container");
        singleCartContainer.innerHTML += `
                        <div class="single-cart bg-[#F0FDF4] flex items-center justify-between py-[8px] px-[12px] rounded-[8px] my-[8px]">
							<div class="single-cart-content">
								<h1 class="inter-font text-[14px] font-[600] text-[#1F2937] mb-[8px]">${treeName}</h1>
								<p class="inter-font text-[16px] font-[400] text-[#1F2937]">৳${productPrice} x 1</p>
							</div>
							<div class="single-cart-icon">
								<i class="fa-solid fa-xmark text-[16px] text-[#8C8C8C] cursor-pointer"></i>
							</div>
						</div>
        `
    };
})

loadCategoriesBtn();
loadAllTrees();
// loadTreesByCategory(1);