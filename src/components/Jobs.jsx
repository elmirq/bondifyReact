import React, { useState } from "react";
import "../style.css";
import img1 from "/foto/otaq.jpg";
import img2 from "/foto/tower2.jpg"
import img3 from "/foto/kor.jpg"

const Jobs = () =>{

    const cardData = [
        {
          title: "Otaqdan qaçma",
          text: "Daha ətraflı müəlumət üçün düyməyə basın",
          back: "Komandalar müəyyən mövzuya əsaslanan otağa kilidlənir və məhdud zaman ərzində ipuclarını taparaq tapmacaları həll edib oradan çıxmağa çalışırlar. Bu fəaliyyət, komanda daxilində ünsiyyət, yaradıcı düşüncə və təzyiq altında əməkdaşlığı inkişaf etdirir.",
          img: img1
        },
        {
          title: "Qüllə qurma",
          text: "Daha ətraflı müəlumət üçün düyməyə basın",
          back: "Komandalara kağız, yapışqan və borular kimi sadə materiallar verilir və onlardan ən hündür dayanaqlı qüllə tikmələri tələb olunur. Bu fəaliyyət, planlaşdırma, iş bölgüsü və komanda işi bacarıqlarını gücləndirir.",
          img: img2
        },
        {
          title: "Gözü baqlı parkur",
          text: "Daha ətraflı müəlumət üçün düyməyə basın",
          back: "Bir komanda üzvünün gözləri bağlanır və o, yalnız komanda yoldaşlarının sözlü təlimatları ilə maneələri keçməlidir. Bu fəaliyyət, etimad və dəqiq ünsiyyət bacarıqlarını inkişaf etdirir.",
          img: img3
        }
      ];

const [flippedStates, setFlippedStates] = useState( Array(cardData.length).fill(false));
const toggleFlip = (index) => {
    const newStates = [...flippedStates];
    newStates[index] = !newStates[index];
    setFlippedStates(newStates)
 }
        
return(
    <div className="container py-5 ">
      <h3 id="basliq"> Neler var?</h3>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {cardData.map((card, i) => (
        <div className="col" key={card.id}>
          <div className={`flip-card ${flippedStates[i] ? "flipped" : ""}`}>
            <div className="flip-card-inner">
              <div className="flip-card-front" id="cardFront">
                <div className="card position-relative h-100">
                  <div className="card-body" id="cardFront" >
                    <img src={card.img} className="card-img-top mb-2" alt="" id="cardImg"/>
                    <h5 className="card-title">{card.title}</h5>
                    <hr />
                    <h7 className="card-text">{card.text}</h7>
             
                  </div>
                  <button
                      onClick={() => toggleFlip(i)}
                      className="btn position-absolute btn-primary mt-3" id="flipBtn"
                    >
                      Daha Ətraflı
                    </button>
                </div>
              </div>
              <div className="flip-card-back" id="cardBack">
                <div className="card h-100" style={{backgroundColor: "transparent"}}>
                  <div className="card-body" id="card-body" style={{backgroundColor: "rgb(50, 76, 226)", color: "white"}}>
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.back}</p>
                   
                  </div>
                  <button
                      onClick={() => toggleFlip(i)}
                      className="btn position-absolute btn-secondary mt-3" id="flipBtn"
                    >
                      Geri
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Jobs;