fetch('./annunci.json')
.then(response => response.json())
.then(data => {

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
                <h3>${announcement.name}</h3>
                <div>
                    <p> Lorem ipsum something something</p>
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



    console.log(announcementWrapper);
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