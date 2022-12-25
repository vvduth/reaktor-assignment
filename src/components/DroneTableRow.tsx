import React, { useEffect } from "react";
const unecessField = ["mac", "ipv4", "ipv6", "firmware", "altitude"];
const formatableField = ["positionX", "positionY"];

const DroneTableRow = ({ drone }: any) => {
  let X_val = Number(drone.getElementsByTagName("positionX")[0].value);
  let Y_val = Number(drone.getElementsByTagName("positionY")[0].value);

  const violateCheck = (x_pos: number, y_pos: number) => {
    let a = (x_pos - 250000) * (x_pos - 250000)
    let b = (y_pos - 250000) * (y_pos - 250000)
    return (Math.sqrt(a+b) >= 100000);
  };

  const passViochecKStyle =
    "py-4 px-6 font-medium whitespace-nowrap text-green-600";
  const notPassVioCheckStyle =
    "py-4 px-6 font-medium whitespace-nowrap text-red-600";
  let style;
  if (violateCheck(X_val, Y_val)) {
    style = passViochecKStyle;
  } else {
    style = notPassVioCheckStyle;
  }

  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      key={Math.floor(Math.random() * 10000)}
    >
      {drone.children.map((droneInfo: any) => (
        <>
          {unecessField.includes(droneInfo.name) ? (
            <></>
          ) : (
            <td
              scope="row"
              className="py-4 px-6 font-medium whitespace-nowrap text-white"
              key={droneInfo.name + droneInfo.value}
            >
              {formatableField.includes(droneInfo.name) ? (
                <>{Number(droneInfo.value).toFixed(1)}</>
              ) : (
                <>{droneInfo.value}</>
              )}
            </td>
          )}
        </>
      ))}
      <td className={`${style}`}>
        {violateCheck(X_val, Y_val) ? <>Passed</> : <>Not pass</>}
      </td>
    </tr>
  );
};

export default DroneTableRow;
