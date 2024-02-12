import React from "react";

function PrintData() {
  const link = window.location.search;
  const data = link.split("/");
  console.log(data);
  return (
    <div className="container-print mt-7 mb-10">
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="border-css1 py-16">
            <img src="https://emehmon.uz/sximo/images/logo-sximo.png" alt="" />
          </div>
          <div className="border-css2 flex flex-col items-start gap-10">
            <div className="top-data flex flex-col items-start pt-4">
              <span>
                <span className="bold">Гостиница:</span>
                {data[1]}
              </span>
              <span>
                <span className="bold">РЕГИОН:</span>
                {data[2]}
              </span>
              <span>
                {" "}
                <span className="bold">Адрес:</span>
                {data[3]}
              </span>
              <span>
                <span className="bold">№ ком:</span>203
              </span>
            </div>
            <div className="flex-flex-col ml-[150px]">
              <img
                className="m-auto"
                src="https://api.qrserver.com/v1/create-qr-code/?data=https://emehmon.uz/identify-origin/hotel/4C531338F77CF020750C331852EC8B2D97D335F1&size=40x40"
              />
              <span className="bold">61-3574-2024</span>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="border-css1">
            <p className="p-left">1. Фамилия:</p>
          </div>
          <div className="border-css2">
            <span>{data[4]}</span>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="border-css1">
            <p className="p-left">2. Имя:</p>
          </div>
          <div className="border-css2">
            <span>{data[5]}</span>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="border-css1">
            <p className="p-left">3. Отчество:</p>
          </div>
          <div className="border-css2">
            <span>{data[6]}</span>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="border-css1">
            <p className="p-left">4. дата рождения:</p>
          </div>
          <div className="border-css2">
            <span>{data[7]}</span>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="border-css1">
            <p className="p-left">5. Гражданство:</p>
          </div>
          <div className="border-css2">
            <span>{data[8]}</span>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="border-css1">
            <p className="p-left">6. Документ:</p>
          </div>
          <div className="border-css2">
            <span>{data[9] == 1 ? "Мужской" : "Женский"}</span>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="border-css1">
            <p className="p-left">7. Виза:</p>
          </div>
          <div className="border-css2">
            <span>
              {data[12] == 1 ? "(Выдано: не указано) Срок визы:" : data[12]}
            </span>
          </div>
        </div>{" "}
        <div className="flex gap-1">
          <div className="border-css1">
            <p className="p-left">8. Откуда прибыл:</p>
          </div>
          <div className="border-css2">
            <span>{data[8]}</span>
          </div>
        </div>{" "}
        <div className="flex gap-1">
          <div className="border-css1">
            <p className="p-left">9. КПП:</p>
          </div>
          <div className="border-css2">
            <span className="text-unset">№31, ДАТА: 11.01.2024</span>
          </div>
        </div>{" "}
        <div className="border-css-full">
          <p className="text-unset">
            10. Вместе с ним/ней прибыли дети до 16 лет
          </p>
        </div>
        <div className="flex gap-1 h-[14px]">
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
        <div className="flex gap-1">
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
        <div className="flex gap-1">
          <div className="border-css1">
            <p className="p-left">11. ДАТА ПРИБЫТИЯ:</p>
          </div>
          <div className="border-css2">
            <span className="text-unset">11.01.2024 21:50</span>
          </div>
        </div>{" "}
        <div className="flex gap-1">
          <div className="border-css1">
            <p className="p-left">12. ДАТА УБЫТИЯ:</p>
          </div>
          <div className="border-css2">
            <span className="text-unset"></span>
          </div>
        </div>{" "}
        <div className="flex gap-1">
          <div className="border-css1">
            <p className="p-left">13. АДМИНИСТРАТОР:</p>
          </div>
          <div className="border-css2">
            <span className="text-unset">{data[19]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintData;
