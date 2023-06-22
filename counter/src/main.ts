
class Counter{
    constructor(
        protected count:number = 0
        ){
        this.reset()
    }

    public reset(){
        this.count = 0;
        return this.count
    }

    public increase(){
        this.count++
        return this.count;
    }

    public decrease(){
        this.count--
        return this.count;
    }

    public display(){
        const v = document.getElementById('value') as HTMLSpanElement ;
        if(this.count>0){
            v.style.color = 'green'
        }
        else if(this.count<0){
            v.style.color = 'red'
        }else{
            v.style.color = 'black'
        }
        v.textContent = (this.count as unknown) as string
    }
}


const decreaseButton = document.getElementById('decrease') as HTMLButtonElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;
const increaseButton = document.getElementById('increase') as HTMLButtonElement;

const count = new Counter();

resetButton.addEventListener('click', btn => {
    btn.preventDefault();
    count.reset();
    count.display();
  })

increaseButton.addEventListener('click', btn => {
    btn.preventDefault();
    count.increase();
    count.display();
  })

decreaseButton.addEventListener('click', btn => {
    btn.preventDefault();
    count.decrease();
    count.display();
  })
