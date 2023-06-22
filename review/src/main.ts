class ReviewBoxes {
    public users: object[] = [];
  
    constructor(protected counter: number = 0) {}
    public getUsers() {
      return new Promise((resolve) => {
        fetch('../build/json/users.json')
          .then((res) => res.json()
          )
          .then((data) => {
            this.users = data as object[];
            resolve(data);
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
          });
      });
    }
  
    public next() {
      this.counter++
      if (this.counter > this.users.length - 1) {
            this.counter = 0;
          }
      return this.counter;
    }
    
    
    public random() {
      this.counter = Math.floor(Math.random() * this.users.length)
      return this.counter;
    }

    public prev() {
      this.counter--;
      if (this.counter < 0) {
        this.counter = this.users.length - 1;
      }
      return this.counter;
    }
  
    public showPerson() {
      this.getUsers().then((data) => {
        const item = this.users[this.counter] as any;
        img.src = item.img as string;
        author.textContent = item.name as string;
        job.textContent = item.job as string;
        info.textContent = item.text as string;
        img.alt = item.alt_text as string;
      });
    }
  }
  
  // select items
  const img = document.getElementById('person-img') as HTMLImageElement;
  const author = document.getElementById('author') as HTMLHeadingElement;
  const job = document.getElementById('job') as HTMLParagraphElement;
  const info = document.getElementById('info') as HTMLParagraphElement;
  
  const prevBtn = document.querySelector('.prev-btn') as HTMLButtonElement;
  const nextBtn = document.querySelector('.next-btn') as HTMLButtonElement;
  const randomBtn = document.querySelector('.random-btn') as HTMLButtonElement;
  
  const review = new ReviewBoxes();
  
  window.addEventListener('DOMContentLoaded', () => {
    review.showPerson();
  });

  prevBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    review.prev();
    review.showPerson();
  })

  nextBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    review.next();
    review.showPerson();
  })

  randomBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    review.random();
    review.showPerson();
  })



