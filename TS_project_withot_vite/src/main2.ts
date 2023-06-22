
interface Item{
    id: string,
    item: string,
    checked: boolean
}

class ListItem implements Item{

    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false
    ){ }

    get id(): string{
        return this._id;
    }
    set id(id:string){
        this._id = id;
    }
    get item(): string{
        return this._item;
    }
    set item(item:string){
        this._item = item;
    }
    get checked(): boolean{
        return this._checked;
    }
    set checked(checked:boolean){
        this._checked = checked;
    }
}

interface List{
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(ItemObj : ListItem):void,
    removeItem(id:string):void
}

class FullList implements List{

    static instance : FullList = new FullList()
    private constructor(private _list : ListItem[] = []){}
    get list():ListItem[]{
        return this._list
    }

    load(): void {
        const storedList: string|null = localStorage.getItem("myList")
        if (typeof storedList !== 'string') return

        const parsedList: {
            _id:string,
            _item:string,
            _checked:boolean
        }[]= JSON.parse(storedList)

        parsedList.forEach(itemObj=>{
            const newListItem = new ListItem(itemObj._id, itemObj._item,itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
    }

    save(): void {
        localStorage.setItem("myList",JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addItem(ItemObj: ListItem): void {
        this._list.push(ItemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }

}

interface DOMList{
    ul : HTMLUListElement,
    clear(): void,
    render(fullList: FullList):void
}

class ListTemplate implements DOMList{
    ul : HTMLUListElement
    static instance : ListTemplate = new ListTemplate()
    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ''
    }

    render(fullList: FullList): void {
        this.clear()
        fullList.list.forEach(item =>{
            const li = document.createElement('li') as HTMLLIElement
            li.className = "item"
            
            const check = document.createElement('input') as HTMLInputElement
            check.type = "checkbox"
            check.id = item.id
            check.tabIndex = 0
            check.checked = item.checked
            li.append(check)

            check.addEventListener('change',()=>{
                item.checked = !item.checked
                fullList.save()
            })

            const label = document.createElement('label') as HTMLLabelElement
            label.htmlFor = item.id
            label.textContent = item.item
            li.append(label)

            const button = document.createElement('button') as HTMLButtonElement
            button.className = 'button'
            button.textContent = 'X'
            li.append(button)

            button.addEventListener('click',()=>{
                fullList.removeItem(item.id)
                this.render(fullList)
            })
            
            this.ul.append(li)
        })
    }

}

const initApp = ():void =>{
    const fullList = FullList.instance
    const template = ListTemplate.instance
    const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement
    itemEntryForm.addEventListener("submit",(event: SubmitEvent):void =>{
      event.preventDefault()
      const input = document.getElementById('newItem') as HTMLInputElement
      const newEntryText: string = input.value.trim()
      if(!newEntryText.length){
        return
      }
      const itemId: number = fullList.list.length? parseInt(fullList.list[fullList.list.length - 1].id +1) : 1;
      const newItem = new ListItem(itemId.toString(),newEntryText)
  
      fullList.addItem(newItem)
      template.render(fullList)
  
    })
  
    const clearItems = document.getElementById('clearItemsButton') as HTMLButtonElement
    clearItems.addEventListener('click',():void=>{
      fullList.clearList()
      template.clear()
    })
  
    fullList.load()
    template.render(fullList)
  
  }
  
  document.addEventListener("DOMContentLoaded",initApp)