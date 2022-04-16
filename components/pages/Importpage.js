import React from "react";
import Banner from "../banner/Banner";
// sections for this page
import PortfolioComponent from "../custom/sections/portfoliocomponent";
import Hearofsections from "../custom/sections/hearofsections";
// import Example from "./Example";
const Importpage = () => {
  return (
    <div>
      <Banner data="Strony www" pageone="Nowoczesna grafika
" pagetwo="Zwiększona ilość klientów" pagethree="Stałe wsparcie"/>
<Hearofsections title="Jak Cię widzą, tak Cię piszą" 
content="bW świecie internetu, z pewnością dotyczy to stron www. Zaprojektujemy Twoją witrynę tak, aby była nowoczesną, przynoszącą Ci dumę wizytówką. Strona internetowa powinna nierozerwalnie łączyć się z marką firmy. Zadbamy o stronę graficzną oraz odpowiedni układ informacji, który przyciągnie wzrok do tych najważniejszych. Stawiamy na atrakcyjny wygląd oraz łatwą i czytelną obsługę. Strona internetowa powinna być intuicyjna. Dzięki temu klienci chętniej poznają jej zawartość. Zyskasz też przejrzysty system zarządzania treścią. Będziesz mógł samodzielnie dodawać lub zmieniać informacje, bez najmniejszego problemu, o każdej porze dnia i nocy."
titlecol1="dasdda" 
contentcol1="ddasdsad"
titlcol2="W dobie mediów społecznościowych, dobra strona internetowa jest na wagę złota"
contentcol2="Aby przyciągnąć klienta, Twoja firma powinna się czymś wyróżniać. Strona www może być kulą u nogi, która pociągnie Cię na dno lub skrzydłami, które poniosą Twój biznes wysoko, w przestworza. Dzięki nam będziesz z dumą podawać adres swojej strony internetowej.

Projektowanie stron internetowych to nasza pasja. Jesteśmy w tym świetni. Stoi za nami ponad 12 lat doświadczenia i niemal 800 zrealizowanych projektów. Na tym jednak nie koniec! Nie osiadamy na laurach i nieustannie się rozwijamy, uczymy się nowych rzeczy, dzięki czemu i Tobie możemy zaoferować najnowocześniejsze rozwiązania. Dlaczego warto zadbać o swoją internetową wizytówkę?

Zacznijmy od tego, że klienci każdą firmę sprawdzają w internecie. Rozglądają się nie tylko na forach i w mediach społecznościowych. Przyglądają się też uważnie stronom internetowym. Dobrze zaprojektowana witryna może nie tylko przyciągnąć potencjalnego klienta, ale i skłonić go do skorzystania z Twojej oferty. Doskonale wiemy, jak zaprojektować stronę internetową, aby internauta „połknął haczyk”."
titlecol3="sdasdasd"
contentcol3="dasdasd"
/>
   <PortfolioComponent data="strony www"/>
    </div>
  );
};

export default Importpage;
