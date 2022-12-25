export const  violateCheckPilot = (x_pos: number, y_pos: number) => {
    let a = (x_pos - 250000) * (x_pos - 250000)
    let b = (y_pos - 250000) * (y_pos - 250000)
    return (Math.sqrt(a+b) >= 100000);
  };