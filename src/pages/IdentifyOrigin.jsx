import { FaInfoCircle } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
function IdentifyOrigin() {
  const PAGEURL = window.location.href.split("/");
  const { dataa, loading, error } = useFetch(
    `https://mexmon-uz-server.onrender.com/data/${PAGEURL[PAGEURL.length - 1]}`
  );
  function formatDate(inputDate) {
    var parts = inputDate.split("-");
    var year = parts[0];
    var month = parts[1];
    var day = parts[2];
    var newDate = day + "-" + month + "-" + year;
    return newDate;
  }
  function formatTochka(inputDate) {
    var parts = inputDate.split(".");
    var year = parts[0];
    var month = parts[1];
    var day = parts[2];
    var newDate = year + "-" + month + "-" + day;
    return newDate;
  }
  console.log(dataa && dataa);

  return (
    <>
      <div className="row col-md-7 col-md-offset-3">
        <h4 className="top-title">
          {" "}
          <img
            src="https://emehmon.uz/sximo/images/logo-sximo.png"
            width="222px"
            style={{ verticalAlign: "bottom" }}
          />
          &nbsp;<b>ORIGIN DATA: </b>
          <span style={{ color: "#0e76a8" }}>{dataa != null && dataa.id}</span>
        </h4>
      </div>
      <br />
      <div className="row">
        <div className="col-md-7 col-md-offset-3">
          <div className="panel-heading">
            <h5 className="panel-title">
              <a
                style={{ fontWeight: 700, color: "#0A246A" }}
                data-toggle="collapse"
                href="#common-info"
                aria-expanded="true">
                <FaInfoCircle className="fa fa-info-circle" />
                &nbsp;Общая информация{" "}
              </a>
            </h5>
          </div>
          <div
            className="panel-body collapse col-md-12 in"
            id="common-info"
            style={{ background: "rgb(253, 253, 253)" }}
            aria-expanded="true">
            <table
              className="dataTable row-border"
              style={{
                fontFamily: '"Open sans", Courier, monospace',
                backgroundColor: "#fff",
                marginLeft: 15,
              }}>
              <tbody>
                <tr>
                  <td className="label-view text-left">
                    <label>Рег. №</label>
                  </td>
                  <td>
                    <strong style={{ fontWeight: 600, letterSpacing: 2 }}>
                      {dataa != null && dataa.PersonalNO}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td className="label-dark-blue text-left">
                    <label>ПИНФЛ:</label>
                  </td>
                  <td style={{ fontWeight: 600, letterSpacing: 2 }}>
                    {dataa != null && dataa.Pinfl}
                  </td>
                </tr>
                <tr>
                  <td className="label-dark-blue text-left">
                    <label>Фамилия, Имя, Отчество:</label>
                  </td>
                  <td> {dataa != null && dataa.FullName}</td>
                </tr>
                <tr>
                  <td className="label-view text-leftt">
                    <label>Д/Р</label>
                  </td>
                  <td>{dataa != null && formatTochka(dataa.BirthDate)}</td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Страна рождения</label>
                  </td>
                  <td className="flagTD">
                    <img
                      src="https://emehmon.uz/uploads/flags/170.png"
                      width="40px"
                      style={{ border: "1px solid #666" }}
                    />
                    &nbsp; {dataa != null && dataa.County}
                  </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Гражданство</label>
                  </td>
                  <td className="flagTD">
                    <img
                      src="https://emehmon.uz/uploads/flags/170.png"
                      width="40px"
                      style={{ border: "1px solid #666" }}
                    />
                    &nbsp; {dataa != null && dataa.County}
                  </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Откуда</label>
                  </td>
                  <td className="flagTD">
                    <img
                      src="https://emehmon.uz/uploads/flags/170.png"
                      width="40px"
                      style={{ border: "1px solid #666" }}
                    />
                    &nbsp; {dataa != null && dataa.County}
                  </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Проживает в номере:</label>
                  </td>
                  <td>{dataa != null && dataa.RoomNumber}</td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Сколько дней будет проживать:</label>
                  </td>
                  <td>{dataa != null && dataa.HowDays}</td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Пол</label>
                  </td>
                  <td>
                    {dataa != null && dataa.Sex == "M" ? "Мужчина" : "Женщина"}
                  </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Прибыл</label>
                  </td>
                  <td>{dataa != null && dataa.Arrived}</td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Визит</label>
                  </td>
                  <td>{dataa != null && dataa.Visit} </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Тип гостя</label>
                  </td>
                  <td>{dataa != null && dataa.GuestType} </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Убыл</label>
                  </td>
                  <td>{dataa != null && dataa.Departed}</td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Тип документа</label>
                  </td>
                  <td>{dataa != null && dataa.DocumentType}</td>
                </tr>
                <tr>
                  <td width="30%" className="label-view text-left">
                    <label>Паспорт дата/Выдан: </label>
                  </td>
                  <td>{dataa != null && formatDate(dataa.PassportDate)} / </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Виза № (Кем выдана)</label>
                  </td>
                  <td>{dataa != null && dataa.VisaIssueBy}</td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>КПП и дата</label>
                  </td>
                  <td className="text-black">
                    {dataa != null && dataa.CheckpointAndDate}
                  </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Оплата: </label>
                  </td>
                  <td>
                    <b>{dataa != null && dataa.Payment}</b>
                  </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Обновлено</label>
                  </td>
                  <td>{dataa != null && dataa.Refresh}</td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Гостиница</label>
                  </td>
                  <td>
                    <strong>{dataa != null && dataa.Hotel}</strong>
                  </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Зарегистрировал</label>
                  </td>
                  <td>{dataa != null && dataa.Admin}</td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>Выписал</label>
                  </td>
                  <td>{dataa != null && dataa.Admin} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-7 col-md-offset-3">
          <div className="panel-heading">
            <h5 className="panel-title">
              <a
                style={{ fontWeight: 700, color: "#0A246A" }}
                data-toggle="collapse"
                href="#common-info2"
                aria-expanded="true">
                <FaInfoCircle className="fa fa-info-circle" />
                &nbsp;Информация о турсборе{" "}
              </a>
            </h5>
          </div>
          <div
            className="panel-body collapsed col-md-12 collapse"
            id="common-info2"
            style={{ background: "rgb(253, 253, 253)" }}>
            <table
              className="dataTable row-border"
              cellPadding="6px"
              style={{
                fontFamily: '"Open sans", Courier, monospace',
                backgroundColor: "#fff",
              }}>
              <tbody>
                <tr>
                  <td className="label-view text-left" width="35%">
                    <label> СУТКИ ПРОЖИВАНИЯ: </label>
                  </td>
                  <td className="text-info font-bold">
                    <b>2</b>
                  </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label> БРВ: </label>
                  </td>
                  <td className="text-info font-bold">
                    <b>340,000.00</b>
                  </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>% СТАВКА от БРВ: </label>
                  </td>
                  <td className="text-info font-bold">
                    <b>10.00</b>
                  </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>НАЧИСЛЕНИЕ СУММЫ ТУРСБОРА: </label>
                  </td>
                  <td className="text-info font-bold">68 000,00</td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>НАЧИСЛЕНИЕ КОЛ-ВО СУТОК ТУРСБОРА: </label>
                  </td>
                  <td className="text-info font-bold">
                    <b>2,00</b>
                  </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label>ИТОГОВАЯ СУММА ТУРСБОРА: </label>
                  </td>
                  <td className="text-info font-bold">
                    <b>68 000,00</b>
                  </td>
                </tr>
                <tr>
                  <td className="label-view text-left">
                    <label> &nbsp;</label>
                  </td>
                  <td className="text-info font-bold">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-7 col-md-offset-3">
          <div className="panel-heading">
            <h5 className="panel-title">
              <a
                style={{ fontWeight: 700, color: "#0A246A" }}
                data-toggle="collapse"
                href="#common-info3"
                aria-expanded="true">
                <FaInfoCircle className="fa fa-info-circle" />
                &nbsp;Информация о детях{" "}
              </a>
            </h5>
          </div>
          <div
            className="panel-body collapsed col-md-12 collapse"
            id="common-info3"
            style={{ background: "rgb(253, 253, 253)" }}>
            <br />
            <br />
            <label>&nbsp;&nbsp;&nbsp; Нет данных о детях ....</label>
            <br />
            <br />
          </div>
        </div>
        <div className="col-md-7 col-md-offset-3">
          <div className="panel-heading">
            <h5 className="panel-title">
              <a
                style={{ fontWeight: 700, color: "#0A246A" }}
                data-toggle="collapse"
                aria-expanded="true"
                href="#common-info4">
                <FaInfoCircle className="fa fa-info-circle" />
                &nbsp;Отзывы{" "}
              </a>
            </h5>
          </div>
          <div
            className="panel-body collapsed col-md-12 collapse"
            id="common-info4"
            style={{ background: "rgb(253, 253, 253)" }}>
            <table className="dataTable row-border" id="feedbacks_table">
              <thead>
                <tr>
                  <td>
                    <b>Дата:</b>
                  </td>
                  <td>
                    <b>Отзыв</b>
                  </td>
                  <td>
                    <b>Гостиница</b>
                  </td>
                  <td>
                    <b>Администратор</b>
                  </td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
        <div className="col-md-7 col-md-offset-3">
          <div className="panel-heading">
            <h5 className="panel-title">
              <a
                style={{ fontWeight: 700, color: "#0A246A" }}
                data-toggle="collapse"
                aria-expanded="true"
                href="#common-info5">
                <FaInfoCircle className="fa fa-info-circle" />
                &nbsp;События{" "}
              </a>
            </h5>
          </div>
          <div
            className="panel-body collapsed col-md-12 collapse"
            id="common-info5"
            style={{ background: "rgb(253, 253, 253)" }}>
            <label>
              {" "}
              &nbsp;Нет данных! Гость ни разу не менял номер (комнату)!{" "}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default IdentifyOrigin;
