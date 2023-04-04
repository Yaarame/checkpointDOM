
// des manipulation pour notre premier produit (montre)

// on cible elemt indiquant quantite de montre selectionne ds qt_mt
var qt_mt = document.querySelector('.qt_mt');
console.log(qt_mt);

// ciblage du bouton permettant d'augmenter la qtite ds plus_mt
var plus_mt = document.querySelector('.plus_mt');


console.log(qt_mt.value);

// on cree un evenement click sur le bouton '+'
plus_mt.addEventListener('click', incremente);

// fonct incremente permet d'augmenter de quantite en cas de click sur botun '+'
function incremente(){
    qt_mt.value++;
    
}

// ciblage du buton '-' ds moins_mt
var moins_mt = document.querySelector('.moins_mt');

// un evenement click sur le buton '-'
moins_mt.addEventListener('click',decremente);

// fonct decremente diminue la quantite de produit en cas de click 
function decremente(){
    if(qt_mt.value != 1){
        qt_mt.value--;
        
    }

}

// on cible le prix unitaire de produit ds prix_montre
var prix_montre = document.querySelector('.prix_mt');
console.log(prix_montre.textContent);

// prix total ds prix_tt_montre
var prix_tt_montre = document.querySelector('.prix_tt_mt');
console.log(prix_tt_montre.textContent);

// un evenemet click 
plus_mt.addEventListener('click', multiplier);

// on appelle multiplier pour mettre a jour le prix total en augmentant sa valeur
function multiplier(){
    prix_tt_montre.textContent = prix_montre.textContent * qt_mt.value;
}

// un evenement click
moins_mt.addEventListener('click', demultiplier);

// on appell demultiplier our diminuer valeur total
function demultiplier(){
    prix_tt_montre.textContent = prix_montre.textContent * qt_mt.value;
}



// on repete la mem manip pr les autres produits

      // pour le bracelet

var qt_brc = document.querySelector('.qt_brc');
console.log(qt_brc);

var plus_brc = document.querySelector('.plus_brc');
console.log(qt_mt.value);

plus_brc.addEventListener('click', incrementeB);

function incrementeB(){
    qt_brc.value++;
    
}

var moins_brc = document.querySelector('.moins_brc');

moins_brc.addEventListener('click',decrementeB);

function decrementeB(){
    if(qt_brc.value != 1){
        qt_brc.value--;
        
    }

}

var prix_brc = document.querySelector('.prix_brc');
console.log(prix_brc.textContent);

var prix_tt_brc = document.querySelector('.prix_tt_brc');
console.log(prix_tt_brc.textContent);

plus_brc.addEventListener('click', multiplierB);

function multiplierB(){
    prix_tt_brc.textContent = prix_brc.textContent * qt_brc.value;
}

moins_brc.addEventListener('click', demultiplierB);

function demultiplierB(){
    prix_tt_brc.textContent = prix_brc.textContent * qt_brc.value;
}


      // pour lunettes

 var qt_lun = document.querySelector('.qt_lun');
 console.log(qt_lun);
      
 var plus_lun = document.querySelector('.plus_lun');
 console.log(qt_lun.value);
      
 plus_lun.addEventListener('click', incrementeL);
      
 function incrementeL(){
 qt_lun.value++;
          
 }
      
 var moins_lun = document.querySelector('.moins_lun');
      
 moins_lun.addEventListener('click',decrementeL);
      
 function decrementeL(){
 if(qt_lun.value != 1){
 qt_lun.value--;
       
          }
 }

var prix_lun = document.querySelector('.prix_lun');
console.log(prix_lun);
var prix_tt_lun = document.querySelector('.prix_tt_lun');
console.log(prix_tt_lun.textContent);
plus_lun.addEventListener('click',multiplierL);

function multiplierL(){
    prix_tt_lun.textContent = prix_lun.textContent * qt_lun.value;
}

moins_lun.addEventListener('click',demultiplierL);

