fetch('./annunci.json')
.then(response => response.json())
.then(data => {


    function populateAds(){
        const announcementWrapper = document.querySelector('#announcementWrapper')
        data.forEach(announcement => {
            let card = document.createElement('div');
    
            card.classList.add('col-12', 'col-md-4');
            card.innerHTML=
             `
             <div class="row">
        <div class="col-4">
            <div class="annunciBox">
                <div class="img-container">
                    <div class="img-inner">
                        <div class="inner-skew">
                            <img class="img-fluid w-100"
                                src="./media/daniel-reyes-LElCqbdsNz0-unsplash (1).jpg">
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <h3><strong>${announcement.name}</strong></h3>
                    <h5><em>${announcement.category}</em></h5>
                    <div>
                        <p> Lorem ipsum something something...</p>
                        <p><strong>${announcement.price}€</strong></p>
                        <button class="btn annuncioBtn"> Leggi annuncio </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
             
             `
    
             announcementWrapper.appendChild(card);
    
                })
    }

    function populateCategoriesFilter (){

        const categoriesFilterWrapper = document.querySelector('#categoriesFilterWrapper');
        const dropdownMenuCategories = document.querySelector('#dropdownMenuCategories');

        let menuCategories = new Set (data.map(ad => ad.category));
        menuCategories.forEach(menuCategory => {
            console.log ("categoria: "+menuCategory);

            let checkMenu = document.createElement('button');
            checkMenu.classList.add('dropdown-item');
            checkMenu.innerHTML = 
            `
            ${menuCategory}
            `
            dropdownMenuCategories.appendChild(checkMenu);
        })

        let categories = new Set (data.map(ads => ads.category) )


        categories.forEach(category => {
            let check = document.createElement('div');
            check.classList.add('form-check');
            check.innerHTML =
            `
                <input class="form-check-input" type="checkbox" value="" id="checkbox${category}">
                <label class="form-check-label" for="checkbox${category}">
                ${category}
                </label>
        
            `
            categoriesFilterWrapper.appendChild(check);
        })



        // <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

        // </div>

    }

    populateCategoriesFilter()
    populateAds()
})



{/* <div class="col-12">
<div class="row">
    <div class="col-4">
        <div class="annunciBox">
            <div class="img-container">
                <div class="img-inner">
                    <div class="inner-skew">
                        <img class="img-fluid w-100"
                            src="./media/daniel-reyes-LElCqbdsNz0-unsplash (1).jpg">
                    </div>
                </div>
            </div>
            <div class="text-container">
                <h3>Titolo annuncio</h3>
                <div>
                    <p> Lorem ipsum something something</p>
                    <p><strong>100€</strong></p>
                    <button class="btn annuncioBtn"> Leggi annuncio </button>
                </div>
            </div>
        </div>
    </div>
</div>
</div> */}