import {interval, map,tap,take,filter} from "rxjs"



const obs$ = interval(1000).pipe(
    tap((i)=> console.log("avant",i)),
    map(i => i*10),
    // filter(i => i<=50),
    tap((i)=> console.log("après",i)),
    take(5),
)

obs$.subscribe((d) =>console.log("subscribe 01",d))
obs$.subscribe((d) =>console.log("subscribe 02",d))

setTimeout(()=>{
    obs$.subscribe((d) =>console.log("subscribe 03",d))

},2000)