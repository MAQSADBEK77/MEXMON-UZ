import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
function Home() {
  // GENERATE CODE
  const MINIMUM = 3574;
  const MAXIMUM = 3600;
  const HowDays = Math.ceil(Math.random() * 6);
  const generateQRCODE1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  const generateQRCODE2 =
    Math.floor(Math.random() * (MAXIMUM - MINIMUM + 1)) + MINIMUM;
  const generate24 = Math.floor(Math.random() * 2400);
  const KPPrandom =
    Math.floor(Math.random() * (9999999 - 1101090 + 1)) + 1101090;
  // GENERATE CODE
  // TIME CODE
  const HozirgiVaqt = new Date();
  HozirgiVaqt.setMinutes(-generate24);
  const HozirgiYil = HozirgiVaqt.getFullYear();
  const HozirgiOy = HozirgiVaqt.getMonth() + 1;
  const HozirgiKun = HozirgiVaqt.getDate();
  const HozirgiSoat = HozirgiVaqt.getHours();
  const HozirgiDaqiqa = HozirgiVaqt.getMinutes();
  // TIME CODE
  const [mode, setMode] = useState(true);
  const [mehmonxona, setMehmonxona] = useState("1");
  const [COMnumber, setCOMnumber] = useState(
    generateQRCODE1 >= 50
      ? Math.floor(Math.random() * (110 - 101 + 1)) + 101
      : Math.floor(Math.random() * (210 - 201 + 1)) + 201
  );
  const [familiya, setFamiliya] = useState("");
  const [ism, setIsm] = useState("");
  const [otasiIsmi, setOtasiIsmi] = useState("XXX");
  const [passportSeriya, setPassportSeriya] = useState("");
  const [TugilganSana, setTugilganSana] = useState("");
  const [KelganDavlat, setKelganDavlat] = useState("Республика Таджикистан");
  const [jinsi, setJinsi] = useState("Мужской");
  const [PassportBerilganSana, setPasportBerilganSana] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [Viza, setViza] = useState(
    `ТИП: №${KPPrandom}; ${HozirgiKun < 10 ? "0" : ""}${HozirgiKun}.${
      HozirgiOy < 10 ? "0" : ""
    }${HozirgiOy}.${HozirgiYil}`
  );
  function randomString(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  function randomString2(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  function randomNumber(length) {
    var result = "";
    var characters = "0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const handleChange = (e) => {
    setInputDate(e.target.value);
    const parts = e.target.value.split("-");
    if (parts.length === 3) {
      const formatted = `${parts[2]}.${parts[1]}.${parts[0]}`;
      setTugilganSana(formatted);
    } else {
      setTugilganSana("");
    }
  };
  const generator40 = `${randomString2(2)}${randomNumber(2)}${randomString(
    34
  )}${randomNumber(2)}`;
  const data = [
    {
      mehmonxona,
      COMnumber,
      ism,
      familiya,
      otasiIsmi,
      passportSeriya,
      TugilganSana,
      KelganDavlat,
      Kun: `${HozirgiKun < 10 ? "0" : ""}${HozirgiKun}.${
        HozirgiOy < 10 ? "0" : ""
      }${HozirgiOy}.${HozirgiYil}`,
      YetibKeldi: `${HozirgiKun < 10 ? "0" : ""}${HozirgiKun}.${
        HozirgiOy < 10 ? "0" : ""
      }${HozirgiOy}.${HozirgiYil} ${
        HozirgiSoat < 10 ? "0" : ""
      }${HozirgiSoat}:${HozirgiDaqiqa <= 10 ? "0" : ""}${HozirgiDaqiqa}`,
      jinsi,
      PassportBerilganSana,
      Viza,
      KOM_RAQAMI: "112",
      KPPrandom,
      NO: Math.floor(Math.random() * (32 - 30 + 1)) + 30,
    },
  ];
  // USEFETCH codes

  // USEFETCH codes
  function SendData(e) {
    e.preventDefault();
  }
  const { dataa, loading, error, postdata } = useFetch(
    "https://mexmon-uz-server.onrender.com/data"
  );
  const sendAPI = async () => {
    // POST so'rovi yuborish
    await postdata({
      id: generator40,
      PersonalNO: `${generateQRCODE1}-${generateQRCODE2}-2024`,
      Pinfl: "TAJIKISTAN",
      FullName: `${ism} ${familiya} ${otasiIsmi}`,
      BirthDate: TugilganSana,
      County: "TAJIKISTAN",
      RoomNumber: COMnumber,
      HowDays: HowDays,
      Sex: jinsi,
      Arrived: `${HozirgiKun < 10 ? "0" : ""}${HozirgiKun}.${
        HozirgiOy < 10 ? "0" : ""
      }${HozirgiOy}.${HozirgiYil} ${
        HozirgiSoat - Math.ceil(Math.random() * 12) < 10 ? "0" : ""
      }${HozirgiSoat}:${
        HozirgiDaqiqa <= 10 ? "0" : ""
      }${HozirgiDaqiqa}:${Math.ceil(Math.random() * 60)}`,
      Visit: "Трудовая деятельность",
      GuestType: "Пенсионер",
      Departed: `${HozirgiKun < 10 ? "0" : ""}${HozirgiKun + HowDays}.${
        HozirgiOy < 10 ? "0" : ""
      }${HozirgiOy}.${HozirgiYil} ${HozirgiSoat < 10 ? "0" : ""}${
        HozirgiSoat + Math.ceil(Math.random() * 7)
      }:${HozirgiDaqiqa <= 10 ? "0" : ""}${
        HozirgiDaqiqa + Math.ceil(Math.random() * 5)
      }:${Math.ceil(Math.random() * 60)}, Сутки проживания: ${HowDays}`,
      DocumentType: `Паспорт ${passportSeriya}`,
      PassportDate: PassportBerilganSana,
      VisaIssueBy: `(Выдана: не указано) Срок визы:`,
      CheckpointAndDate: `№31 ; Дата: ${
        HozirgiKun < 10 ? "0" : ""
      }${HozirgiKun}.${HozirgiOy < 10 ? "0" : ""}${HozirgiOy}.${HozirgiYil}`,
      Payment: "1,00 UZS",
      Refresh: `${HozirgiKun < 10 ? "0" : ""}${HozirgiKun}.${
        HozirgiOy < 10 ? "0" : ""
      }${HozirgiOy}.${HozirgiYil} ${
        HozirgiSoat < 10 ? "0" : ""
      }${HozirgiSoat}:${HozirgiDaqiqa + 3 <= 10 ? "0" : ""}${
        HozirgiDaqiqa + 3
      }`,
      Hotel:
        data[0].mehmonxona == 1
          ? "HOTEL-LYUKS"
          : data[0].mehmonxona == 2
          ? "Шок Хостел"
          : data[0].mehmonxona == 3
          ? "Пять звёзд"
          : data[0].mehmonxona == 4
          ? "AvHouse"
          : data[0].mehmonxona == 5
          ? "Арт Отель"
          : data[0].mehmonxona == 6
          ? "Tes Hotel"
          : data[0].mehmonxona == 7
          ? "Hostel Luxe"
          : data[0].mehmonxona == 8
          ? "Ambassador"
          : data[0].mehmonxona == 9
          ? "24 Hours"
          : data[0].mehmonxona == 10
          ? "O’Hostel"
          : data[0].mehmonxona == 11
          ? "SoloHotel"
          : data[0].mehmonxona == 12
          ? "Sky Mini-hotel"
          : data[0].mehmonxona == 13
          ? "Авеню отел"
          : data[0].mehmonxona == 14
          ? "АЯХостел"
          : data[0].mehmonxona == 15
          ? "Hotel Costa"
          : data[0].mehmonxona == 16
          ? "Спектр-Отель"
          : data[0].mehmonxona == 17
          ? "В гостях у сказки"
          : data[0].mehmonxona == 18
          ? " Hotel Manas"
          : data[0].mehmonxona == 19
          ? "Hostel House"
          : data[0].mehmonxona == 20
          ? "Travelers Lodge"
          : data[0].mehmonxona == 21
          ? "Классико Отель"
          : data[0].mehmonxona == 22
          ? "Light House"
          : data[0].mehmonxona == 23
          ? "Aurora"
          : data[0].mehmonxona == 24
          ? "Отель Кристалл"
          : data[0].mehmonxona == 25
          ? "Максима Хостел"
          : data[0].mehmonxona == 26
          ? "Time Hostel"
          : data[0].mehmonxona == 27
          ? "Garden Hostel"
          : data[0].mehmonxona == 28
          ? "Star Hostel"
          : data[0].mehmonxona == 29
          ? "Babel Rooms"
          : data[0].mehmonxona == 30
          ? "Hotel Taj Altyn"
          : data[0].mehmonxona == 31
          ? "Mini Hostel"
          : data[0].mehmonxona == 32
          ? "Антиотель"
          : data[0].mehmonxona == 33
          ? "Mega Polis Hostel"
          : data[0].mehmonxona == 34
          ? "Bedbox"
          : data[0].mehmonxona == 35
          ? "Интерхостел"
          : data[0].mehmonxona == 36
          ? "Aqua Oasis"
          : data[0].mehmonxona == 37
          ? "Гостевой дом"
          : data[0].mehmonxona == 38
          ? "Candle Hostel"
          : data[0].mehmonxona == 39
          ? "ОТЕЛИКС"
          : data[0].mehmonxona == 40
          ? "МХостел"
          : data[0].mehmonxona == 41
          ? "Sheraton Hotel"
          : data[0].mehmonxona == 42
          ? "Lazy Days"
          : data[0].mehmonxona == 43
          ? "Far Away Home"
          : data[0].mehmonxona == 44
          ? "Электроотель"
          : data[0].mehmonxona == 45
          ? "Bnovo Hotel"
          : data[0].mehmonxona == 46
          ? "Firebird Hostel"
          : data[0].mehmonxona == 47
          ? "Shah Palace"
          : data[0].mehmonxona == 48
          ? "The Nest"
          : data[0].mehmonxona == 49
          ? "Экспотель"
          : data[0].mehmonxona == 50
          ? "Hostel Exotica"
          : data[0].mehmonxona == 51
          ? "Hostel Luxe"
          : data[0].mehmonxona == 52
          ? "Mighty Hostel"
          : data[0].mehmonxona == 53
          ? "Guest House"
          : data[0].mehmonxona == 54
          ? "COSMOS HOTEL"
          : data[0].mehmonxona == 55
          ? " Global Hostel"
          : data[0].mehmonxona == 56
          ? "Three Stars"
          : data[0].mehmonxona == 57
          ? "Мини-отель"
          : data[0].mehmonxona == 58
          ? "Favorite Hotel"
          : data[0].mehmonxona == 59
          ? " Эко Дом"
          : "HOTEL ROMA",
      Admin:
        data[0].mehmonxona == 1
          ? "SH.XOMIDOV"
          : data[0].mehmonxona == 2
          ? "A.ISMOILOV"
          : data[0].mehmonxona == 3
          ? "A.MIRTILLAYEV"
          : data[0].mehmonxona == 4
          ? "R.AMINJONOV"
          : data[0].mehmonxona == 5
          ? "T.TURSUNOVA"
          : data[0].mehmonxona == 6
          ? "A.XUDOYBERDIYEV"
          : data[0].mehmonxona == 7
          ? "Z.YOQUBOV"
          : data[0].mehmonxona == 8
          ? "I.MIRZAYEV"
          : data[0].mehmonxona == 9
          ? "M.XAYRULLO"
          : data[0].mehmonxona == 10
          ? "X.XAYRULLO"
          : data[0].mehmonxona == 11
          ? "E.SHERMATOV"
          : data[0].mehmonxona == 12
          ? "B.NORINOV"
          : data[0].mehmonxona == 13
          ? "I.KAZAKOV"
          : data[0].mehmonxona == 14
          ? "H.KAMOLOV"
          : data[0].mehmonxona == 15
          ? "A.ABDULFATTOYEV"
          : data[0].mehmonxona == 16
          ? "M.KOMILOVA"
          : data[0].mehmonxona == 17
          ? "X.OLIMJONOV"
          : data[0].mehmonxona == 18
          ? "M.MUXITDINOV"
          : data[0].mehmonxona == 19
          ? "O.MUSTAFAQULOV"
          : data[0].mehmonxona == 20
          ? "S.ABDULLAYEV"
          : data[0].mehmonxona == 21
          ? "I.RAXMATJONOV"
          : data[0].mehmonxona == 22
          ? "D.AZIMOV"
          : data[0].mehmonxona == 23
          ? "P.QODIROVA"
          : data[0].mehmonxona == 24
          ? "M.ASQAROV"
          : data[0].mehmonxona == 25
          ? "Z.ALIMOV"
          : data[0].mehmonxona == 26
          ? "S.ILXOMOV"
          : data[0].mehmonxona == 27
          ? "I.FOZILOV"
          : data[0].mehmonxona == 28
          ? "SH.SHAKIROV"
          : data[0].mehmonxona == 29
          ? "N.KAMOLOV"
          : data[0].mehmonxona == 30
          ? "M.USMONOV"
          : data[0].mehmonxona == 31
          ? "V.MILLAEV"
          : data[0].mehmonxona == 32
          ? "Y.TOJIBOYEV"
          : data[0].mehmonxona == 33
          ? "X.MADAMINOVA"
          : data[0].mehmonxona == 34
          ? "D.OBIDOV"
          : data[0].mehmonxona == 35
          ? "X.ABDUMALIKOVA"
          : data[0].mehmonxona == 36
          ? "A.BOQIJONOV"
          : data[0].mehmonxona == 37
          ? "SH.XAYDAROV"
          : data[0].mehmonxona == 38
          ? "Q.DADABOYEV"
          : data[0].mehmonxona == 39
          ? "I.ANVARJONOV"
          : data[0].mehmonxona == 40
          ? "B.TOHIROV"
          : data[0].mehmonxona == 41
          ? "J.QODIROV"
          : data[0].mehmonxona == 42
          ? "I.QOSIMOV"
          : data[0].mehmonxona == 43
          ? "M.NAZIROVA"
          : data[0].mehmonxona == 44
          ? "B.RUSTAMOVA"
          : data[0].mehmonxona == 45
          ? "A.FARAZOV"
          : data[0].mehmonxona == 46
          ? "R.AXMEDOV"
          : data[0].mehmonxona == 47
          ? "X.SHAVKATOV"
          : data[0].mehmonxona == 48
          ? "A.NURALIYEV"
          : data[0].mehmonxona == 49
          ? "R.ERGASHEVA"
          : data[0].mehmonxona == 50
          ? "M.VALIYEV"
          : data[0].mehmonxona == 51
          ? "F.DAVRONOV"
          : data[0].mehmonxona == 52
          ? "I.NUMANOV"
          : data[0].mehmonxona == 53
          ? "X.MATISAYEV"
          : data[0].mehmonxona == 54
          ? "M.OBIDOV"
          : data[0].mehmonxona == 55
          ? "K.YOQUBOV"
          : data[0].mehmonxona == 56
          ? "S.EMINBEKOV"
          : data[0].mehmonxona == 57
          ? "A.NORALIYEV"
          : data[0].mehmonxona == 58
          ? "A.ASANOV"
          : data[0].mehmonxona == 59
          ? "N.TILLABOYEV"
          : "M.RUZIBOYEV",
    });
    console.log(dataa);
    document.querySelector(
      "body"
    ).innerHTML = `<h1 class="SUCESS">Bo'ldi TEZLASHAMIZZZZZZZZZZZZZZZZZZZZZZZZZZZ...</h1>`;
  };
  return (
    <>
      <input
        type="checkbox"
        onClick={() => setMode(!mode)}
        className="w-8 h-8 fixed right-2 bottom-2"
      />
      <div className={`container ${mode ? "block" : "hidden"}`}>
        <form
          onSubmit={(e) => SendData(e)}
          className={`mt-5 flex flex-wrap gap-5 justify-between`}>
          {" "}
          <label className="flex flex-col gap-1">
            <span className="text-xs">Гостиница</span>
            <select
              onChange={(e) => setMehmonxona(e.target.value)}
              className="select select-bordered w-60">
              <option value="1">HOTEL-LYUKS</option>
              <option value="2"> Шок Хостел</option>
              <option value="3">Пять звёзд</option>
              <option value="4">AvHouse</option>
              <option value="5">Арт Отель</option>
              <option value="6">Tes Hotel</option>
              <option value="7">Hostel Luxe</option>
              <option value="8">Ambassador</option>
              <option value="9">24 Hours</option>
              <option value="10">O’Hostel</option>
              <option value="11">SoloHotel</option>
              <option value="12">Sky Mini-hotel</option>
              <option value="13">Авеню отел</option>
              <option value="14">АЯХостел</option>
              <option value="15">Hotel Costa</option>
              <option value="16">Спектр-Отель</option>
              <option value="17">В гостях у сказки</option>
              <option value="18">Hotel Manas</option>
              <option value="19">Hostel House</option>
              <option value="20">Travelers Lodge</option>
              <option value="21">Классико Отель</option>
              <option value="22">Light House</option>
              <option value="23">Aurora</option>
              <option value="24">Отель Кристалл</option>
              <option value="25">Максима Хостел</option>
              <option value="26">Time Hostel</option>
              <option value="27">Garden Hostel</option>
              <option value="28">Star Hostel</option>
              <option value="29">Babel Rooms</option>
              <option value="30">Hotel Taj Altyn</option>
              <option value="31">Mini Hostel</option>
              <option value="32">Антиотель</option>
              <option value="33">Mega Polis Hostel</option>
              <option value="34">Bedbox</option>
              <option value="35">Интерхостел</option>
              <option value="36">Aqua Oasis</option>
              <option value="37">Гостевой дом</option>
              <option value="38">Candle Hostel</option>
              <option value="39">ОТЕЛИКС</option>
              <option value="40">МХостел</option>
              <option value="41">Sheraton Hotel</option>
              <option value="42">Lazy Days</option>
              <option value="43">Far Away Home</option>
              <option value="44">Электроотель</option>
              <option value="45">Bnovo Hotel</option>
              <option value="46">Firebird Hostel</option>
              <option value="47">Shah Palace</option>
              <option value="48">The Nest</option>
              <option value="49">Экспотель</option>
              <option value="50">Hostel Exotica</option>
              <option value="51">Hostel Luxe</option>
              <option value="52">Mighty Hostel</option>
              <option value="53">Guest House</option>
              <option value="54">COSMOS HOTEL</option>
              <option value="55">Global Hostel</option>
              <option value="56">Three Stars</option>
              <option value="57">Мини-отель</option>
              <option value="58">Favorite Hotel</option>
              <option value="59">Эко Дом</option>
              <option value="60">HOTEL ROMA</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs">№ ком</span>
            <input
              required
              type="text"
              placeholder="№ ком"
              className="input input-bordered input-info w-60"
              onChange={(e) => setCOMnumber(e.target.value)}
              value={COMnumber}
            />{" "}
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs">Фамилия</span>
            <input
              required
              type="text"
              placeholder="Фамилия"
              className="input input-bordered input-info w-60"
              onChange={(e) => setFamiliya(e.target.value)}
              value={familiya}
            />{" "}
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs">Имя</span>
            <input
              required
              type="text"
              placeholder="Имя"
              className="input input-bordered input-info w-60"
              onChange={(e) => setIsm(e.target.value)}
              value={ism}
            />{" "}
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs">Отчество</span>
            <input
              required
              type="text"
              placeholder="Отчество"
              className="input input-bordered input-info w-60"
              onChange={(e) => setOtasiIsmi(e.target.value)}
              value={otasiIsmi}
            />{" "}
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs">Passport seriya va raqami</span>
            <input
              required
              type="text"
              placeholder="AA00000000"
              className="input input-bordered input-info w-60"
              onChange={(e) => setPassportSeriya(e.target.value)}
              value={passportSeriya}
            />{" "}
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs">Дата рождения</span>
            <input
              required
              type="date"
              placeholder="Д/Р"
              className="input input-bordered input-info w-60"
              onChange={(e) => handleChange(e)}
              value={inputDate}
            />{" "}
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs">ОТКУДА ПРИБЫЛ</span>
            <select
              onChange={(e) => setKelganDavlat(e.target.value)}
              className="select select-bordered w-60">
              <option value="Республика Таджикистан">
                Tojikiston respublikasi
              </option>
              <option value="Кыргызская Республика">
                Qirg'iziston respublikasi
              </option>
              <option value="Республика Афганистан">
                Afg'oniston respublikasi
              </option>
              <option value="Республика Казахстан">
                Qozog'iston respublikasi
              </option>
              <option value="Республика Туркменистан">
                Turkmaniston respublikasi
              </option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs">Jinsi</span>
            <select
              onChange={(e) => setJinsi(e.target.value)}
              className="select select-bordered w-60">
              <option value="Мужской">Erkak</option>
              <option value="Женский">Ayol</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs">Паспорт дата/Выдан</span>
            <input
              required
              type="date"
              className="input input-bordered input-info w-60"
              onChange={(e) => setPasportBerilganSana(e.target.value)}
              value={PassportBerilganSana}
            />{" "}
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs">Виза № (Кем выдана)</span>
            <input
              required
              type="text"
              placeholder="Виза № (Кем выдана)"
              className="input input-bordered input-info w-60"
              onChange={(e) => setViza(e.target.value)}
              value={Viza}
            />{" "}
          </label>{" "}
        </form>
        <button onClick={sendAPI} className="btn btn-success mt-5">
          Tasdiqlash
        </button>
      </div>
      <div className={`container container2`}>
        <div className="container-print mt-7 mx-auto">
          <div className="text-bg-father">
            <div className="flex flex-col gap-2 texts">
              <div className="flex gap-2">
                <div className="border-css1 py-16">
                  <img
                    src="https://emehmon.uz/sximo/images/logo-sximo.png"
                    alt=""
                  />
                </div>
                <div className="border-css2 flex flex-col items-start gap-10">
                  <div className="top-data flex flex-col items-start pt-4">
                    <span>
                      <span className="bold">Гостиница:</span>
                      <span className="mexmonxona">
                        {data[0].mehmonxona == 1
                          ? "HOTEL-LYUKS"
                          : data[0].mehmonxona == 2
                          ? "Шок Хостел"
                          : data[0].mehmonxona == 3
                          ? "Пять звёзд"
                          : data[0].mehmonxona == 4
                          ? "AvHouse"
                          : data[0].mehmonxona == 5
                          ? "Арт Отель"
                          : data[0].mehmonxona == 6
                          ? "Tes Hotel"
                          : data[0].mehmonxona == 7
                          ? "Hostel Luxe"
                          : data[0].mehmonxona == 8
                          ? "Ambassador"
                          : data[0].mehmonxona == 9
                          ? "24 Hours"
                          : data[0].mehmonxona == 10
                          ? "O’Hostel"
                          : data[0].mehmonxona == 11
                          ? "SoloHotel"
                          : data[0].mehmonxona == 12
                          ? "Sky Mini-hotel"
                          : data[0].mehmonxona == 13
                          ? "Авеню отел"
                          : data[0].mehmonxona == 14
                          ? "АЯХостел"
                          : data[0].mehmonxona == 15
                          ? "Hotel Costa"
                          : data[0].mehmonxona == 16
                          ? "Спектр-Отель"
                          : data[0].mehmonxona == 17
                          ? "В гостях у сказки"
                          : data[0].mehmonxona == 18
                          ? " Hotel Manas"
                          : data[0].mehmonxona == 19
                          ? "Hostel House"
                          : data[0].mehmonxona == 20
                          ? "Travelers Lodge"
                          : data[0].mehmonxona == 21
                          ? "Классико Отель"
                          : data[0].mehmonxona == 22
                          ? "Light House"
                          : data[0].mehmonxona == 23
                          ? "Aurora"
                          : data[0].mehmonxona == 24
                          ? "Отель Кристалл"
                          : data[0].mehmonxona == 25
                          ? "Максима Хостел"
                          : data[0].mehmonxona == 26
                          ? "Time Hostel"
                          : data[0].mehmonxona == 27
                          ? "Garden Hostel"
                          : data[0].mehmonxona == 28
                          ? "Star Hostel"
                          : data[0].mehmonxona == 29
                          ? "Babel Rooms"
                          : data[0].mehmonxona == 30
                          ? "Hotel Taj Altyn"
                          : data[0].mehmonxona == 31
                          ? "Mini Hostel"
                          : data[0].mehmonxona == 32
                          ? "Антиотель"
                          : data[0].mehmonxona == 33
                          ? "Mega Polis Hostel"
                          : data[0].mehmonxona == 34
                          ? "Bedbox"
                          : data[0].mehmonxona == 35
                          ? "Интерхостел"
                          : data[0].mehmonxona == 36
                          ? "Aqua Oasis"
                          : data[0].mehmonxona == 37
                          ? "Гостевой дом"
                          : data[0].mehmonxona == 38
                          ? "Candle Hostel"
                          : data[0].mehmonxona == 39
                          ? "ОТЕЛИКС"
                          : data[0].mehmonxona == 40
                          ? "МХостел"
                          : data[0].mehmonxona == 41
                          ? "Sheraton Hotel"
                          : data[0].mehmonxona == 42
                          ? "Lazy Days"
                          : data[0].mehmonxona == 43
                          ? "Far Away Home"
                          : data[0].mehmonxona == 44
                          ? "Электроотель"
                          : data[0].mehmonxona == 45
                          ? "Bnovo Hotel"
                          : data[0].mehmonxona == 46
                          ? "Firebird Hostel"
                          : data[0].mehmonxona == 47
                          ? "Shah Palace"
                          : data[0].mehmonxona == 48
                          ? "The Nest"
                          : data[0].mehmonxona == 49
                          ? "Экспотель"
                          : data[0].mehmonxona == 50
                          ? "Hostel Exotica"
                          : data[0].mehmonxona == 51
                          ? "Hostel Luxe"
                          : data[0].mehmonxona == 52
                          ? "Mighty Hostel"
                          : data[0].mehmonxona == 53
                          ? "Guest House"
                          : data[0].mehmonxona == 54
                          ? "COSMOS HOTEL"
                          : data[0].mehmonxona == 55
                          ? " Global Hostel"
                          : data[0].mehmonxona == 56
                          ? "Three Stars"
                          : data[0].mehmonxona == 57
                          ? "Мини-отель"
                          : data[0].mehmonxona == 58
                          ? "Favorite Hotel"
                          : data[0].mehmonxona == 59
                          ? " Эко Дом"
                          : "HOTEL ROMA"}
                      </span>
                    </span>
                    <span>
                      <span className="bold">РЕГИОН:</span>
                      ФЕРГАНСКАЯ ОБЛ.
                    </span>
                    <span>
                      {" "}
                      <span className="bold">Адрес:</span>
                      <span className="mexmonxona">
                        {data[0].mehmonxona == 1
                          ? "VATAN RAVNAQI 31"
                          : data[0].mehmonxona == 2
                          ? "TOSHTEPA 15"
                          : data[0].mehmonxona == 3
                          ? "JIYDAZOR 23"
                          : data[0].mehmonxona == 4
                          ? "OQIBAT 29"
                          : data[0].mehmonxona == 5
                          ? "EZGULIK 12"
                          : data[0].mehmonxona == 6
                          ? "EZGULIK 1"
                          : data[0].mehmonxona == 7
                          ? "FARABI 14"
                          : data[0].mehmonxona == 8
                          ? "PESHVOZOV 11"
                          : data[0].mehmonxona == 9
                          ? "YAHSHI NIYAT 3"
                          : data[0].mehmonxona == 10
                          ? "TABOBAT 27"
                          : data[0].mehmonxona == 11
                          ? "FAROVON TURMUSH 11"
                          : data[0].mehmonxona == 12
                          ? "OQIBAT 2"
                          : data[0].mehmonxona == 13
                          ? "YANGI TURMUSH 3"
                          : data[0].mehmonxona == 14
                          ? "FARABI 14"
                          : data[0].mehmonxona == 15
                          ? "NURAFSHON 14"
                          : data[0].mehmonxona == 16
                          ? "XALQOBOD 32"
                          : data[0].mehmonxona == 17
                          ? "FARG`ONA 15"
                          : data[0].mehmonxona == 18
                          ? "XALQOBOD 3"
                          : data[0].mehmonxona == 19
                          ? "VODIL 13"
                          : data[0].mehmonxona == 20
                          ? "SHARSHARA 5"
                          : data[0].mehmonxona == 21
                          ? "CHARAG`ON 36"
                          : data[0].mehmonxona == 22
                          ? "TAROVAT 25"
                          : data[0].mehmonxona == 23
                          ? "SARXAD 12"
                          : data[0].mehmonxona == 24
                          ? "YAHSHI NIYAT 9"
                          : data[0].mehmonxona == 25
                          ? "DO`STLIK 1"
                          : data[0].mehmonxona == 26
                          ? "BAZARNAYA 64"
                          : data[0].mehmonxona == 27
                          ? "GULSHAN 19"
                          : data[0].mehmonxona == 28
                          ? "FARABI 26"
                          : data[0].mehmonxona == 29
                          ? "EZGULIK 26"
                          : data[0].mehmonxona == 30
                          ? "JIYDAZOR 20"
                          : data[0].mehmonxona == 31
                          ? "PAXTAKOR 28"
                          : data[0].mehmonxona == 32
                          ? "SANATORIYLAR 16"
                          : data[0].mehmonxona == 33
                          ? "SAMO 27"
                          : data[0].mehmonxona == 34
                          ? "OQ YO`L 14"
                          : data[0].mehmonxona == 35
                          ? "BOBUR 1"
                          : data[0].mehmonxona == 36
                          ? "TOSHTEPA 3"
                          : data[0].mehmonxona == 37
                          ? " 8-MART 21"
                          : data[0].mehmonxona == 38
                          ? "ISLOMOBOD 28"
                          : data[0].mehmonxona == 39
                          ? "CHARVADOR 6"
                          : data[0].mehmonxona == 40
                          ? "OYBEK 14"
                          : data[0].mehmonxona == 41
                          ? "TUKISTON 17"
                          : data[0].mehmonxona == 42
                          ? "PESHVOZOV 18"
                          : data[0].mehmonxona == 43
                          ? "CHIMYON 19"
                          : data[0].mehmonxona == 44
                          ? "SULTANA DAMINOVA 1"
                          : data[0].mehmonxona == 45
                          ? " OBODLIK 13"
                          : data[0].mehmonxona == 46
                          ? "NAVRUZ 16"
                          : data[0].mehmonxona == 47
                          ? "VATAN RAVNAQI 24"
                          : data[0].mehmonxona == 48
                          ? "SHARSHARA 19"
                          : data[0].mehmonxona == 49
                          ? "CHIMYON 14"
                          : data[0].mehmonxona == 50
                          ? "PULGON 7"
                          : data[0].mehmonxona == 51
                          ? "MOXLAROYIM 24"
                          : data[0].mehmonxona == 52
                          ? "BERUNI 28"
                          : data[0].mehmonxona == 53
                          ? "YANGI TURMUSH 9"
                          : data[0].mehmonxona == 54
                          ? "SANATORIYLAR 21"
                          : data[0].mehmonxona == 55
                          ? "CHIMYON 25"
                          : data[0].mehmonxona == 56
                          ? "BUSTON 41"
                          : data[0].mehmonxona == 57
                          ? "LOLA 31"
                          : data[0].mehmonxona == 58
                          ? "IFTIXOR 18"
                          : data[0].mehmonxona == 59
                          ? "DO`STLIK 7"
                          : "PAXTAKOR 21"}
                      </span>
                    </span>
                    <span>
                      <span className="bold">№ ком:</span>
                      {COMnumber}
                    </span>
                  </div>
                  <div className="flex-flex-col ml-[150px]">
                    <img
                      className="m-auto QR-CODE"
                      src={`https://api.qrserver.com/v1/create-qr-code/?data=https://emehmon.netlify.app/identify-origin/hotel/${generator40}&size=500x500`}
                    />
                    <span className="bold">
                      {generateQRCODE1}-{generateQRCODE2}-2024
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="border-css1">
                  <p className="p-left">1. Фамилия:</p>
                </div>
                <div className="border-css2">
                  <span className="uppercase">{familiya}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="border-css1">
                  <p className="p-left">2. Имя:</p>
                </div>
                <div className="border-css2">
                  <span className="uppercase">{ism}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="border-css1">
                  <p className="p-left">3. Отчество:</p>
                </div>
                <div className="border-css2">
                  <span className="uppercase">{otasiIsmi}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="border-css1">
                  <p className="p-left">4. дата рождения:</p>
                </div>
                <div className="border-css2">
                  <span>{TugilganSana}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="border-css1">
                  <p className="p-left">5. Гражданство:</p>
                </div>
                <div className="border-css2">
                  <span className="uppercase">{KelganDavlat}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="border-css1">
                  <p className="p-left">6. Документ:</p>
                </div>
                <div className="border-css2">
                  <span>
                    ПАСПОРТ: {passportSeriya}; ВЫДАН: {PassportBerilganSana}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="border-css1">
                  <p className="p-left">7. Виза:</p>
                </div>
                <div className="border-css2">
                  <span>{Viza}</span>
                </div>
              </div>{" "}
              <div className="flex gap-2">
                <div className="border-css1">
                  <p className="p-left">8. Откуда прибыл:</p>
                </div>
                <div className="border-css2">
                  <span>{KelganDavlat}</span>
                </div>
              </div>{" "}
              <div className="flex gap-2">
                <div className="border-css1">
                  <p className="p-left">9. КПП:</p>
                </div>
                <div className="border-css2">
                  <span className="text-unset">
                    №{data[0].NO}, ДАТА: {data[0].Kun}
                  </span>
                </div>
              </div>{" "}
              <div className="border-css-full">
                <p className="text-unset">
                  10. Вместе с ним/ней прибыли дети до 16 лет
                </p>
              </div>
              <div className="flex gap-2 h-[14px]">
                <div className="border-css1">
                  <span className="text-unset">Имя</span>
                </div>{" "}
                <div className="border-css3">
                  <span className="text-unset">Пол</span>
                </div>{" "}
                <div className="border-css4">
                  <span className="text-unset">Дата рождения</span>
                </div>
              </div>{" "}
              <div className="flex gap-2">
                <div className="border-css1">
                  <span className="text-unset"></span>
                </div>{" "}
                <div className="border-css3">
                  <span className="text-unset"></span>
                </div>{" "}
                <div className="border-css4">
                  <span className="text-unset h-[11px]"></span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="border-css1">
                  <p className="p-left">11. ДАТА ПРИБЫТИЯ:</p>
                </div>
                <div className="border-css2">
                  <span className="text-unset">{data[0].YetibKeldi}</span>
                </div>
              </div>{" "}
              <div className="flex gap-2">
                <div className="border-css1">
                  <p className="p-left">12. ДАТА УБЫТИЯ:</p>
                </div>
                <div className="border-css2">
                  <span className="text-unset"></span>
                </div>
              </div>{" "}
              <div className="flex gap-2">
                <div className="border-css1">
                  <p className="p-left">13. АДМИНИСТРАТОР:</p>
                </div>
                <div className="border-css2">
                  <span className="text-unset">
                    {" "}
                    <span className="mexmonxona">
                      {data[0].mehmonxona == 1
                        ? "SH.XOMIDOV"
                        : data[0].mehmonxona == 2
                        ? "A.ISMOILOV"
                        : data[0].mehmonxona == 3
                        ? "A.MIRTILLAYEV"
                        : data[0].mehmonxona == 4
                        ? "R.AMINJONOV"
                        : data[0].mehmonxona == 5
                        ? "T.TURSUNOVA"
                        : data[0].mehmonxona == 6
                        ? "A.XUDOYBERDIYEV"
                        : data[0].mehmonxona == 7
                        ? "Z.YOQUBOV"
                        : data[0].mehmonxona == 8
                        ? "I.MIRZAYEV"
                        : data[0].mehmonxona == 9
                        ? "M.XAYRULLO"
                        : data[0].mehmonxona == 10
                        ? "X.XAYRULLO"
                        : data[0].mehmonxona == 11
                        ? "E.SHERMATOV"
                        : data[0].mehmonxona == 12
                        ? "B.NORINOV"
                        : data[0].mehmonxona == 13
                        ? "I.KAZAKOV"
                        : data[0].mehmonxona == 14
                        ? "H.KAMOLOV"
                        : data[0].mehmonxona == 15
                        ? "A.ABDULFATTOYEV"
                        : data[0].mehmonxona == 16
                        ? "M.KOMILOVA"
                        : data[0].mehmonxona == 17
                        ? "X.OLIMJONOV"
                        : data[0].mehmonxona == 18
                        ? "M.MUXITDINOV"
                        : data[0].mehmonxona == 19
                        ? "O.MUSTAFAQULOV"
                        : data[0].mehmonxona == 20
                        ? "S.ABDULLAYEV"
                        : data[0].mehmonxona == 21
                        ? "I.RAXMATJONOV"
                        : data[0].mehmonxona == 22
                        ? "D.AZIMOV"
                        : data[0].mehmonxona == 23
                        ? "P.QODIROVA"
                        : data[0].mehmonxona == 24
                        ? "M.ASQAROV"
                        : data[0].mehmonxona == 25
                        ? "Z.ALIMOV"
                        : data[0].mehmonxona == 26
                        ? "S.ILXOMOV"
                        : data[0].mehmonxona == 27
                        ? "I.FOZILOV"
                        : data[0].mehmonxona == 28
                        ? "SH.SHAKIROV"
                        : data[0].mehmonxona == 29
                        ? "N.KAMOLOV"
                        : data[0].mehmonxona == 30
                        ? "M.USMONOV"
                        : data[0].mehmonxona == 31
                        ? "V.MILLAEV"
                        : data[0].mehmonxona == 32
                        ? "Y.TOJIBOYEV"
                        : data[0].mehmonxona == 33
                        ? "X.MADAMINOVA"
                        : data[0].mehmonxona == 34
                        ? "D.OBIDOV"
                        : data[0].mehmonxona == 35
                        ? "X.ABDUMALIKOVA"
                        : data[0].mehmonxona == 36
                        ? "A.BOQIJONOV"
                        : data[0].mehmonxona == 37
                        ? "SH.XAYDAROV"
                        : data[0].mehmonxona == 38
                        ? "Q.DADABOYEV"
                        : data[0].mehmonxona == 39
                        ? "I.ANVARJONOV"
                        : data[0].mehmonxona == 40
                        ? "B.TOHIROV"
                        : data[0].mehmonxona == 41
                        ? "J.QODIROV"
                        : data[0].mehmonxona == 42
                        ? "I.QOSIMOV"
                        : data[0].mehmonxona == 43
                        ? "M.NAZIROVA"
                        : data[0].mehmonxona == 44
                        ? "B.RUSTAMOVA"
                        : data[0].mehmonxona == 45
                        ? "A.FARAZOV"
                        : data[0].mehmonxona == 46
                        ? "R.AXMEDOV"
                        : data[0].mehmonxona == 47
                        ? "X.SHAVKATOV"
                        : data[0].mehmonxona == 48
                        ? "A.NURALIYEV"
                        : data[0].mehmonxona == 49
                        ? "R.ERGASHEVA"
                        : data[0].mehmonxona == 50
                        ? "M.VALIYEV"
                        : data[0].mehmonxona == 51
                        ? "F.DAVRONOV"
                        : data[0].mehmonxona == 52
                        ? "I.NUMANOV"
                        : data[0].mehmonxona == 53
                        ? "X.MATISAYEV"
                        : data[0].mehmonxona == 54
                        ? "M.OBIDOV"
                        : data[0].mehmonxona == 55
                        ? "K.YOQUBOV"
                        : data[0].mehmonxona == 56
                        ? "S.EMINBEKOV"
                        : data[0].mehmonxona == 57
                        ? "A.NORALIYEV"
                        : data[0].mehmonxona == 58
                        ? "A.ASANOV"
                        : data[0].mehmonxona == 59
                        ? "N.TILLABOYEV"
                        : "M.RUZIBOYEV"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
  