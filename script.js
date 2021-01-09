function addItem(name){
    var ul = document.getElementById("DList");
    var li = document.createElement("li");
    li.setAttribute('id',name);
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
}

function removeItem(name){
    var ul = document.getElementById("DList");
    var item = document.getElementById(name);
    ul.removeChild(item);
}

var dish = `
  {
    "recipes": [
		{"name": "Roti",
"link": "https://www.cookwithmanali.com/roti-recipe/",
"ingredients": "wheat flour"},

		{"name": "French Toast",
"link": "https://www.allrecipes.com/recipe/7016/french-toast-i/",
"ingredients": "bread;eggs;milk"},

		{"name": "Veg Manchurian",
"link": "https://recipes.timesofindia.com/recipes/vegetable-manchurian/rs54507152.cms",
"ingredients": "cabbage;cauliflower;green beans;soy sauce;all purpose flour;bell peppers;capsicum;tomato ketchup;carrot;paneer;corn starch;onion"},

		{"name": "Chilli Chicken",
"link": "https://recipes.timesofindia.com/recipes/chilli-chicken/rs53094926.cms",
"ingredients": "chicken;corn starc;egg;onion;soy sauce;vinegar;capsicum"},

		{"name": "Potato Fry",
"link": "https://www.indianhealthyrecipes.com/tawa-aloo-potato-fry/",
"ingredients": "Potato;Garlic;Chillies"},

		{"name": "Pav Bhaji",
"link": "https://recipes.timesofindia.com/recipes/pav-bhaji-by-pankaj-bhadouria/rs52416693.cms",
"ingredients": "Potato;onion;cauliflower;peas;beans;tomato;capsicum;carrot"},

		{"name": "Aloo Paratha",
"link": "https://recipes.timesofindia.com/recipes/aloo-paratha/rs53109843.cms",
"ingredients": "Potato;ghee;onion;Wheat flour"},

		{"name": "Bread pakora",
"link": "https://recipes.timesofindia.com/recipes/bread-pakora/rs53240499.cms",
"ingredients": "Bread;Potato;Gram flour"},

		{"name": "Samosa",
"link": "https://recipes.timesofindia.com/recipes/samosa/rs61050397.cms",
"ingredients": "All purpose flour;Potato"},

		{"name": "Gajar ka Halwa",
"link": "https://recipes.timesofindia.com/recipes/gajar-ka-halwa/rs53317590.cms",
"ingredients": "carrot;milk;sugar;nuts"},

		{"name": "Chicken Biryani",
"link": "https://recipes.timesofindia.com/recipes/chicken-biryani/rs53096628.cms",
"ingredients": "Rice;Chicken;Onion;garlic;yoghurt;Ghee;Ginger"},

		{"name": "Veg Biryani",
"link": "https://recipes.timesofindia.com/recipes/vegetable-biryani-by-pankaj-bhadouria/rs53098310.cms",
"ingredients": "Rice;Onion;Potato;Ghee;Beans;Yoghurt;Peas;Cauliflower;Carrot;Butter"},

		{"name": "Shahi Paneer",
"link": "https://recipes.timesofindia.com/recipes/shahi-paneer/rs52446409.cms",
"ingredients": "paneer;tomato;onion;yoghurt;ghee;milk;nuts"},

		{"name": "Momos",
"link": "https://www.vegrecipesofindia.com/veg-momos-recipe-vegetable-momos/",
"ingredients": "All purpose flour;onion;cabbage;capsicum;carrot;beans"},

		{"name": "Gulab Jamun",
"link": "https://www.indianhealthyrecipes.com/gulab-jamun-recipe-using-milk-powder/",
"ingredients": "Milk Powder;All Purpose Flour;Sugar"},

		{"name": "Egg Curry",
"link": "https://recipes.timesofindia.com/recipes/egg-curry/rs78894806.cms",
"ingredients": "onion;tomato;eggs"},

		{"name": "Amritsari Kulcha",
"link": "https://recipes.timesofindia.com/recipes/amritsari-kulcha/rs62376759.cms ",
"ingredients": "all purpose flour;potato;baking powder;baking soda;curd;milk"},

		{"name": "Dhokla",
"link": "https://foodviva.com/snacks-recipes/khaman-dhokla-recipe/",
"ingredients": "Gram flour;Lemon Juice;Yoghurt"},

		{"name": "Instant Dosa",
"link": "https://hebbarskitchen.com/crisp-instant-dosa-recipe/",
"ingredients": "Semolina;Rice Flour;Wheat Flour;yoghurt;Baking Soda"},

		{"name": "Coconut Chutney",
"link": "https://www.indianhealthyrecipes.com/coriander-coconut-chutney/",
"ingredients": "Coconut;Ginger;Coriander;Chillies"},

		{"name": "Khichdi",
"link": "https://www.indianhealthyrecipes.com/dal-khichdi-recipe/",
"ingredients": "Moong;Ghee;Onion;Tomato;Rice"},

		{"name": "Ras Malai",
"link": "https://recipes.timesofindia.com/recipes/ras-malai/rs53929101.cms",
"ingredients": "milk;sugar;saffron;nuts;pistacahios"},

		{"name": "Medu Vada",
"link": "https://recipes.timesofindia.com/recipes/medu-vada/rs53281774.cms",
"ingredients": "urad dal;onion;peppericorn;asafoetida"},

		{"name": "Dal Makhni",
"link": "https://recipes.timesofindia.com/recipes/dal-makhani-by-pankaj-bhadouria/rs53097626.cms",
"ingredients": "rajma;onion;tomato;urad dal"},

		{"name": "Pasta",
"link": "https://www.indianhealthyrecipes.com/masala-pasta/",
"ingredients": "Pasta;Chillies;Garlic;Onion;Tomato;Capsicum"},

		{"name": "Poha",
"link": "https://food.ndtv.com/recipe-chivda-poha-99033",
"ingredients": "poha;asafoetida;onion;potato"},

		{"name": "Malai Kofta",
"link": "https://recipes.timesofindia.com/recipes/malai-kofta/rs53225025.cms",
"ingredients": "paneer;all purpose flour;corn starch;nuts;butter;cream;onion"},

		{"name": "Raita",
"link": "https://www.indianhealthyrecipes.com/raita-recipes-biryani-pulao-kababs/",
"ingredients": "Yoghurt;Onion;Cucumber"}

		]
}
`;
	var looper;
	var looper2;
	var totDish = JSON.parse(dish);
	var dishFind = [];
	var chosen = [];
	var isFound =false;


