import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaapp';

  public moveWindow(option:string){
    if(option != null){
      const d = document.getElementById(option);
      d!.scrollIntoView();
    }
  }

  changeView(){
        document.getElementById("aboutDiv")?.scrollIntoView();
    }


}
