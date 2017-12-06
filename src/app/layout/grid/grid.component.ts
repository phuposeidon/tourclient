import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { GridService } from "../../shared/services/grid.service";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()]
})
export class GridComponent implements OnInit {
    private sub: any;
    public id: String;
    public tour: any;
    public category: String;
    public title: String;
    public content: String;
    public price: Number;
    public extraPrice: Number;
    public days: Number;
    constructor(private gridService: GridService, private route: ActivatedRoute,private router: Router) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number
            this.gridService.getById(this.id).subscribe((response: any) => {
                this.tour = response.data;
                this.title = this.tour.title;
                this.category = this.tour.category;
                this.content = this.tour.content;
                this.price = this.tour.price;
                this.extraPrice = this.tour.extraPrice;
                this.days = this.tour.days;
            })
            // In a real app: dispatch action to load the details here.
        });
    }

    update(){
        var dataSource = {
            category: this.category,
            title: this.title,
            content: this.content,
            price: this.price,
            extraPrice: this.extraPrice,
            days: this.days
        };
        this.gridService.updateById(this.id,dataSource).subscribe((response:any)=>{
            if(response.success){
                this.router.navigate(['tour']);
            }
        })
    }

    redirect(){
        this.router.navigate(['home']);
    }
}
