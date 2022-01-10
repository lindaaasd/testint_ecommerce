fetch('./annunci.json')
.then(response => response.json())
.then(data => {


    function populateAds(ads){
        const announcementWrapper = document.querySelector('#announcementWrapper')
        announcementWrapper.innerHTML = '';
        ads.forEach(announcement => {
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

            let checkMenu = document.createElement('button');
            checkMenu.classList.add('dropdown-item' , 'filterCategory2');
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
                <input class="form-check-input filterCategory" type="checkbox" value="${category}" id="checkbox${category}">
                <label class="form-check-label" for="checkbox${category}">
                ${category}
                </label>
        
            `
            categoriesFilterWrapper.appendChild(check);
        })

    }

    function attachFilterCategoryEvent(){
        
        let checks = document.querySelectorAll('.filterCategory')
       
        checks.forEach(check => {
            
            check.addEventListener('input' , () => {
               

                let checkedCategories = Array.from(checks)
                                             .filter(check => check.checked)
                                             .map(check => check.value)
               

                let filteredAds = data.filter(ad => checkedCategories.includes(ad.category))
             
                if(filteredAds.length == 0){
                    populateAds(data)
                } else {
                populateAds(filteredAds)
                }

            })
        })

    }

    function filterBySearch(search){

        let filtered = data.filter(ad => {
            return ad.name.toLowerCase().includes(search.toLowerCase())
        })

        populateAds(filtered);
    }

    function populatePriceFilter(){

        let prices = data.map(ad => Number(ad.price));
        let sorted = prices.sort((a, b) => a - b );
        let min = Math.floor(sorted[0]);
        let max = Math.ceil(sorted[sorted.length - 1]);



        priceInputs.forEach(input =>{
            input.max = max;
            input.min = min; 
            
        })
        console.log ("valude di price input 0"+ priceInputs[0].value );

        priceInputs[0].value =  min;
        priceInputs[1].value = max;


        rangeValues.innerHTML = `${min} € - ${max} €`


    }

    function filterByPrice(min, max) {
        let filtered = data.filter(ad => Number(ad.price) <= max && Number(ad.price) >= min
        )
        populateAds(filtered);
    }

    const searchInput = document.querySelector('#searchInput');
    const inputSearchBar = document.querySelector('#inputSearchBar');
    const priceInputs = document.querySelectorAll('.priceInputs');
    const rangeValues = document.querySelector ('.rangeValues');

    populatePriceFilter();

    searchInput.addEventListener('input', () =>{
        filterBySearch(searchInput.value)
    })

    inputSearchBar.addEventListener('priceInput', () => {
        filterBySearch(inputSearchBar.value)
    })

    priceInputs.forEach(input =>
        input.addEventListener('input', () => {
           let values =  Array.from(priceInputs).map(princeInput => princeInput.value)
                              .sort((a,b) => a - b)

            rangeValues.innerHTML = `${values[0]} € - ${values[1]} €`
            filterByPrice(values[0], values[1]);
        }
         ) 
        )


    populatePriceFilter()
    populateCategoriesFilter()
    attachFilterCategoryEvent()
    populateAds(data)
})
