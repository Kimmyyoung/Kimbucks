console.log('connected');

const loadItems = async()=> {
    await fetch('./data/drink.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err));
    
    loadItems.then((data) => {
        allDisplay(data);
        documents(data);
    })
};


const documents = (json) => {
    const checkType = [
        "all",
        "콜드 브루 커피",
        "브루드 커피",
        "에스프레소",
        "프라푸치노",
        "블렌디드",
        "스타벅스 피지오",
        "티 (티바나)",
        "기타 제조 음료",
        "스타벅스 주스(병음료)",
    ];

    for(let count=0; count < checkType.length; count++) {
        document.getElementById(`${chcekType[count]}`)
        .addEventListener('click', (e) => {
            
        });
    }
};

const container = document.querySelector(".list");

const Filter = (json, event) =>{
    if(event.target.id !== "all") {
        if(event.target.checked) {
            for(let i=0; i<Object.keys(json).length; i++){
                Object.keys(json)[i] === event.target.id ? Display(event, json) : false;
            }
            container.style.display = "block";
        }else {
            constainer.style.display = "none";
        }
    } else {
        if(event.target.checked) {
            container.style.display = "block";
            //allDisplay(json);
        }else{
            container.style.display = "none";
        }
    }

    const object = document.getElementsByName("product");
    const a = event.target;

    for(let i=0; i<object.length; i++) {
        if(object[i] != a) {
            object[i].checked = false;
        }
    }
};

// 전체보기 
const allDisplay = (item) => {
    const title = Object.keys(items);
    container.innerHTML = title.map((sub) => createAllItemHTML(sub,items)).join(" ");
}

const createAllItemHTML = (sub, item) => {
    const lists = item[sub]
    .map((list) => {
        return `
            <li class="item">
                <div class="item_container">
                    <div class="item_container">
                        <img src=${list.img} alt="${list.title}" class="item_thumnail"/>
                    </div>
                    <span class="item_description">${list.title}</span>
                </div>
        `;
    })
    .join(" ");
    
}


// 선택된 카테고리의 아이템만 보기 
const Display = (json, event) => {
    const {id} = event.target;
    const list = json[id];
    container.innerHTML = CreateItemHTML(id, list);
};

const CreateItemHTML = (title, lists) => {
    const itemList = lists
    .map((list) => {
        return `
            <li class="item">
                <div class="item_containers">
                    <div class="item_container">
                        <img src=${list.img} alt="${list.title}" class="item_thumnail" />
                    </div>
                    <span class="item_description">${list.title}</span>
                </div>
            </li>
        `;
    })
    .join(" ");


    return `
        <h1 class="category_title">
        ${title}
        </h1>
        <div class="item_list">
        ${itemList}
        </div>
    `;
}