
// class ReviewBox{ 
//     public users: object[] = [] 
//     constructor(
//         protected counter:number = 0){}

//     public next(){
//         this.counter++
//         if (this.counter < 0) {
//             this.counter = (this.users as object[]).length - 1;
//           }
//         return this.counter;
//     }

//     public getUsers() {
//         return new Promise((resolve) => {
//             fetch('../build/json/users.json').then((res) => {
//                 res.json()}).then(data => {
//                       this.users = data as object[]
//                     resolve(data);
//                     console.log('data got', data);
//                 })
//                     .catch((error) => {
//                         console.error('Error fetching users:', error);
//                         });
//             })
//         // let xhr = new XMLHttpRequest();
//         // xhr.open('GET','../build/json/users.json',true);
//         //     xhr.onload = function(){
//         //         if(this.status == 200){
//         //             let user = JSON.parse(this.responseText); 
//         //             resolve(user);

//         //         }
//         //     }
//         //     xhr.send();
//         });
//     }


//     public prev(){
//         this.counter++;
//         if (this.counter > (this.users as object[]).length - 1) {
//             this.counter = 0;
//         }
//         return this.counter;
//     }

//     public showPerson(){
//         this.getUsers().then(data => {
//             const item = 
//             img.src = item.
//             author.textContent = item.name;
//             job.textContent = item.job;
//             info.textContent = item.text;
//         })
        
//     }
// }


// // select items

// const img = document.getElementById('person-img') as HTMLImageElement;
// const author = document.getElementById('author') as HTMLHeadingElement;
// const job = document.getElementById('job') as HTMLParagraphElement;
// const info = document.getElementById('info') as HTMLParagraphElement;

// const prevBtn = document.querySelector('.prev-btn') as HTMLButtonElement;
// const nextBtn = document.querySelector('.next-btn') as HTMLButtonElement;
// const randomBtn = document.querySelector('.random-btn') as HTMLButtonElement;

// const review = new ReviewBox()
// window.addEventListener('DOMContentLoaded', ()=> {
//     review.showPerson()
//     })

