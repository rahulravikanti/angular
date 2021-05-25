import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected= new EventEmitter<Recipe>();

  recipes:Recipe[]=[
    new Recipe('A test recipe','This is a sample recipe', 
    'https://static01.nyt.com/images/2021/01/17/dining/kimchi-rice/merlin_181989396_094243fb-1b13-4117-aeaa-d413d5a1dd8c-articleLarge.jpg'),
    
    new Recipe('Another test recipe','This is a sample recipe', 
    'https://static01.nyt.com/images/2021/01/17/dining/kimchi-rice/merlin_181989396_094243fb-1b13-4117-aeaa-d413d5a1dd8c-articleLarge.jpg')
 
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);  

  }

}
