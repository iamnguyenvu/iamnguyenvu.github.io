//Khoi tao danh sach san pham
function createProduct() {
    {
        let products = [{
            id: 1,
            status: 1, 
            title: 'MŨ BẢO HIỂM FULLFACE M141K',
            img: '../img/fullfaceHelmet/M141K.jpg',
            category: 'Fullface',
            price: 1210000,
            desc: ''
        },
        {
            id: 2,
            status: 1, 
            title: 'MŨ BẢO HIỂM FULLFACE M141',
            img: '../img/fullfaceHelmet/M141.jpg',
            category: 'Fullface',
            price: 1130000,
            desc: ''
        },
        {
            id: 3,
            status: 1, 
            title: 'MŨ BẢO HIỂM FULLFACE H01',
            img: '../img/fullfaceHelmet/H01.png',
            category: 'Fullface',
            price: 975000,
            desc: ''
        },
        {
            id: 4,
            status: 1, 
            title: 'MŨ BẢO HIỂM FULLFACE M138B',
            img: '../img/fullfaceHelmet/M138B.jpg',
            category: 'Fullface',
            price: 760000,
            desc: ''
        },
        {
            id: 5,
            status: 1, 
            title: 'MŨ BẢO HIỂM FULLFACE M266',
            img: '../img/fullfaceHelmet/M266.jpg',
            category: 'Fullface',
            price: 760000,
            desc: ''
        },
        {
            id: 6,
            status: 1, 
            title: 'MŨ BẢO HIỂM FULLFACE M266 DESIGN',
            img: '../img/fullfaceHelmet/M266DESIGN.png',
            category: 'Fullface',
            price: 760000,
            desc: ''
        },
        {
            id: 7,
            status: 1, 
            title: 'MŨ BẢO HIỂM FULLFACE M136',
            img: '../img/fullfaceHelmet/M136.jpg',
            category: 'Fullface',
            price: 590000,
            desc: ''
        },
        {
            id: 8,
            status: 1, 
            title: 'MŨ BẢO HIỂM FULLFACE M136 DESIGN',
            img: '../img/fullfaceHelmet/M136DESIGN.jpg',
            category: 'Fullface',
            price: 620000,
            desc: ''
        },
        {
            id: 9,
            status: 1, 
            title: 'MŨ BẢO HIỂM 3/4 ĐẦU M20D',
            img: '../img/3p4Helmet/M20D.jpg',
            category: '3phan4',
            price: 780000,
            desc: ''
        },
        {
            id: 10,
            status: 1, 
            title: 'MŨ BẢO HIỂM 3/4 ĐẦU M139',
            img: '../img/3p4Helmet/M139.jpg',
            category: '3phan4',
            price: 700000,
            desc: ''
        },
        {
            id: 11,
            status: 1, 
            title: 'MŨ BẢO HIỂM 3/4 ĐẦU M20C DESIGN',
            img: '../img/3p4Helmet/M20CDESIGN.png',
            category: '3phan4',
            price: 630000,
            desc: ''
        },
        {
            id: 12,
            status: 1, 
            title: 'MŨ BẢO HIỂM 3/4 ĐẦU XH 01',
            img: '../img/3p4Helmet/XH01.jpg',
            category: '3phan4',
            price: 600000,
            desc: ''
        },
        {
            id: 13,
            status: 1, 
            title: 'MŨ BẢO HIỂM 3/4 ĐẦU M20C',
            img: '../img/3p4Helmet/M20C.jpg',
            category: '3phan4',
            price: 550000,
            desc: ''
        },
        {
            id: 14,
            status: 1, 
            title: 'MŨ BẢO HIỂM 3/4 ĐẦU M279',
            img: '../img/3p4Helmet/M279.png',
            category: '3phan4',
            price: 420000,
            desc: ''
        },
        {
            id: 15,
            status: 1, 
            title: 'MŨ BẢO HIỂM 1/2 ĐẦU M152K',
            img: '../img/halfHelmet/M152K.jpg',
            category: '1phan2',
            price: 400000,
            desc: ''
        },
        {
            id: 16,
            status: 1, 
            title: 'MŨ BẢO HIỂM 1/2 ĐẦU M153K',
            img: '../img/halfHelmet/M153K.jpg',
            category: '1phan2',
            price: 400000,
            desc: ''
        },
        {
            id: 17,
            status: 1, 
            title: 'MŨ BẢO HIỂM 1/2 ĐẦU M156K',
            img: '../img/halfHelmet/M156K.jpg',
            category: '1phan2',
            price: 400000,
            desc: ''
        },
        {
            id: 18,
            status: 1, 
            title: 'MŨ BẢO HIỂM 1/2 ĐẦU M162K',
            img: '../img/halfHelmet/M162K.png',
            category: '1phan2',
            price: 350000,
            desc: ''
        },
        {
            id: 19,
            status: 1, 
            title: 'MŨ BẢO HIỂM 1/2 ĐẦU M162',
            img: '../img/halfHelmet/M162.png',
            category: '1phan2',
            price: 400000,
            desc: ''
        },
        {
            id: 20,
            status: 1, 
            title: 'MŨ BẢO HIỂM 1/2 ĐẦU M159',
            img: '../img/halfHelmet/M159.png',
            category: '1phan2',
            price: 400000,
            desc: ''
        },
        {
            id: 21,
            status: 1, 
            title: 'MŨ BẢO HIỂM 1/2 ĐẦU M179 DESIGN',
            img: '../img/chinupHelmet/M179DESIGN.jpg',
            category: 'chinup',
            price: 745000,
            desc: ''
        },
        {
            id: 22,
            status: 1, 
            title: 'MŨ BẢO HIỂM 1/2 ĐẦU M179',
            img: '../img/chinupHelmet/M179.jpg',
            category: 'chinup',
            price: 710000,
            desc: ''
        },
        {
            id: 23,
            status: 1, 
            title: 'MŨ BẢO HIỂM TRẺ EM M139',
            img: '../img/kidHelmet/M139.jpg',
            category: 'kid',
            price: 580000,
            desc: ''
        },
        {
            id: 24,
            status: 1, 
            title: 'MŨ BẢO HIỂM TRẺ EM M270',
            img: '../img/kidHelmet/M270.png',
            category: 'kid',
            price: 370000,
            desc: ''
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Nguyễn Hoàng Nguyên Vũ",
            phone: "iamnguyenvu",
            username: "nguyenvu",
            password: "Nguyenvu8888%",
            address: 'https://github.com/iamnguyenvu',
            email: 'iamnguyenvu.gm@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "admin",
            phone: "admin",
            username: "admin",
            password: "Adminpassword1!",
            address: 'https://github.com/iamnguyenvu',
            email: 'iamnguyenvu.gm@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

if (localStorage.getItem('products') === null)  {
window.onload = localStorage.clear();
}
window.onload = createProduct();
window.onload = createAdminAccount();

