import logo from './logo.svg';
import './App.css';

function App() {


    return ( <
        div className = "Parentbox" >
        <
        fotoproduk / >
        <
        produkinfo isdiscount = "yes"
        name = "youyoyoy"
        category = "holiday" / >
        <
        /div>
    );
}

function fotoproduk() {
    return ( <
        div class = "foto" >
        <
        img src = "sepatu.png" > < /img> <
        /div>
    )
}

function checkdiscount(props) {
    const { isdiscount } = props;
    if (isdiscount == "yes") {
        return (

            <
            p > Discount 50 % off < /p>
        );
    } else if (isdiscount == "coming") {
        return ( <
            p > Akan ada diskon... < /p>
        );
    } else {
        return ( <
            p > Belum ada Discount < /p>
        );
    }

}

function produkinfo(props) {
    const { category, name } = props;
    const price = 7400000;
    const benefits = ["tidak kusut terkena air", "bahan lebih halus", "anti karat dan api"];
    const listBenefits = benefits.map((itemBenefit) =>
        <
        li > { itemBenefit } < /li>
    );
    return ( <
        div className = "deskripsi" >
        <
        p className = "cate" > { category } < /p> <
        h1 className = "title" > { name } < /h1> <
        p className = "price" > IDR { price } < /p> <
        p className = "info" >
        Keunggulan:
        Menggunakan Bahan Mess yang Berkualitas Tinggi Desain Elegan Nyaman Dikenakan Awet dan Tahan Lama Cocok Digunakan Sehari hari Bahan berkualitas tinggi <
        /p> <
        ul > { itemBenefit } <
        /ul>

        <
        a onClick = {
            (e) => tambahchart(name, e) }
        href = "#" > Add to Chart < /a> <
        /div>
    )

    function tambahchart(e) {
        return console.log("Membeli Produk" + e);
    }
}

export default App;