$(document).ready(function(){
	
	$(".row img").imgCheckbox({
	onload: function(){
        
    },
    onclick: function(el){
		var isChecked = el.hasClass("imgChked"),
	    imgEl = el.children()[0];
		
		if(isChecked){
			chosen.push(imgEl.name.toLocaleLowerCase());
			addItem(imgEl.name);
			
		}else{
			chosen.splice(chosen.indexOf(imgEl.name.toLocaleLowerCase()), 1);
			removeItem(imgEl.name);
		}
		
		console.log(chosen);
    }
		
});
	
	$(".button").click(function(){
		for(looper of totDish["recipes"]){
			//for(looper2 of chosen){
				/*if((looper["ingredients"].toLocaleLowerCase().includes(looper2.toLocaleLowerCase()))){
					console.log(looper["name"] + " have " + looper);
					isFound = true;
				}else{
					isFound = false;
					break;
				}*/
				
				var ings = looper["ingredients"].toLocaleLowerCase().split(";");
				var i;
				isFound = true;
				for(i of ings){
					if(chosen.indexOf(i) == -1){
						console.log()
						isFound = false;
						break;
					
					}
				}
					
			
			if(isFound)
				dishFind.push(looper);
		}
		localStorage.setItem("recipe", JSON.stringify(dishFind));
	})

});