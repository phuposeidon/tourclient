import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormService } from "./form.service";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Router } from "@angular/router";
import { setTimeout } from 'timers';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    public category: String;
    public title: String;
    public content: String;
    public price: Number;
    public extraPrice: Number;
    public days: Number = 9;
    public isSuccess: Boolean = true;
    constructor(private elem: ElementRef, private router: Router, private formService: FormService) { }

    upload() {
        var dataSource = {
            category: this.category,
            title: this.title,
            content: this.content,
            price: this.price,
            extraPrice: this.extraPrice,
            days: this.days
        };

        console.log(this.content);
        //locate the file element meant for the file upload.
        let inputEl: HTMLInputElement = this.elem.nativeElement.querySelector('#photo1');
        let inputEl2: HTMLInputElement = this.elem.nativeElement.querySelector('#photo2');
        let inputEl3: HTMLInputElement = this.elem.nativeElement.querySelector('#photo3');
        let inputEl4: HTMLInputElement = this.elem.nativeElement.querySelector('#photo4');
        //get the total amount of files attached to the file input.
        let fileCount: number = inputEl.files.length;
        //create a new fromdata instance
        let formData = new FormData();


        if (fileCount > 0) { // a file was selected
            //append the key name 'photo' with the first file in the element
            formData.append('photo', inputEl.files.item(0));
            formData.append('photo', inputEl2.files.item(0));
            formData.append('photo', inputEl3.files.item(0));
            formData.append('photo', inputEl4.files.item(0));
            //call the angular http method
            console.log(dataSource);
            this.formService.uploadFile(formData, dataSource).subscribe(
                (success) => {
                    this.router.navigate(['tour']);
                },
                (error) => alert(error))
        }
    }
    //End
    redirect(){
        this.router.navigate(['home']);
    }

    ngOnInit() {
        console.log(this.category);
    }
}
