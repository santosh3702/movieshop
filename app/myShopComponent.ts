import {Component} from "@angular/core";


/**
 * Created by grahul on 1/12/2017.
 */

@Component({
    selector: 'myShop',
    templateUrl: './UI/movieHtml.html',
    styleUrls: ['./UI/myShopComponent.css']
})

export class myShopComponent{
    public recentMovie: String= "None";
    public cart :String[] = [];
   public  movieList: String[] = ['kaidhi150','batmanvsuperman','Civilwar'];

    selectedMovie(movie:String){
        this.recentMovie= movie;
        this.cart.push(movie);
        alert(movie +' movie was added to cart')
    }

}