function demultiplierL(){
    prix_tt_lun.textContent = prix_lun.textContent * qt_lun.value;
}



// Pour sacoche
var qt_sac = document.querySelector('.qt_sac');
console.log(qt_sac);
                
var plus_sac = document.querySelector('.plus_sac');
 console.log(qt_lun.value);
                
 plus_sac.addEventListener('click', incrementeS);
                
 function incrementeS(){
 qt_sac.value++;
                    
 }
                
 var moins_sac = document.querySelector('.moins_sac');
 moins_sac.addEventListener('click',decrementeS);
                                
          
 function decrementeS(){
 if(qt_sac.value != 1){
 qt_sac.value--;
            }
 }

var prix_sac = document.querySelector('.prix_sac');
console.log(prix_sac);
var prix_tt_sac = document.querySelector('.prix_tt_sac');
console.log(prix_tt_sac.textContent);
plus_sac.addEventListener('click',multiplierS);

function multiplierS(){
    prix_tt_sac.textContent = prix_sac.textContent * qt_sac.value;
}

moins_sac.addEventListener('click',demultiplierS);

function demultiplierS(){
    prix_tt_sac.textContent = prix_sac.textContent * qt_sac.value;
}


// supprimer un produit selectionne par user


// var rech cible le nom du produit a supprimer
var rech = document.querySelector('.recherche');
console.log(rech);
console.log(rech.value);

// var sup : bouton permettant de supprimer le produit selectionne
var sup = document.querySelector('.supprime');
console.log(sup);

var table = document.getElementById('table');

// variable ciblant ligne de notre tableau pouvant etre supprimer
var ligne2 =document.getElementById('ligne2');
var ligne3 =document.getElementById('ligne3');
var ligne4 =document.getElementById('ligne4');
var ligne5 =document.getElementById('ligne5');

// evenement de click sur le bouton sup
sup.addEventListener('click',supProduit,init);


// Ajustement du prix prix total de l'ensemble des produits
var prix_tt = document.querySelector('.pr_total');

// var prix_total prend la somme total de touts les produits
prix_tt.value = parseInt(prix_tt_montre.textContent) + parseInt(prix_tt_brc.textContent) + parseInt(prix_tt_lun.textContent) + parseInt(prix_tt_sac.textContent);


// la fonct init permet de mettre a jour le bouton rech qui permet de taper nom de produit a supprimer
function init(){
    rech.value='';
}

// fonct supProduit() se charge de supprimer un produit en cas de click sur button sup
function supProduit()
{
    var x = rech.value;
    var y = x.toLowerCase();

    // on teste sur y : nom du produit a supprimer
    switch(y){
        case 'montre' : 

        // Ds chaq cas on verifie d'abord si la ligne (contenant le produit) n'est pas deja suprimer avc cette condition
        if(document.getElementById('ligne2') !== null )

            {
                ligne2.remove();
                prix_tt.value-= parseInt(prix_tt_montre.textContent);
                init();
            }
        else
            {
                alert('produit deja supprime!');
                init();
            }
        break;
        case  'bracelet' : 
        if(document.getElementById('ligne3') !== null )
        {

            ligne3.remove();
            prix_tt.value-= parseInt(prix_tt_brc.textContent);
            init();
         }
         else
         {
            alert('produit deja supprime!');
            init();
         }
        break;

        case 'lunettes' : 
        if(document.getElementById('ligne4') !== null)
        {
            ligne4.remove();
            prix_tt.value-= parseInt(prix_tt_lun.textContent);
            init();
        }
        else
        {
            alert('produit deja supprime!');
            init();
        }
        break;
        case 'sacoche' : 
        if(document.getElementById('ligne5') !== null)
        {
            ligne5.remove();
            prix_tt.value-= parseInt(prix_tt_sac.textContent);
            init();
        }
        else
        {
            alert('produit deja supprime!');
            init(); 
        }
        break;
        default : alert('Entrer le bon produit');
        init();

    }
    
}


