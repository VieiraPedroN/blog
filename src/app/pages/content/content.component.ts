import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dados } from "../../data/dadosNoticia";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
photoContent: string = ""
dataContent: string =  ""
titleContent: string = ""
descriptionContent: string = ""
private id:string | null = "0"

  constructor(private route: ActivatedRoute){ }

  ngOnInit(): void {
      this.route.paramMap.subscribe( value =>
        this.id = value.get("id")
      );

      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dados.filter(article  => article.id == id)[0]
  
    this.photoContent = result.photo
    this.dataContent = result.data
    this.titleContent = result.title
    this.descriptionContent = result.description
   
  }
}
