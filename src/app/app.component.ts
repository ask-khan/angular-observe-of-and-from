import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  ngOnInit () {
    of(2,3,4,5,6).subscribe( item => {
      console.log( item );
    })

    from([2,3,4,5,6]).subscribe({
      next:(item) => console.log( "item result", item ),
      error:(err) => console.log( "item error", err ),
      complete:() => console.log( 'complete' )

    })

    of(2,3,4,5,6).subscribe({
      next:(item) => console.log( "item result", item ),
      error:(err) => console.log( "item error", err ),
      complete:() => console.log( 'complete' )

    })
  }  
}
