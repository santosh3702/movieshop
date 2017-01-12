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
    public recentMovie = "None";
    public cart = [];
   public  movieList = ['kaidhi150','batmanvsuperman','Civilwar'];

    selectedMovie(movie){
        this.recentMovie= movie;
        this.cart.push(movie);
        alert(movie +' movie was added to cart')
    }

}
