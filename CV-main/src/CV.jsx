import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import './CV.css'; 

const Resume = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container" style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "2.5em", marginBottom: "10px" }}>Шмайло Арсений</h1>
      <h2 style={{ fontSize: "1.5em", marginBottom: "20px" }}>CV</h2>
      <p>
        <strong>Frontend Developer</strong> <br />
        <a href="mailto:a.schmailo2015@gmail.com">a.schmailo2015@gmail.com</a> 
      </p>

      
      <section>
        <h3>Опыт работы</h3>
        
        <div>
          <h4>Фриланс</h4>
          <p>
            Работал на фрилансе на протяжении одного года
          </p>
        </div>
      </section>

      <section>
        <h3>Образование</h3>
        <p>
        Математика и компьютерные науки (Веб-програм. и интернет-техн.) <br />
          <strong>Мех-Мат БГУ</strong>, 2022 - н.в.
        </p>
      </section>

      <section>
        <h3>Skills</h3>
        <p>
          <strong>Technical:</strong> C++, Figma,
           SQL, React, JS <br />
          <strong>Professional:</strong> Коммуникабельность, дисциплинированность,
          критическое мышление.
        </p>
      </section>

      <section>
        <h3>Языки</h3>
        <p>Английский (B2), Русский (Native)</p>
      </section>

      <section>
        <h3>Проекты</h3>
        <h4>Lamoda</h4>
        <p>
          Проект интернет магазина с фильтрами, поиском. При написании использовал React JS, TailwindCSS. 
          <br />
          <a href="https://github.com/ovoch/Pet-projects/tree/main/lamoda" target="_blank" rel="noopener noreferrer">Ссылка на GitHub</a>
        </p>
        <h4>Notion</h4>
        <p>
          Проект с созданием заметок и регистрацией, которые отправляются на сервер. При создании использовал 
          React JS, json-server, redux, tailwindCSS.
          <br />
          <a href="https://github.com/ovoch/Pet-projects/tree/main/redux" target="_blank" rel="noopener noreferrer">Ссылка на GitHub</a>
        </p>
        <h4>To do list</h4>
        <p>
          Проект списка сделанных заданий с использованием React JS.
          <br />
          <a href="https://github.com/ovoch/Pet-projects/tree/main/to%20do%20list" target="_blank" rel="noopener noreferrer">Ссылка на GitHub</a>
        </p>
      </section>
    </div>
  );
});

const App = () => {
  const componentRef = useRef();

  const handleDownloadPDF = () => {
    const element = componentRef.current;
    const options = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    // Используем html2pdf для сохранения PDF
    html2pdf()
      .from(element)
      .set(options)
      .save();
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <Resume ref={componentRef} />
      <button
        onClick={handleDownloadPDF}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Save as PDF
      </button>
    </div>
  );
};

export default App;
