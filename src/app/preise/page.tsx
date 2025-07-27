import './preise.css';

interface PriceItem {
  service: string;
  price: string;
}

const priceList: PriceItem[] = [
  {
    service: "Paar – Geburtsvorbereitungs kurs (intensiv)",
    price: "180€"
  },
  {
    service: "Eltern – Kind – Pass Gespräch",
    price: "50€"
  },
  {
    service: "K-Taping Anlage",
    price: "25€/Anlage"
  }
];

export default function Preise() {
  return (
    <main className="container">
      <h1>Preise</h1>
      <div className="price-list">
        {priceList.map((item, index) => (
          <div key={index} className="price-item">
            <span className="service">{item.service}</span>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
    </main>
  );
} 