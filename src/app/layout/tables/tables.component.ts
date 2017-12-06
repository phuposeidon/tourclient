import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TableService } from "./tables.service";

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    public tours: any[];
    constructor(private tableService: TableService) { }

    ngOnInit() {
        this.tableService.getTour().subscribe((response: any) => {
            this.tours = response.data;
            console.log(this.tours);
        })
    }

    deleteTour(id,i) {
        this.tableService.deleteTour(id).subscribe((response: any) => {
            if (response.success) {
                this.tableService.getTour().subscribe((response: any) => {
                    console.log(i);
                   this.tours = this.tours.slice(0,i);
                })
            }
        })
    }
}
