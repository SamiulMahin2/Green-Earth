let categoryBtnContainer = document.getElementById("category-button-container");
let allPlantsCardsContainer = document.getElementById("cards-container");

//load all categories button
let loadCategoriesBtn = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then (res => res.json())
    .then (data => {
        showCategoriesBtn(data.categories);
    })
}

//show all categories button
let showCategoriesBtn = (categories) => {
    categories.forEach(category => {
        categoryBtnContainer.innerHTML += `
                        <div class="single-button">
							<button class="text-[16px] font-[500] text-[#1F2937] hover:text-white hover:bg-[#15803D] py-[8px] px-[10px] w-full duration-[0.33s] ease-linear text-center md:text-left rounded-[4px] cursor-pointer mb-[8px]">${category.category_name}</button>
						</div>
        `
    });
}

//load all trees
let loadAllTrees = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then (res => res.json())
    .then (data => {
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
								<p class="inter-font text-[14px] font-[600] text-[#1F2937]">৳${tree.price}</p>
							</div>
							<div class="card-button">
								<button class="text-[16px] font-[500] text-white bg-[#15803D] py-[8px] px-[10px] w-full rounded-full cursor-pointer">Add to Cart</button>
							</div>
						</div>
        `
    })
}

loadCategoriesBtn();
loadAllTrees();


// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//     "name": "Mango Tree",
//     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//     "category": "Fruit Tree",
//     "price": 500
// }