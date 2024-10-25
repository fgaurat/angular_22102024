import {interval, map,tap,filter,share,take, switchMap} from "rxjs"


const source$ = interval(1000)

// const result$ = source$.pipe(
//     switchMap(() => interval(500).pipe(
//         take(5),
//         map(i=>i+1)
//     ))
// )

const result$ = source$.pipe(
    switchMap(() => interval(200).pipe(
      take(5),
      map(x => x + 1)
  ))
  );


result$.subscribe((x)=>console.log('switchMap',x))